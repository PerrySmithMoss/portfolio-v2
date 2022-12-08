---
id: "6"
title: "React.js usePagination Hook"
excerpt: "Custom React.js hook used for client-side pagination."
thumbnail: "/assets/images/home/snippets/debounce.png"
slug: "usePagination"
tags: ["TypeScript", "React.js"]
tech: ["typescript", "react"]
---

## React.js usePagination Hook

```jsx
import { useState } from "react";

const usePagination = (itemsPerPage: number, totalItems: number) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [startPageIndex, setStartPageIndex] = useState(0);
  const [endPageIndex, setEndPageIndex] = useState(itemsPerPage - 1);
  const [currentPage, setCurrentPage] = useState(1);
  const dispPage = (pageNo: number) => {
    setCurrentPage(pageNo);

    let start_page_index = itemsPerPage * pageNo - itemsPerPage;
    let end_page_index = itemsPerPage * pageNo - 1;

    setStartPageIndex(start_page_index);

    if (end_page_index > totalItems) {
      setEndPageIndex(totalItems - 1);
    } else {
      setEndPageIndex(end_page_index);
    }
  };

  return [
    totalPages,
    startPageIndex,
    setStartPageIndex,
    endPageIndex,
    setEndPageIndex,
    currentPage,
    dispPage,
    setCurrentPage,
  ] as const;
};

export default usePagination;
```

## Usage

```jsx
import { useEffect, useRef, useState, useMemo } from "react";
import usePagination from "./hooks/usePagination";

const PAGINATION_ITEMS_PER_PAGE = 12;

export default function App() {
  const [
    totalPages,
    startPageIndex,
    setStartPageIndex,
    endPageIndex,
    setEndPageIndex,
    currentPage,
    setCurrentPage,
    dispPage,
  ] = usePagination(PAGINATION_ITEMS_PER_PAGE, items.length);

  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pages = [];
  for (let i = 1; i <= Math.ceil(productsLength / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + 5);
      setMinPageNumberLimit(minPageNumberLimit + 5);
    }
    window.scrollTo({
      behavior: "smooth",
      top: scrollToRef.current.offsetTop,
    });
  };

  const handleDotButton = (pageNum: number) => {
    setCurrentPage(pageNum);

    if (pageNum + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + 5);
      setMinPageNumberLimit(minPageNumberLimit + 5);
    }
    window.scrollTo({
      behavior: "smooth",
      top: scrollToRef.current.offsetTop,
    });
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % 5 == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - 5);
      setMinPageNumberLimit(minPageNumberLimit - 5);
    }
    window.scrollTo({
      behavior: "smooth",
      top: scrollToRef.current.offsetTop,
    });
  };

  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-center text-center text-white">
        <button
          onClick={handlePrevbtn}
          disabled={currentPage == pages[0] ? true : false}
          className={
            currentPage == pages[0]
              ? "h-10 w-10 rounded-full bg-gray cursor-not-allowed flex justify-center items-center"
              : "h-10 w-10 rounded-full bg-green text-white  flex justify-center items-center"
          }
        >
          Prev page
        </button>
      </div>
      <ul className="flex justify-center mx-5 mt-2 xxxs:mx-10">
        {pages.map((number: number) => {
          // if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit)
          // Only really need to render nothing if there isnt any data, the map will render the correct amount
          // of dots and the pagination button being disabled will stop going to a page that doesnt exist.
          if (number < maxPageNumberLimit + 1) {
            return (
              <li
                key={number}
                id={number.toString()}
                className="self-center mx-2"
                onClick={() => handleDotButton(number)}
              >
                <button
                  className={
                    currentPage == number
                      ? "h-5 w-5 rounded-full border-green-500 opacity-50 bg-green-700 text-white"
                      : "h-5 w-5 rounded-full border-green-500 bg-white text-white"
                  }
                ></button>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
      <div className="flex items-center justify-center text-center text-white">
        <button
          onClick={handleNextbtn}
          disabled={currentPage == pages[pages.length - 1] ? true : false}
          className={
            currentPage == pages[pages.length - 1]
              ? "h-10 w-10 rounded-full bg-gray cursor-not-allowed flex justify-center items-center"
              : "h-10 w-10 rounded-full bg-gray cursor-not-allowed flex justify-center items-center"
          }
        >
          Next page
        </button>
      </div>
    </div>
  );
}
```
