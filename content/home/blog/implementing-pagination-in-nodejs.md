---
id: "4"
title: "Implementing pagination in Node.js"
datePublished: "25th Nov, 2022"
slug: "implementing-pagination-in-nodejs"
image: "/assets/images/blog/implement-cursor-pagination-with-nodejs.jpg"
description: "Take your knowledge of the back-end to the next level by learning how to implement offset-based pagination and cursor-based pagination."
featuredPost: false
tech: ["Node.js", "Prisma"]
tags: ["Pagination", "Prisma", "Node.js"]
---

## Introduction

Pagination is defined as the process of seperating of bunch of data into smaller, more digestable pieces. Clicking through an archive of products, or turning the page of a book, are both examples of pagintion. In a technical setting, pagination is more efficient, quick, and server-friendly to break the results up into multiple pages.

For one, most users aren't going to look beyond the first X results regardless of how many there are on one page, so there would be a lot of results unused that were retrieved, processed, and sent to the client which is wasted bandwidth and CPU time. In fact, by paginating you increase the chance that they will continue on beyond where they would have stopped if it were all on one page.

Two, if this were just text data it would be pretty quick even for a large amount of data, but if you throw in pictures and stuff that have to be displayed for each result, such as in a catalog, then things really start slowing down the more results which are returned.

In this post I discuss the two most common implementations of pagination and how to implement both of them using Node.js and Prisma.

## Offset-based pagination

Offset-based pagination uses of a `offset` and `limit` parameter in order to offset (skip) a certain number of records and limit (return) a number of records. For example, let's say a user requests a list of products with an offset of 100 and limit of 50 from a database. The database would skip the first 100 items and return the next 50. This would result in the user receiving records 101-150.

### Advantages of offset-based pagination

- Quick and simple to implement on the client and server
- Users have the ability to jump to arbitrary pages. For example, if a user wanted to skip to the sixth page from the first page, they could simply just jump to the sixth page, instead of having to pass through pages two, three, four and five.

### Disadvantages of offset-based pagination

- Inefficient for large or distributed datasets, as the number of records increase the slower it will get to fetch those records, representing a time complexity of o(n).
- Can produce unreliable results if there are frequent changes to the data while the pagination is in process.

### Use cases for offset pagination

Offset pagination should be used for shallow pagination of a small result set. For example, a recipe interface that allows you to filter recipe records by author and paginate the results.

### Node.js implemenation

