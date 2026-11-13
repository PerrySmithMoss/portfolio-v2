---
id: "7"
title: "React useMediaQuery hook"
excerpt: "Respond to viewport breakpoints in React."
thumbnail: "/assets/images/home/snippets/debounce.png"
slug: "useMediaQuery"
tags: ["TypeScript", "JavaScript", "React.js"]
tech: ["javascript", "typescript", "reactjs"]
---

## React useMediaQuery hook

```typescript
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

```javascript
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
