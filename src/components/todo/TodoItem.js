import { Fragment, useContext, useState } from "react"
import TodoContext from "../../store/TodoContext"

const TodoItem = ({ todo }) => {

    const { deleteTodo,updateTodo } = useContext(TodoContext)
    const [todoText,setTodoText] = useState("");
    const [isShowInput, setIsShowInput] = useState(false)
    
    return <Fragment>
        <div className="flex items-center justify-between border-b">
            {isShowInput && <input type="text" className="p-2 border-2 rounded" value={todo.title} onChange={e=>updateTodo(todo.id,e.target.value)} />}
            {!isShowInput && <span>{todo.title}</span>}
            <div>
                <button className="m-2 btn-base btn-dark" onClick={() => setIsShowInput(!isShowInput)}>Edit</button>
                <button className="m-2 btn-base btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
        </div>
    </Fragment>
}

export default TodoItem