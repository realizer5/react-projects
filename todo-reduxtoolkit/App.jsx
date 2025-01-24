import { useEffect } from "react"
import { AddTodo, Todo } from "./components"
import { useDispatch, useSelector } from "react-redux"
import { addAllTodo } from "./features/todo/todoSlice";

function App() {
    const todoList = useSelector(state => state.todoList)
    const dispatch = useDispatch();

    useEffect(() => {
        const todoList = JSON.parse(localStorage.getItem("todoList"));
        if (todoList && todoList.length > 0) {
            dispatch(addAllTodo(todoList));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList])

    return (
        <div className="w-full min-h-screen bg-gray-400 px-10">
            <AddTodo />
            <div className="p-4 mt-4">
                <h1 className="text-2xl font-bold text-center mb-4">Tasks TODO</h1>
                <Todo />
            </div>
        </div>
    )
}

export default App