Now that you have a brief understanding of offset based pagination, we can get to the fun part of actually implementing it into a Node.js application. To demonstrate this method of pagination I have set up a simple express roue called `users-offset`,which you can see below. This route returns a paginated response of users from a database. The full source code can be found in the Github [repo](https://github.com/PerrySmithMoss/common-features.git).

```javascript
app.get("/users-offset-pagination", async (req, res) => {
  const maxLimit = 6;
  const limit = req.query.limit ? +req.query.limit : maxLimit;
  const page = req.query.page ? +req.query.page : 1;

  try {
    const userCount = await DB.getCountOfTotalUsers();
    const totalPages = Math.ceil(userCount / limit);

    if (page > totalPages) {
      res.status(422).json({
        message: `Specified page too large. Please use page between 1 and ${totalPages}`,
      });
    } else if (page < 1) {
      res.status(422).json({
        message: `Specified page must between 1 and ${totalPages}`,
      });
    } else if (limit > maxLimit) {
      res.status(422).json({
        message: `Specified limit too large. Please use limit of ${maxLimit} or lower.`,
      });
    } else {
      const users = await DB.getUsersByOffset(page, limit);

      res.status(200).json({
        totalItems: userCount,
        totalItemsPerPage: limit,
        totalPages,
        firtPageUrl: `${process.env.SERVER_DOMAIN}/users?page=1`,
        lastPageUrl: `${process.env.SERVER_DOMAIN}/users?page=${totalPages}`,
        nextPageUrl:
          page + 1 > totalPages ? null : `${process.env.SERVER_DOMAIN}/users?page=${page + 1}`,
        previousPageUrl:
          page - 1 < 1 ? null : `${process.env.SERVER_DOMAIN}/users?page=${page - 1}`,
        users,
      });
    }
  } catch (err) {
    res.status(500).json({
      error: `${err}.`,
    });
  }
});
```

As you can see in the code above, I am first grabbing the `limit` and `page` number passed in by the user. If there is no limit I have set a `maxLimit` of 6, meaning a max of 6 results will show on each page. Also, if there is no page I am setting the default page to 1.

Next I am making a database call called `getCountOfTotalUsers()`, which returns the number of users in the database. This function looks like the following:

```javascript
async function getCountOfTotalUsers() {
  try {
    const [usersCount] = await db.query(
      "SELECT COUNT(*) AS usersCount FROM Users ORDER BY created_at DESC",
    );

    return usersCount[0].usersCount;
  } catch (err) {
    throw new Error(err);
  }
}
```

Using the count returned by the `getCountOfTotalUsers()` function, and the limit, either passed in by the user or default of 6 we can calculate the total amount of pages. This can be done by simply dividing the `userCount` by the `limit` and using `Math.ceil()` to return the smallest integer greater than or equal to its numeric argument.

In the code I then do some error checking/handling to take care of the cases where either the `page` passed in is greater than the `totalPages` available, if the `page` passed in is less than 1, or if the `limit` passed in is greater than the `maxLimit` was set.

If all checks pass then we can finally fetch our paginated list of users. This is done by using a function called `getUsersByOffset(page, limit)`, which, as you can see, we pass the requested `page` (offset) and `limit` to as parameters. This function is responsible for returning a paginated list of users from the database. You can see the function below:

```javascript
async function getUsersByOffset(offset, limit) {
  try {
    const [results] = await db.query("SELECT * FROM Users ORDER BY created_at DESC LIMIT ?, ?", [
      offset,
      limit,
    ]);

    return results;
  } catch (err) {
    throw new Error(err);
  }
}
```

Within the function above it will query the database for a list of users, limiting the results to the limit parameter passed in, offset (skip) the number of records that the user passes in and order the results by the `created_at` date field in descending order. For example, let's say a user wanted to limit the results to 5 and offset by 5, the database would first order the records by in descending order using the created_at field, it would then offset (skip) the first 5 records and then return the following 5 results.

Lastly, we then return a JSON response with the paginated users and paging information.

---

## Cursor-based pagination

The other common implementation of pagination is cursor-based, whereby a `cursor` will be used to represent a piece of data that contains a pointer to an element and the info to get the next/previous elements. Important point here is that the identifier must have a unique value and should be sequential in nature. Ideal candidates for this are numeric IDs and timestamps. In most cases, the cursor is opaque, so users cannot manipulate it. For example, let's say we have a message thread with the most recent 20 messages and we want to fetch older messages in the thread. Using cursor-based pagination we could use the date of the last message as the `cursor` and fetch older messages in the thread by returing the most recent messages that are older than the `cusor`.

### Advantages of cursor-based pagination

- Cursor pagination is scalable. This is because the underlying query does not use the concept of offset. Instead, it simply queries all records greater than the id value of the cursor.
- Produces consistent results, as cursors do not require the data to remain static. That is to say, new items or rows can be added or removed, and each new page will still load correctly.
- No data is skipped - Rather than sending an offset parameter that behaves like an index, the cursor pagination sends a cursor parameter that behaves like a pointer to a particular record present in the database to show where the last page was left off.

### Disadvantages of cursor-based pagination

- We cannot skip to specific pages in a cursor pagination approach. This is because we do not know the cursor id that represents the start of a particular page.
- Cursors may not be very difficult to implement but offsets are generally easy to implement. Thus, if one is looking to implement pagination quickly then offset is the call. This is especially beneficial if the data is static. Thus, the complications can be avoided wherever necessary.

### Use cases for cursor-based pagination

Cursor-based pagination is ideal for cursor pagination approach is for infinite scrolling webpages such as social media feeds. Also, it is ideal for batch processing large number of records.

### Node.js implemenation

The implementation of cursor-based pagination will have a very similar structure to the implemenation of offset-based pagination above. To demonstrate this particular method of pagination I have set up another express route called `users-cursor-pagination`, which you can see below. This route returns a paginated response of users from a database. The full source code can be found in the Github [repo](https://github.com/PerrySmithMoss/common-features.git).

```javascript
app.get("/users-cursor", async (req, res) => {
  const maxLimit = 6;
  const limit = req.query.limit ? +req.query.limit : maxLimit;
  const cursor = req.query.cursor || null;

  try {
    if (limit > maxLimit) {
      res.status(422).json({
        message: `Specified limit too large. Please use limit of ${maxLimit} or lower.`,
      });
    } else if (!cursor) {
      const users = await DB.getUsersByCursor(null, limit + 1);

      const hasMore = users.length === limit + 1;

      let nextCursor = null;
      if (hasMore) {
        const nextCursorRecord = users[limit];

        nextCursor = nextCursorRecord.created_at;

        users.pop();
      }

      res.status(200).json({
        cursor: cursor,
        nextCursor,
        users,
      });
    } else if (moment(cursor, moment.ISO_8601, true).isValid()) {
      const users = await DB.getUsersByCursor(cursor, limit + 1);

      const hasMore = users.length === limit + 1;

      let nextCursor = null;
      if (hasMore) {
        const nextCursorRecord = users[limit];

        nextCursor = nextCursorRecord.created_at;

        users.pop();
      }

      res.status(200).json({
        cursor: cursor,
        nextCursor,
        users,
      });
    } else if (!moment(cursor, moment.ISO_8601, true).isValid()) {
      res.status(422).json({
        message: `Cursor is invalid. Date must be in ISO format (e.g ${new Date().toISOString()})`,
      });
    }
  } catch (err) {
    res.status(500).json({
      error: `${err}.`,
    });
  }
});
```

As you can see above, this code contains slightly more code compared to it's counter part, due to it being slightly more complex. We begin by first grabbing the `limit` and `cursor` query param passed in by the user. If there is no limit I have set a `maxLimit` of 6, meaning a max of 6 results will show in the response. Also, if there is no `cursor` parameters passed in by the user it will default to null. In this example, we will be using a date as the cursor.

Next we check if the `limit` passed in by the user is greater than the `maxLimit` of 6 that we set. This will stop the case in which the user if requesting too many records at one time. If so, we return an error message stating that the the limit it too large.

Now, if there is no cursor we will call a function called `getUsersByCursor` and pass null as the cursor and the limit + 1. The reason we add 1 to the limit is because we will use the last record as a cursor for the next fetch. You can see the details of the function in the code below.

```javascript
async function getUsersByCursor(cursor, limit) {
  try {
    const [results] = cursor
      ? await db.query(
          "SELECT * FROM Users WHERE created_at < ? ORDER BY created_at DESC LIMIT ?",
          [cursor, limit],
        )
      : await db.query("SELECT * FROM Users ORDER BY created_at DESC LIMIT ?", [limit]);

    return results;
  } catch (err) {
    throw new Error(err);
  }
}
```

As you can see above, if there is a cursor passed as an argument, we query the database for a list of users where the created_at date field is less than the cursor argument in descending order, with the limit we passed in as a second argument. In this example, when there is no cursor we simply just return a list of users with the limit we passed in.

Then, we can check if our database has more data. Since, we fetch limit + 1, we can find out if there is more data if our fetched data and limit + 1 are same.

If `hasMore` is true, we need to determine the next cursor value. We can do that by accessing the last record in the users array, using the created_at field as the cursor. Another critical thing to note here is removing the last element from the fetched data. Because we needed that value to calculate the cursor, it shouldn't be retured in the response to the user. We then return the current cursor, next cursor and the users as a json response.

In the next statement we check if the cursor passed in is a valid ISO date. This is done by using a npm package called moment and call a function called `isValid` on the cursor. This will return a boolean value which represents if the cursor is a valid ISO date. If the cursor is valid we call the same `getUsersByCursor` function we discussed above and pass in the cursor and limit + 1. We then have the same process as mentioned above.

If the cursor is not a valid ISO date we return a status 422 with an error message stating that the cursor is invalid.

---

## Conclusion

As you can see above both cursor-based and offset-based pgination have their advantages/disadvantages. However, the scalability issue which comes with offset-based pagination is a major pain point and cannot be ignored. With this in mind, the cursor approach is always recommended, as it eliminates the duplicated items and doesn’t skip any item. A pointer keeps track of where the data is and which item needs to be fetched next. There are different situations in which both cursor and offset have their advantages. The usage primarily depends upon the data being dealt with.

However, when static data is being queried, the cost of performance may not justify using a cursor since the complexity increases in such a situation. It is quite evident that cursor-based pagination is a better choice compared to offset pagination. Still, the decision to go for the right approach depends entirely upon the use case and the effect pagination will have on the product.
