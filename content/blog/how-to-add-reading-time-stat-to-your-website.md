---
id: "3"
title: "Estimate reading time with JavaScript"
datePublished: "2 November 2022"
datePublishedISO: "2022-11-02"
slug: "how-to-add-reading-time-stat-to-your-website"
image: "/assets/images/blog/estimated-reading-time.jpg"
description: "Count the words in a piece of text and use them to estimate its reading time."
featuredPost: false
tech: ["JavaScript"]
tags: ["Featured Post"]
---

## Introduction

An estimated reading time gives readers an idea of how long a post will take. Here’s a small JavaScript function that calculates it from the word count.

---

## Method

This example uses 225 words per minute as a baseline. Divide the word count by that number, then round up to get an estimated reading time in minutes.

---

## Code

Start with a function that counts the words in a string. It loops through the words, increments a counter for each one and returns the total.

As you can see by the implementation below, I first convert the string into an array of strings by leveraging RegEx inside the JavaScript .split() method. This will split the string every time there is a whitespace character (tabs, spaces, line, breaks etc.). We can then loop over this array of words, incrementing a wordCount variable for each valid word. As you can see by the code below I have created a separate function called isWord in order to validate if a word is actually a word and not a symbol, number, special character or empty string etc.

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
We can then bring this all together by creating one last function which calculates the reading time. As you can see by the implementation below, the function takes text as a parameter, passes that text to our wordCounter function we created above and then divides that by our predefined wordsPerMinute variable. We then round that number up using Math.ceil to make things simpler for the reader. Voilà!

```javascript
const wordsPerMinute = 225;

export function readingTime(text) {
  return Math.ceil(wordCounter(text) / wordsPerMinute);
}
```
