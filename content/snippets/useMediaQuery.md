---
id: "7"
title: "React.js useMediaQuery Hook"
excerpt: "Custom React.js hook that watches for certain breakpoints."
thumbnail: "/assets/images/home/snippets/debounce.png"
slug: "useMediaQuery"
tags: ["TypeScript", "React.js"]
tech: ["react", "typescript"]
---

## React.js useMediaQuery Hook

```jsx
import { useState } from "react";

export const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback((e) => {
    if (e.matches) setTargetReached(true)
    else setTargetReached(false)
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    media.addEventListener('change', updateTarget)

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) setTargetReached(true)

    return () => media.removeEventListener('change', updateTarget)
  }, [])

  return targetReached useMediaQuery
}

export default
```

## Usage

```jsx
import useMediaQuery from "./hooks/useMediaQuery";

export default function App() {
  const isDetected = useMediaQuery(600);

  return (
    <div>
      {isDetected ? (
        <div>
          <p style={{ color: "green" }}>Screen size is 600 or less</p>
        </div>
      ) : (
        <div>
          <p style={{ color: "red" }}>Screen size is 600 or more</p>
        </div>
      )}
    </div>
  );
}
```
