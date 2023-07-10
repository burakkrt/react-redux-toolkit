import {useSelector} from "react-redux";

export default function TodosVisible() {

    const {todos} = useSelector(state => state.todos)
    return (
        <div>
            {todos.length > 0 ? <pre>{JSON.stringify(todos, null, 2)}</pre> :
                <span className="text-danger fs-5">No missions have been added yet.</span>}

        </div>
    );
}