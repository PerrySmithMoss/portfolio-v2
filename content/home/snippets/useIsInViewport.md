---
id: "5"
title: "React.js useIsInViewport Hook"
excerpt: "React hook which reports if an element is in viewport."
thumbnail: "/assets/images/home/snippets/debounce.png"
slug: "useIsInViewport"
tags: ["TypeScript", "JavaScript", 'React.js']
tech: ["javascript", "typescript", "react"]
---

## Code

```typescript
export function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      // disconnect() will stop observing all elements.
      // unobserve(entry.target) will stop observing the element passed in 
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
```

## Usage

```typescript
import { useEffect, useRef, useState, useMemo } from "react";
import { useIsInViewport } from "./hooks/useIsInViewport";

export default function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInViewport1 = useIsInViewport(ref1);

  const isInViewport2 = useIsInViewport(ref2);

  return (
    <div>
      <div ref={ref1}>Top div {isInViewport1 && "| in viewport ✅"}</div>

      <div style={{ height: "155rem" }} />

      <div ref={ref2}>Bottom div {isInViewport2 && "| in viewport ✅"}</div>
    </div>
  );
}
```
