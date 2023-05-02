---
id: "1"
title: "React.js useDebounce Hook"
excerpt: "A useful React hook for debouncing a string."
thumbnail: "/assets/images/home/snippets/debounce.png"
slug: "useDebounce"
tags: ["TypeScript", "React.js"]
tech: ["react", "typescript"]
---

## React.js useDebounce Hook

```jsx
import { useState, useEffect } from "react";

export default function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<string>("");

  useEffect(() => {
    if (value.length === 0) {
      setDebouncedValue(value);
      return;
    }

    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

## Usage

```jsx
import useDebounce from "hooks/useDebounce";

const [searchInput, setSearchInput] = useState<string>("");
const debouncedSearchTerm = useDebounce(searchInput, 1500);
```
