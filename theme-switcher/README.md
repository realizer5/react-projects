# Theme Switcher with Context API
Theme switching card made with tailwind and React [Context API](https://github.com/realizer5/react-projects/tree/main/miniContext)

## Function Placeholders
 If you make an empty function (often just a placeholder) and use it later in the context, you're essentially defining a function that may be updated later when the context provider's value changes. This can be useful for setting up handlers or actions that may be defined after the component tree is set up.

### Example
make a context with an empty funtion:

```js
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "dark",
    themeToggle: () => { } // created a empty function to use later
});

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}
```
update it's value when using:

```jsx
import ThemeBtn from "./components/ThemeBtn"
import Card from "./components/Card"
import { ThemeProvider } from "./context/theme"
import { useEffect, useState } from "react"

function App() {
    const [themeMode, setThemeMode] = useState("dark");

    //updating function when mounted
    const themeToggle = (theme) => {
        if (theme === "dark") {
            setThemeMode("light");
        } else {
            setThemeMode("dark")
        }
    }

    useEffect(() => {
        const html = document.getElementsByTagName('html')[0];
        html.classList.remove("dark", "light");
        html.classList.add(themeMode);
    }, [themeMode])

    return (
        <>
            <ThemeProvider value={{ themeMode, themeToggle }} >
                <div className="flex flex-wrap min-h-screen items-center">
                    <div className="w-full">
                        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                            <ThemeBtn />
                        </div>

                        <div className="w-full max-w-sm mx-auto">
                            <Card />
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </>
    )
}

export default App

```
