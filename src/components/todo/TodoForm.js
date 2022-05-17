import { Fragment, useContext, useState } from "react"
import TodoContext from "./../../store/TodoContext"

const TodoForm = () => {
    const { addTodo } = useContext(TodoContext)
    const [todoInput, setTodoInput] = useState("");
    const formHandler = e => {
        e.preventDefault()
        if (!todoInput) return;
        addTodo(todoInput)

        setTodoInput("")
    }
    return <Fragment>
        <form onSubmit={formHandler} className="p-4 bg-gray-200 md:flex">
            <input value={todoInput} onChange={({ target }) => setTodoInput(target.value)} type="text" className="p-4 outline-none w-full md:w-[75%]" />
            <button className="w-full md:w-[25%] mt-2 md:mt-0 md:ml-2 text-white btn-base btn-dark">افزودن</button>
        </form>
    </Fragment>
}

export default TodoForm