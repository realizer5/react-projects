import { useEffect, useState, useCallback, useRef } from "react"

function App() {
    const [password, setPassword] = useState("Password")
    const [length, setLength] = useState(8)
    const [nums, setNums] = useState(true)
    const [chars, setChars] = useState(true)
    const [caps, setCaps] = useState(true)

    const passwordRef = useRef("Password")

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "";
        str += "abcdefghijklmnopqrstuvwxyz";
        if (nums) str += "0123456789";
        if (caps) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if (chars) str += "!@#$%^&*()_-+=[]{}|;:,.<>?/";
        for (let i = 1; i <= length; i++) {
            let char = str[Math.floor(Math.random() * str.length)]
            pass += char
        }
        setPassword(pass)
    }, [length, nums, chars, caps, setPassword]) // setPassword is given for optimization
    // if you provide password instead of setPassword it will run in infinite loop
    useEffect(() => {
        passwordGenerator();
    }, [length, nums, chars, caps, passwordGenerator])
    const copy = useCallback(() => {
        passwordRef.current?.select() // ? to select only if current value exists optional select
        passwordRef.current?.setSelectionRange(0, 20)
        window.navigator.clipboard.writeText(password)
    }, [password])

    return (
        <div className="bg-gray-800 p-6 rounded-md text-white">
            <h1 className='text-center text-4xl'>Password Generator</h1>
            <div className="flex items-center justify-between mt-5 bg-gray-900 text-white p-4 rounded-md">
                <input type="text" value={password} readOnly ref={passwordRef} className="bg-gray-900 focus:outline-none" />
                <button onClick={copy} className="active:bg-gray-800 p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                </button>
            </div>
            <div className="mt-5 grid gap-4">
                <div className="flex items-center gap-4">
                    <input className="cursor-pointer" type="range" id="inputRange" min={6} max={20} value={length} onChange={(e) => { setLength(e.target.value) }} />
                    <label htmlFor="inputRange">Length: {length}</label>
                </div>
                <div className="flex items-center gap-4">
                    <input type="checkbox" defaultChecked={caps} id="inputCaps" onChange={() => { setCaps(!caps) }} />
                    <label htmlFor="inputCaps">Capital Letters</label>
                    <input type="checkbox" defaultChecked={nums} id="inputNumbers" onChange={() => { setNums(!nums) }} />
                    <label htmlFor="inputNumbers">Numbers</label>
                    <input type="checkbox" defaultChecked={chars} id="inputChars" onChange={() => { setChars(!chars) }} />
                    <label htmlFor="inputChars">Characters</label>
                </div>
            </div>
        </div>
    )
}

export default App
