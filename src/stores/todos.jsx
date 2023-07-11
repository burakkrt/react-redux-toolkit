import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            desc: "Make coffee.",
            date: '27.06.2023',
            checked: true
        },
        {
            id: 2,
            desc: "Check your mail.",
            date: '30.06.2023',
            checked: false
        }
    ]
}


const todos = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [
                ...state.todos,
                action.payload
            ]
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        doneTodo: (state, action) => {
            state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.checked = action.payload.checked
                }
            })
        },
        clearTodos: (state) => {
            state.todos = [];
        },
        modifiedTodo: (state, action) => {
            state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.desc = action.payload.desc
                }
            })
        }
    }
})

export const {addTodo, deleteTodo, doneTodo, clearTodos, modifiedTodo} = todos.actions;

export default todos.reducer;