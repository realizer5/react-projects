# To Do with Redux-Toolkit
A todo made with react and redux

## Redux-Toolkit
[Redux-Toolkit](https://redux-toolkit.js.org/) is official, opinionated, batteries-included toolset for efficient Redux development\
To use Redux with React two packages are required:
` @reduxjs/toolkit react-redux `

Redux Toolkit is a set of tools that helps manage state in a React application with Redux. It provides functions to simplify the creation of reducers, actions, and stores, aiming to reduce the amount of boilerplate code in your Redux setup.

### createSlice
`createSlice` is a function that helps you write Redux reducers and actions in a more concise and easier-to-manage way.

```js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

```

### configureStore
configureStore is a function that simplifies the creation of a Redux store with good default settings.

```js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```
### useDispatch
`useDispatch` is a hook that gives you access to the Redux `dispatch` function within your functional React components. The `dispatch` function is used to send actions to the Redux store, which in turn updates the state based on the action type and payload.

```jsx
import { useDispatch } from 'react-redux'; // import hook
import { someAction } from '../someAction'; // import reducer

const dispatch = useDispatch(); //call dispatch to use

dispatch(someAction()); // use of dispatch

```
**you can only make changes with reducers in state**

### useSelector
`useSelector` is a hook that allows your component to read data from the Redux store. You provide a function (called a "selector") that specifies which part of the state you want to access, and `useSelector` will subscribe to the store and return the selected state. When the state updates, your component will automatically re-render if the selected state changes.

```jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
  // Use useSelector to get the current value of 'count' from the Redux state
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
```

### Provider
The `Provider` component is part of the `react-redux` library, and it is responsible for making the Redux store available to all components in a React application. It is typically placed at the root level of the application, ensuring that the entire app (or parts of it) can access the Redux store via hooks like `useSelector` and `useDispatch`.

By wrapping your app with the `Provider`, you can ensure that any child components can subscribe to the store and receive updates when state changes.

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux"
import { store } from "./app/store.js"

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store} > //store you made by configureStore
            <App />
        </Provider>
    </StrictMode>,
)
```

### Reducers
A **reducer** is a function that defines how the state of the application should change based on the action received. In Redux, the reducer is the mechanism that handles the updates to the store, ensuring that the state transition is predictable.

#### How Do Reducers work
Reducers work based on the principle of immutability. They take the current state and the action, and they return a new state, rather than modifying the existing state directly.

 * **Initial State**: If the state is undefined (which can happen on the first run), the reducer should return the initial state.
* **Action**: The action dispatched will typically have a `type` property that specifies which update needs to happen, and a `payload` that contains additional data for the update.
 * **Return New State**: The reducer returns a new state object after applying the changes specified by the action.

 ```js
const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
```
