# `useState` Hook - React Documentation

To create a counter in React, you will need the `useState` hook. The `useState` hook is used to manage the state of a functional component. It returns an array with two values:
- A **variable** holding the state value.
- A **method** to update that value.#Example:
---
## Example

Here's how to use the `useState` hook to create a simple counter:

```javascript

function Counter() {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Update the count value by 1 each time the button is clicked
  setCount(count + 1);
  console.log(count); // This will log the old state due to batching.

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

```
you can set initial value in () like this -- `useState(0 or true, false etc)`
every time you update this value it will be changed across page where it is used

##Tip
useState send updates in batches and that is why even if you change value of count more than once it will be reflected only once

#Batching State Updates

One important thing to understand about the useState hook is that React batches state updates for performance optimization. This means that if you call the state setter function multiple times in a row, the component will only re-render once, and the updates will be processed together.

```javascript
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
// The output will be 1, because React batches these updates together.

setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
// The output will be 3, because each update is based on the previous state value.

```
It is not optimized approach but you can change it by using callback in setCount method like shown above

##Why Batching Happens
React batches state updates to optimize performance and minimize re-renders. This is why if you call `setCount(count + 1)` multiple times in a row, it doesn’t immediately reflect the updated state values.

To avoid issues when updates depend on the previous state, always use the callback form in the `setState` function `(setCount((prev) => prev + 1))`.
