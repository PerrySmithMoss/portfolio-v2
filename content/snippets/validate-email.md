---
id: "4"
title: "Validate an email address with JavaScript RegEx."
excerpt: "A useful function to determine whether a string is a valid email address or not."
thumbnail: "/assets/images/home/snippets/debounce.png"
slug: "validate-email"
tags: ["TypeScript", "JavaScript"]
tech: ["javascript", "typescript"]
---

## Code

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
