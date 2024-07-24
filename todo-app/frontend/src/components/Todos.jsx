/* eslint-disable react/prop-types */
export function Todos({ todos }) {
    return (
        <div>
            {
                todos.map((todo) => (
                    <div key={todo._id}>
                        <b>Title: </b> {todo.title} <br />
                        <b>Description: </b> {todo.description} <br />
                        <button>
                            {
                                todo.completed ?
                                    <b>DONE</b> :
                                    <b>Mark as DONE</b>
                            }
                        </button>
                    </div>
                ))
            }
        </div>
    );
}