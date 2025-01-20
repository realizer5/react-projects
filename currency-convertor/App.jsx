import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
    const [amount, setAmount] = useState(0)
    const [convertedAmount, setConvertedAmount] = useState(0)
    const [from, setFrom] = useState('usd')
    const [to, setTo] = useState('inr')
    const currencyInfo = useCurrencyInfo(from)
    const options = Object.keys(currencyInfo)

    const convert = () => {
        let result = amount * currencyInfo[to]
        result = Number(result.toFixed(2))
        setConvertedAmount(result);
    }

    const swap = () => {
        setFrom(to)
        setTo(from)
    }

    return (
        <>
            <div className='min-w-screem min-h-screen grid place-items-center bg-slate-800' >
                <div className='bg-slate-900 text-white p-4 text-center space-y-4 rounded shadow-md'>
                    <h1 className='font-semibold text-xl'>Currency Convertor</h1>
                    <form onSubmit={(e) => { e.preventDefault(); convert() }}
                        className='space-y-2'>
                        <InputBox currencyOptions={options} selectCurrency={from} label="From" amount={amount}
                            amountChange={(amount) => setAmount(amount)} currencyChange={(currency) => setFrom(currency)} />
                        <button type="" className='px-6 py-2 text-sm font-medium text-white bg-blue-700
                            border border-transparent rounded-md shadow-sm hover:bg-blue-800 active:bg-blue-900'
                            onClick={swap}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" className="lucide lucide-arrow-down-up">
                                <path d="m3 16 4 4 4-4" /><path d="M7 20V4" /><path d="m21 8-4-4-4 4" />
                                <path d="M17 4v16" />
                            </svg>
                        </button>
                        <InputBox currencyOptions={options} selectCurrency={to} label="To" amount={convertedAmount}
                            currencyChange={(currency) => setTo(currency)} amountDisabled />
                        <button type="submit" className="font-semibold px-6 py-2 text-sm text-white
                            bg-blue-700 border border-transparent rounded-md shadow-sm hover:bg-blue-800
                            focus:outline-none active:bg-blue-900">Convert {from.toUpperCase()} to {to.toUpperCase()} </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default App
