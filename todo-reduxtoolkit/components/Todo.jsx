import { useSelector } from "react-redux"
import { removeTodo, updateTodo } from "../features/todo/todoSlice"
import TodoUpdate from "./TodoUpdate"

export default function Todo() {
    const todoList = useSelector(state => state.todoList);

    return (
        <>
            <ul className="space-y-2">
                {
                    todoList.map((todo) => (
                        <li key={todo.id} className="flex justify-between items-center text-xl py-2 px-4 bg-slate-900 text-white rounded-lg">
                            <TodoUpdate text={todo.text} todoId={todo.id} />
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
