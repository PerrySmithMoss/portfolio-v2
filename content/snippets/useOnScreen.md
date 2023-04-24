---
id: "8"
title: "React.js useOnScreen Hook"
excerpt: "React hook which reports if an element is in screen view."
thumbnail: "/assets/images/home/snippets/debounce.png"
slug: "useOnScreen"
tags: ["JavaScript", "React.js"]
tech: ["javascript", "react"]
---

## React.js useOnScreen Hook

```jsx
import { useEffect, useState } from "react";

export function useOnScreen<T extends Element>(
  ref: React.MutableRefObject<T>,
  rootMargin: string = "0px"
): boolean {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref?.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}
```

## Usage

```jsx
import { useIsInViewport } from "./hooks/useIsInViewport";

export default function App() {
  const targetRef: any = useRef<HTMLDivElement | null>();
  const isFeaturedProjectsSectionOnScreen: boolean = useOnScreen<HTMLDivElement>(targetRef, "0px");
  return (
    <>
      <div ref={targetRef} />
        {isFeaturedProjectsSectionOnScreen ? (
            <h1>Content is in view!</h1>
        ) : (
            <h1>Content is not in view!</h1>
        )}
      </div>
    </>
  );
}
```
