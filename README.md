# React Component Lifecycle Methods and Hooks
Purpose of this repo is to experiment and learn about React Component Lifecycles and React Hooks.

## React Component Lifecycle Methods
- componentWillMount
- componentDidMount
- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate
- componentDidUpdate
- componentWillUnmount

## React Hooks
#### useState
- useState uses array destructuring []
- useState vs setState = function vs class = replaces variable vs merge variable
```javascript
import React, { useState } from "react";
...
const [state, setState] = useState("");
```
> useState - pass in initial value

- using setState
`<p>You clicked {this.state.count} times</p>`.
- using useState
`<p>You clicked {count} times</p>`

- updating setState
`<button onClick={() => this.setState({ count: this.state.count + 1 })}> Click me </button>`
- updating useState
`<button onClick={() => setCount(count + 1)}> Click me </button>`

#### useEffect
- tells React that your component needs to do something after render, renders every update too
- used inside components to access state

#### useContext


#### Additional Hooks
- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue
