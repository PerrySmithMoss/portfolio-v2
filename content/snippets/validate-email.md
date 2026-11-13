---
id: "4"
title: "Check an email address with JavaScript"
excerpt: "Check the format of an email address with a regular expression."
thumbnail: "/assets/images/home/snippets/debounce.png"
slug: "validate-email"
tags: ["TypeScript", "JavaScript"]
tech: ["javascript", "typescript"]
---

## Check an email address with JavaScript

```typescript
export function isEmailValid(email: string) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email);
}
```

## Usage

```typescript
if (isEmailValid(email)) {
  // Email is valid
  // Do stuff..
} else {
  // Email is invalid
  // Do stuff..
}
```
