import React from 'react';

const Todo = ({ task, id, completed, handleClick }) => {
  return (<>
    <div
      className={completed ? 'completed' : ''}
      onClick={handleClick}
    >
      {task}
    </div>
  </>);
};

export default Todo;
