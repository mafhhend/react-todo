import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { TodoProvider } from "./store/TodoContext"

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);