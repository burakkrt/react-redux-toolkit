import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from "react";
import {modifiedTodo} from "./stores/todos.jsx";

export default function Modal() {

    const {modal} = useSelector(state => state.modal)
    const [modifyTodo, setModifyTodo] = useState('');
    const dispatch = useDispatch();


    function setTodoSaveHandler() {
        if (modifyTodo !== "") {
            dispatch(modifiedTodo({id: modal.todoId, desc: modifyTodo}))
        }
        setModifyTodo('');
    }

    return (
        <div className="modal fade" id="editTodo" tabIndex="-1" aria-labelledby="editTodoModal"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Todo Id : {modal.todoId}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="px-3 mt-3">
                        <span className="text-danger">{modal.oldTodo}</span>
                    </div>
                    <div className="modal-body">
                        <div className="form-floating">
                            <textarea className="form-control"
                                      id="modifiedTodoArea"
                                      onChange={e => setModifyTodo(e.target.value)} value={modifyTodo}
                                      style={{height: "70px"}}/>
                            <label htmlFor="modifiedTodoArea">New Todo Content...</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                                onClick={() => setModifyTodo('')}>Cancel
                        </button>
                        <button type="button" className="btn btn-success" onClick={setTodoSaveHandler}
                                data-bs-dismiss="modal">Save
                            changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}