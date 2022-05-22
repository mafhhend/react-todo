import { Fragment, useContext, useEffect, useState } from "react"
import useDebounce from "../../hooks/useDebounce"
import TodoContext from "../../store/TodoContext"
import useToggle from "./../../hooks/useToggle"
const TodoItem = ({ todo }) => {

    const { deleteTodo, updateTodo } = useContext(TodoContext)
    const [todoText, setTodoText] = useState(todo.title);
    const [isShowInput, setIsShowInput] = useState(false)
    const [isDone, ToggleDone] = useToggle(false);
    const updateTodoText = e => {
        setTodoText(e.target.value)
    }
    
    useDebounce(() => {
        updateTodo(todo.id, todoText)
    }, 1000, [todoText])

    return <Fragment>
        <div className="flex items-center justify-between border-b">
            {isShowInput && <input type="text" className="p-2 border-2 rounded" value={todoText} onChange={updateTodoText} />}
            {!isShowInput && <span onClick={ToggleDone}>

                {isDone && <s>{todo.title}</s>}
                {!isDone && todo.title}

            </span>}
            <div>
                <button className="m-2 btn-base btn-dark" onClick={() => setIsShowInput(!isShowInput)}>Edit</button>
                <button className="m-2 btn-base btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
        </div>
    </Fragment>
}

export default TodoItem