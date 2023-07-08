import {AiOutlineClear} from "react-icons/ai";
import Todo from "./Todo.jsx";

export default function Todos() {

    return (
        <div className="container w-100 border border-warning">
            {/*Header*/}
            <div className="d-flex flex-row justify-content-between align-items-center mb-3">
                <span className="fs-4 text-uppercase fw-bold">TodoList</span>
                <div>
                    <button className="btn btn-danger fs-6">
                        <AiOutlineClear
                            className="align-top fs-5 me-1"/>
                        Clear All
                    </button>
                </div>
            </div>
            {/*Body*/}
            <div>
                <div className="list-group">
                    <Todo/>
                </div>
            </div>
        </div>
    );
}