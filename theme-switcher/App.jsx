import ThemeBtn from "./components/ThemeBtn"
import Card from "./components/Card"
import { ThemeProvider } from "./context/theme"
import { useEffect, useState } from "react"

function App() {
    const [themeMode, setThemeMode] = useState("dark");

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
