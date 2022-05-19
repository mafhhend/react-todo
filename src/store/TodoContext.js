import { addTodo as RequestAddTodo, getTodos as RequestGetTodos, deleteTodo as RequestDeleteTodo, updateTodo as RequestUpdateTodo } from "./../lib/api"
import ACTIONS from "./Actions";

const { createContext, useState, useReducer, useEffect } = require("react");

const TodoReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.TodoAdd: {
            return [...state, {
                id: new Date().getTime(),
                title: action.payload.todoInput
            }]
        }
        case ACTIONS.TodoGet: {
            return action.payload.data
        }

        case ACTIONS.TodoDelete: {
            const filteredTodos = state.filter(todo => {
                if (todo.id !== action.payload.id) return true;
            })

            return filteredTodos;
        }
        case ACTIONS.TodoUpdate: {
            const index = state.findIndex(todo => todo.id === action.payload.id)
            state[index].title = action.payload.todoText
            return state;

        }
        default: { }
    }
}

const TodoContext = createContext()

export function TodoProvider({ children }) {

    const [stateTodos, dispatchTodo] = useReducer(TodoReducer, []);

    useEffect(() => {
        RequestGetTodos().then(data => {
            dispatchTodo({ type: ACTIONS.TodoGet, payload: { data } })
        })

    }, [])
    const addTodo = todoInput => {
        RequestAddTodo(todoInput).then(data => {
            dispatchTodo({ type: ACTIONS.TodoAdd, payload: { data, todoInput } })
        })
    }

    const deleteTodo = id => {
        RequestDeleteTodo(id).then(data => {
            dispatchTodo({ type: ACTIONS.TodoDelete, payload: { data, id } })
        })
    }
    const updateTodo = (id, todoText) => {
        RequestUpdateTodo(id, todoText).then(data => {
            dispatchTodo({ type: ACTIONS.TodoUpdate, payload: { todoText, id } })
        })
    }
    return (
        //the value will share every where, {{}} is required
        <TodoContext.Provider value={{ stateTodos, addTodo, deleteTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext