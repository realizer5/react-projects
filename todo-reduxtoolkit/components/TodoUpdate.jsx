import { useState } from 'react'
import { removeTodo, updateTodo } from "../features/todo/todoSlice"
import { useDispatch } from 'react-redux';

export default function TodoUpdate({ text, todoId }) {
    const [editable, setEditable] = useState(false);
    const [todoText, setTodoText] = useState(text);
    const dispatch = useDispatch();

    return (
        <>
            <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} readOnly={!editable}
                className='bg-transparent text-white text-xl outline-none border-none w-full' />
            <div className='space-x-2 flex'>
                <button type="button" onClick={() => {
                    if (editable) {
                        dispatch(updateTodo({ todoId: todoId, todoText: todoText }))
                        setEditable(false);
                    } else {
                        setEditable(true);
                    }
                }
                }
                    className="px-4 py-2 bg-green-500 rounded-lg">
                    {editable ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-save"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" /><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" /><path d="M7 3v4a1 1 0 0 0 1 1h7" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /><path d="m15 5 4 4" /></svg>}
                </button>
                <button type="button" onClick={() => dispatch(removeTodo(todoId))} className="px-4 py-2 bg-red-500 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
                </button>

            </div>
        </>
    )
}

