import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            // state.todos = [...state.todos, action.payload];// the below code isn't mutating it uses immer.js which under the hood uses this to do 
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            console.log(action);
            state.todos = state.todos.filter(todo => todo.id !== action.payload);

        }
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;