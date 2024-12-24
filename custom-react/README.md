## Custom React Element
you can create a custom react element like this

In React.createElement are no keys and HTML elements are defined by order they are provided
like first is tag second is a attribute object and third is children

```jsx
import React from 'react'
import { createRoot } from 'react-dom/client'

const anotherElement = (<a href='https://github.com/realizer5' target='_blank'> Click Me </a>)
const reactElement = React.createElement(
    'a',
    { href: 'https://realizer5.github.io', target: '_blank' },
    'Click me too'
)

createRoot(document.getElementById('root')).render(
    <>
        {anotherElement}
        <br/>
        {reactElement}
    </>
)
```
