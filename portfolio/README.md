# React route dom

React Router is a multi-strategy router for React bridging the gap from React 18 to React 19. You can use it maximally as a React framework or minimally as a library with your own architecture.

```bash
npm i react-router-dom
```
`react-router-dom` is for web

## NavLink and Link
`NavLink` and `Link` can be imported from `react-router-dom`
they work like html anchor tag `<a>` with some extra features
`NavLink` gives a callback isActive that can be used in navbars
```jsx
 <NavLink to="/" className={({ isActive }) => `${isActive ? "text-orange-700"
    : "text-gray-700"}`} >Home</NavLink>

```
## useLoaderData hook
this hook can be used to fetch data when hovering on element
it is usefull to fetch data before user clicks and it increases speed

```jsx
// component side code
import { useLoaderData } from 'react-router-dom';

function MyComponent() {
  const data = useLoaderData();

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}
// route code
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyComponent />,
    loader: async () => {
      return fetchData();  // Data fetching logic
    },
  },
]);

```

## Outlet
React Router supports nested routing. In order for child routes to render inside of parent layouts, we need to render an Outlet in the parent. Let's fix it, open up app/root.tsx and render an outlet inside.

Other used Methods in this project
 * createBrowserRouter
 * createRoutesFromELements
 * Route
 * RouterProvider
