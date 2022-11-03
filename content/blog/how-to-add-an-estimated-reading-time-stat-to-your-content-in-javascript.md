---
id: "7"
title: "How to add an estimated reading time stat to your content in JavaScript"
datePublished: "2nd Nov, 2022"
slug: "how-to-add-an-estimated-reading-time-stat-to-your-content-in-javascript"
image: "/assets/images/home/blog/code.jpg"
description: "Find out how you can calculate the estimated reading time of a piece of content in JavaScript."
featuredPost: false
tech: ["JavaScript", "TypeScript"]
tags: ["Featured Post"]
---

## Introduction

Have you seen those blog posts which state how long it will take you to read the post? That's a neat feature, right? That's exactly what I thought when I first saw it. Lucky for you, I am going to explain how you can also add this exact feature to your blog posts. All it's going to take is a little sprinkle of JavaScript.

---

## Method

Given that the average adult reads 200-250 words per minute, we will will use the middle figure of 225 as our baseline words per minute figure. We can then simply divide the total number of words by our 225 figure to get the estimated reading time. We will then round that number up to make things simpler for the reader.

---

## Code

Firstly, we're going to need a function which counts the total amount of words within a string. This function will take a string as a parameter and loop over each word in the string, incrementing a wordCount variable for each word it . Eventually returning the value of the wordCount variable at the end of the loop.

As you can see by the implemenation below, I first convert the string into an array of strings by leveraging RegEx inside the JavaScript .split() method. This will split the string every time there is a whitespace character (tabs, spaces, line, breaks etc.). We can then loop over this array of words, incrementing a wordCount variable for each valid word. As you can see by the code below I have created a seperate function called isWord in order to validate if a word is actually a word and not a symbol, number, special character or empty string etc.

```javascript
function wordCounter(string) {
  const text = input.split(/\s+/);
  let wordCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " " && isWord(text[i])) {
      wordCount++;
    }
  }
  return wordCount;
}
```

```javascript
function isWord(str) {
  let alphaNumericFound = false;
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (
      (code > 47 && code < 58) || // numeric (0-9)
      (code > 64 && code < 91) || // upper alpha (A-Z)
      (code > 96 && code < 123)
    ) {
      alphaNumericFound = true;
      return alphaNumericFound;
    }
  }
  return alphaNumericFound;
}
```
<br />
We can then bring this all together by creating one last function which calculates the reading time. As you can see by the implementation below, the function takes text as a parameter, passes that text to our wordCounter function we created above and then divides that by our pre defined wordsPerMinute variable. We then round that number up using Math.ceil to make things simpler for the reader. Voilà! 

```javascript
const wordsPerMinute = 225;

export function readingTime(text) {
  return Math.ceil(wordCounter(text) / wordsPerMinute);
}
```
