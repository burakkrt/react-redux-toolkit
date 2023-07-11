import {configureStore} from '@reduxjs/toolkit';
import todos from "./todos.jsx";
import modal from "./modal.jsx";

export const store = configureStore({
    reducer: {
        todos,
        modal
    }
})