import { Fragment, useContext } from "react"
import TodoItem from "./TodoItem"
import TodoContext from "./../../store/TodoContext"
const TodoList = () => {
    const { todos } = useContext(TodoContext)
    return <Fragment>
        <ul className="p-4">
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
    </Fragment>
}

export default TodoList