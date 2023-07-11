import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    modal: {
        todoId: '0',
        oldTodo: '',
    }
}

const modalReducer = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        modify: (state, action) => {
            state.modal = {
                todoId: action.payload.todoId,
                oldTodo: action.payload.oldTodo,
            }
        },
    }
})

export const {modify} = modalReducer.actions;
export default modalReducer.reducer;