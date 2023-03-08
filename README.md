# use-viewport-height

Calculates element's height required to fill the viewport.

## Usage

```ts
import { useRef } from "react";

function Example() {
    const exampleRef = useRef();
    const height = useViewportHeight(exampleRef);
  
    return (<div ref={ref} style={{ height }} />)
}
```
