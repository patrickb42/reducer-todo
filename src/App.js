import React from 'react';

import './App.css';

import { TodosContext } from './contexts';
import TodoForm from './components/TodoForm/TodoForm';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className="App">
      <TodosContext.Provider value={{}} >
        <TodoForm />
        <Todos />
      </TodosContext.Provider>
    </div>
  );
}

export default App;
