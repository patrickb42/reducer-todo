import React, { useReducer } from 'react';

import './App.css';

import { TodosContext } from './contexts';
import { todosReducer, todosInitalState, todosAction } from './reducers/TodosReducer';
import TodoForm from './components/TodoForm/TodoForm';
import Todos from './components/Todos/Todos';

function App() {
  const [state, dispatch] = useReducer(todosReducer, todosInitalState);

  return (
    <div className="App">
      <TodosContext.Provider value={{ state, dispatch, todosAction }} >
        <TodoForm />
        <Todos />
      </TodosContext.Provider>
    </div>
  );
}

export default App;
