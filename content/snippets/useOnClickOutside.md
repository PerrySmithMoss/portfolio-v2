---
id: "2"
title: "React.js useOnClickOutside Hook"
excerpt: "React hook which listens for clicks outside of a specified element."
thumbnail: "/assets/images/home/snippets/debounce.png"
slug: "useOnClickOutside"
tags: ["TypeScript", "React.js"]
tech: ["react", "typescript"]
---

## React.js useOnClickOutside Hook

```jsx
import { useEffect } from 'react';

type Handler = (event: MouseEvent | TouchEvent) => void;

export const useOnClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: Handler
) => {
  useEffect(
    () => {
      const listener = (event: TouchEvent | MouseEvent) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target as Node)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because the passed-in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
};
```

## Usage

```jsx
import React, { useRef, useState } from "react";

const Example: React.FC<ExampleProps> = ({}) => {
  const [isDropownOpen, setIsDropownOpen] = useState(false);
  const dropDownElementRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropDownElementRef, () => setIsPopoverOpen(false)); 

  return (
    <div ref={dropDownElementRef}>
       {/* Dropdown component ... */}
    </div>
  )
};
```
