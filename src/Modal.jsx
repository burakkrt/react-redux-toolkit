export default function Modal() {

    return (
        <div className="modal fade" id="editTodo" tabIndex="-1" aria-labelledby="editTodoModal"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Edit Todo : id</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                      style={{height: "100px"}}/>
                            <label htmlFor="floatingTextarea2">New Todo Content...</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel
                        </button>
                        <button type="button" className="btn btn-success">Save
                            changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}