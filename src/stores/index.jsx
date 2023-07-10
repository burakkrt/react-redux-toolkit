import {configureStore} from '@reduxjs/toolkit';
import todos from "./todos.jsx";

export const store = configureStore({
    reducer: {
        todos
    }
})