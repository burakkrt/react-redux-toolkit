import {BiEdit} from "react-icons/bi";
import {useDispatch} from 'react-redux';
import {deleteTodo, doneTodo} from "../stores/todos.jsx";
import {AiFillDelete} from "react-icons/ai";
import {modify} from "../stores/modal.jsx";

export default function Todo({todo}) {

    const {id, desc, date, checked} = todo;
    const dispatch = useDispatch();

    function checkedHandler(e) {
        dispatch(doneTodo({id: id, checked: e.currentTarget.checked}))
        if (e.currentTarget.checked === true) {
            document.querySelector(`#todo${id}`).classList.add('checked')
        } else {
            document.querySelector(`#todo${id}`).classList.remove('checked')
        }
    }

    function deleteTodoHandler() {
        dispatch(deleteTodo(id))
    }


    function editTodoHandler() {
        dispatch(modify({todoId: id, oldTodo: desc}))
    }

    return (
        <div className="list-group-item list-group-item-action">
            <input className="form-check-input me-2  border-secondary pointer" type="checkbox"
                   onChange={checkedHandler} checked={checked}/>
            <span className="me-1">{id} :</span>
            <span className={`align-middle ${checked && 'checked'}`} id={`todo${id}`}>{desc} <span
                className="bg-warning-subtle py-1 px-2 rounded">Date : {date}</span></span>
            <BiEdit className="text-info-emphasis ms-1 pointer" data-bs-toggle="modal" onClick={editTodoHandler}
                    data-bs-target="#editTodo"/>
            <AiFillDelete className="text-danger ms-1 pointer" onClick={deleteTodoHandler}/>
        </div>
    );
}