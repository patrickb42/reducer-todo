import React, { useContext } from 'react';

import { TodosContext } from '../../contexts';
import Todo from '../Todo';

const Todos = () => {
  const { state, dispatch, todosAction } = useContext(TodosContext);

  return (<>
    <div>
      {state.todos.map(todo => {
        return <Todo
          key={todo.id}
          {...todo}
          handleClick={() => {
            dispatch({
              type: todosAction.TOGGLE_TODO_COMPLETED,
              payload: todo.id,
            })
          }}
        />;
      })}
    </div>
  </>);
};

export default Todos;
