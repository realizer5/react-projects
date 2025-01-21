import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todoList: [{
        id: 1,
        todo: "nise",
        completed: false,
    }],
    addTodo: (todo) => { },
    updateTodo: (todo, id) => { },
    deleteTodo: (id) => { },
    completeTodo: (id) => { }
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;
