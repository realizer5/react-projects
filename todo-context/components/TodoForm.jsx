import { useState } from 'react'
import { useTodo } from '../context';

export default function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();
        if (!todo) return;
        addTodo({ todo, completed: false });
        setTodo("");
    }

    return (
        <form onSubmit={add} className='flex gap-4 p-4'>
            <input type="text" placeholder='Write Your Task here' value={todo} onChange={(e) => setTodo(e.target.value)}
                className='w-full border border-black/10 rounded-md outline-none duration-200 bg-white py-2 px-4 focus:outline-slate-600'
            />
            <button type="submit" className='rounded-md py-2 px-4 bg-gray-600 text-white shrink-0 hover:bg-gray-700 duration-200 active:bg-gray-800'>Add Task</button>
        </form>
    )
}

