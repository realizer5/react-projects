import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

export default function AddTodo() {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input !== "") {
            dispatch(addTodo(input));
            setInput("");
            setError("");
        } else {
            setError("Type Something to Add");
        }
    }

    return (
        <div>
            <form onSubmit={addTodoHandler} className='space-x-4 flex pt-4'>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type Your Task..'
                    className='w-full bg-gray-100 rounded-md border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-900 text-base outline-none text-gray-900 py-2 px-4 leading-8 duration-200 ease-in-out' />
                <button type="submit" className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-md text-lg shrink-0'>Add Task</button>
            </form>
            <p className='text-red-700 text-sm text-center mt-2'>{error}</p>
        </div>
    )
}

