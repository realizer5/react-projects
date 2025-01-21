import { useEffect, useState } from "react";
import { TodoProvider } from "./context"
import { TodoForm, TodoItem } from "./components";

function App() {
    const [todoList, setTodoList] = useState([])

    const addTodo = (todo) => {
        setTodoList((prev) => [{ id: Date.now(), ...todo }, ...prev])
    };
    const updateTodo = (todo, id) => {
        setTodoList((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
    };
    const deleteTodo = (id) => {
        setTodoList((prev) => prev.filter((prevTodo) =>
            prevTodo.id !== id
        ))
    };
    const completeTodo = (id) => {
        setTodoList((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
    };

    useEffect(() => {
        const todoList = JSON.parse(localStorage.getItem("todoList"));
        if (todoList && todoList.length > 0) {
            setTodoList(todoList)
        }
    }, []) //add an empty dependency array [] to ensure it only runs once when the component mounts.
    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList])


    return (
        <TodoProvider value={{ todoList, addTodo, updateTodo, deleteTodo, completeTodo }}>
            <div className="bg-gray-900 min-h-screen min-w-screen">
            <TodoForm />
            <div className="p-4 space-y-2 bg-gray-700 rounded-md m-4">
                <h1 className="text-center text-2xl font-bold mb-4 text-white">Tasks</h1>
                {todoList.map((todo) => (
                    <div key={todo.id} className="w-full">
                        <TodoItem todo={todo} />
                    </div>
                ))}
            </div>
            </div>
        </TodoProvider>
    )
}

export default App
