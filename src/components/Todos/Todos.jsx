import React, { useContext } from 'react';

import { TodosContext } from '../../contexts';
import { TOGGLE_TODO_COMPLETED } from '../../reducers/TodosReducer'
import Todo from '../Todo';

const Todos = () => {
  const { state, dispatch } = useContext(TodosContext);

  return (<>
    <div>
      {state.todos.map(todo => {
        return <Todo
          key={todo.id}
          {...todo}
          handleClick={() => {
            dispatch({
              type: TOGGLE_TODO_COMPLETED,
              payload: todo.id,
            })
          }}
        />;
      })}
    </div>
  </>);
};

export default Todos;
