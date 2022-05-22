import { Fragment, useState } from "react";
import TodoList from "./components/todo/TodoList";
import TodoForm from "./components/todo/TodoForm";
const App = () => {

  return <Fragment>
    <TodoForm />
    <TodoList />
  </Fragment>
};


export default App;