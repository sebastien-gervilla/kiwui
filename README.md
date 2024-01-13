# Kiwui &middot; JavaScript UI Library

🥝 A JavaScript UI library, inspired by React.

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

It features :

- React API - Hooks, Fragments, memo...
- Concurrent Mode
- Fast keyed reconciliation algorithm

## Installation

To create a kiwui project, you may want to use CKP.

```bash
npx create-kiwui-project <project-directory> [options]
```

## Example

```jsx
import { useState } from 'kiwui';

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
}

export default App;
```

Having the same API as React, it works exactly the same.

## Purpose

We initially intended on diving deeper into React, to better understand it.
That's how we got the idea to re-create it in our own way, and doing so, see if we could improve some areas of the library.

Eventhough i used it for some of my own projects, and it worked really well, it probably isn't as reliable as React nor does it have its eco-system (They are not compatible).

## License

[ISC](./LICENSE)