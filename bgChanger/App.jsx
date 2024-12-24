import { useState } from "react"

//this is created using tailwind css

function App() {
    const [color, setColor] = useState("crimson");
    const colors = ["red", "green", "blue", "yellow", "black", "brown", "chocolate", "turquoise", "crimson"]
    return (
        <>
            <div className="w-full h-screen duration-500"
                style={{ backgroundColor: color }}>
            </div >
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                    {colors.map((color, index) => (
                        <button key={index} type="button" className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: color }}
                            onClick={() => setColor(color)}
                        >{color.charAt(0).toUpperCase() + color.slice(1)}</button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default App
