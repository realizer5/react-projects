import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { todoList: [] };

export const todoSlice = createSlice({
    name: "todo", initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = { id: nanoid(), text: action.payload };
            state.todoList.push(todo);
        },
        removeTodo: (state, action) => {
            state.todoList = state.todoList.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { todoId, todoText } = action.payload;
            const findTodoIndex = (todo) => todo.id === todoId
            const todoIndex = state.todoList.findIndex(findTodoIndex);
            state.todoList[todoIndex].text = todoText;
        },
        addAllTodo: (state, action) => {
            state.todoList = action.payload;
        }
    }
})

export const { addTodo, removeTodo, updateTodo, addAllTodo } = todoSlice.actions;

export default todoSlice.reducer;
