function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerText = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue; // to prevent accidently passing children in props
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement);
}

const mainContainer = document.getElementById('root');

const reactElement = {
    type: 'a',
    props: {
        href: 'https://github.com/realizer5',
        target: '_blank'
    },
    children: 'Click me'
}

customRender(reactElement, mainContainer);
