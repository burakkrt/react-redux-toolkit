import {BiEdit} from "react-icons/bi";

export default function Todo() {


    return (
        <div className="list-group-item list-group-item-action">
            <input className="form-check-input me-2 bg-secondary pointer" type="checkbox"/>
            <span className="align-middle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</span>
            <BiEdit className="text-danger ms-1 pointer" data-bs-toggle="modal" data-bs-target="#editTodo"/>
        </div>
    );
}