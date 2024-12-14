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
