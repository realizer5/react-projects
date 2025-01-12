## userContext
`useContext` is a React Hook that lets you read and subscribe to context from your component.

for example you can create a component somewhere else with states and get those states values in some other component

```jsx
const value = useContext(SomeContext)
```

# createContext
`createContext` lets you create a context that components can provide or read.

```jsx
const SomeContext = createContext(defaultValue)
```

# SomeContext.Provider

Wrap your components into a context provider to specify the value of this context for all components inside:

```jsx
function App() {
  const [theme, setTheme] = useState('light');
  // ...
  return (
    <ThemeContext.Provider value={theme}>
      <Page />
    </ThemeContext.Provider>
  );
}
```
