import { useId } from 'react'

export default function InputBox({ label, currencyOptions = [], selectCurrency = 'usd', amountChange,
    amount, currencyChange, amountDisabled = false }) {
    const InputId = useId() //this is here just to show use useId it can be done without it too

    return (
        <>
            <div className='space-x-4 text-left space-y-2 bg-slate-800 p-2 rounded'>
                <label htmlFor={InputId} className='text-gray-400 block'>{label}</label>
                <input id={InputId} type='number' min={0} step="0.01" className="px-4 py-2 text-base
                    text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => amountChange && amountChange(Number(e.target.value))} value={amount} /* && ensure it is only fired when there is amountChange passed*/
                    disabled={amountDisabled} />
                <select value={selectCurrency} onChange={(e) => currencyChange && currencyChange(e.target.value)}
                    className='px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md
                    shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'>
                    {currencyOptions.map((currency) =>
                        <option key={currency} value={currency}>{currency}</option>
                    )}
                </select>
            </div>
        </>
    )
}

