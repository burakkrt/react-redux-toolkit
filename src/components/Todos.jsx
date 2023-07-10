import {AiOutlineClear} from "react-icons/ai";
import {useSelector, useDispatch} from "react-redux";
import {addTodo} from "../stores/todos.jsx";
import Todo from "./Todo.jsx";
import {useRef, useState} from "react";
import {clearTodos} from '../stores/todos.jsx'

export default function Todos() {

    const [newTodo, setNewTodo] = useState("");
    const {todos} = useSelector(state => state.todos)
    const dispatch = useDispatch();
    const addTodoInput = useRef();

    function addTodoHandler(e) {
        if (newTodo !== "") {
            dispatch(addTodo({
                id: todos[todos.length - 1].id + 1,
                desc: newTodo,
                date: new Date().toLocaleDateString('TR'),
                checked: false
            }))
            addTodoInput.current.value = "";
            e.currentTarget.querySelector("input").blur();
        }
        e.preventDefault();
    }

    return (
        <div className="container w-100 p-5 border border-2 border-secondary-subtle rounded bg-white">
            {/*Header*/}
            <div className="d-flex flex-row justify-content-between align-items-center mb-3">
                <span className="fs-4 text-uppercase fw-bold">TodoList</span>
                <div>
                    <button className="btn btn-danger fs-6" onClick={() => dispatch(clearTodos())}>
                        <AiOutlineClear
                            className="align-top fs-5 me-1 "/>
                        Clear All
                    </button>
                </div>
            </div>
            <div className="list-group my-3">
                <form onSubmit={addTodoHandler}>
                    <input type="text" className="form-control " placeholder="Add Todo..."
                           aria-label="Username"
                           onChange={e => setNewTodo(e.target.value)} ref={addTodoInput}
                    />
                </form>
            </div>
            {/*Body*/}
            <div>
                <div className="list-group">
                    {todos.map(todo =>
                        <Todo key={todo.id} todo={todo}/>
                    )}
                </div>
            </div>
        </div>
    );
}