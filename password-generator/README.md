# Password Generator
# useCallback
[useCallback](https://react.dev/reference/react/useCallback) is a React Hook that lets you cache a function definition between re-renders.
it is used for optimization of functions
```javascript
const cachedFn = useCallback(fn, dependencies)
```

## useEffect
[useEffect](https://react.dev/reference/react/useEffect) is a React Hook that lets you synchronize a component with an external system.
it can be used to update states based on dependencies
if dependencies is updated it will execute itself
```javascript
useEffect(setup, dependencies?)
```

## useRef
[useRef](https://react.dev/reference/react/useRef) is a React Hook that lets you reference a value that’s not needed for rendering.
it is used to create a reference
```javascript
const ref = useRef(initialValue)
```
