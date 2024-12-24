## Props
In React, props (short for properties) are a mechanism for passing data from a parent component to a child component. They are similar to function arguments, allowing you to provide external information to a component, which it can then use to render its UI or perform actions.
*Porps are immutable (they cannot be changed)*

```javascript
<ChildComponent propName="value" />

function ChildComponent(props) {
  return <h1>{props.message}</h1>;
}

// you can destructure it for easy use

function ChildComponent({propName}){
    return <h1>{propName}</h1>
}
```
