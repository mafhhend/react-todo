const { createContext, useState } = require("react");
//1
const TodoContext = createContext()



//3 we will add data here
export function TodoProvider({ children }) {
    // MUST define your state here in Provider:
    const [todos, setTodos] = useState([]);


    const addTodo = todoInput => {
        setTodos(currentState => [...currentState, {
            id: new Date().getTime(),
            title: todoInput
        }])
    }

    const deleteTodo = id => {
        const filteredTodos = todos.filter(todo => {
            if (todo.id !== id) return true;
        })
        setTodos(filteredTodos)
    }
    const updateTodo = (id, todoText) => {
        const index = todos.findIndex(todo => todo.id === id)
        todos[index].title = todoText
        setTodos([...todos])
    }
    return (
        //the value will share every where, {{}} is required
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

//2
export default TodoContext