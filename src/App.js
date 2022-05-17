import { Fragment } from "react";
import TodoList from "./components/todo/TodoList";
import TodoForm from "./components/todo/TodoForm";
export default () => {

  return <Fragment>
    <TodoForm/>
    <TodoList/>
  </Fragment>
};
