const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO_COMPLETED = 'TOGGLE_TODO_COMPLETED';
const REMOVE_COMPLETED_TODOS = 'REMOVE_COMPLETED_TODOS';

export const todosAction = {
  ADD_TODO,
  TOGGLE_TODO_COMPLETED,
  REMOVE_COMPLETED_TODOS,
}

export const todosInitalState = {
  todos: [],
};

export const todosReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          action.payload,
        ],
      };
    case TOGGLE_TODO_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return {
            ...todo,
            completed: action.payload === todo.id ? !todo.completed : todo.completed,
          };
        }),
      };
    case REMOVE_COMPLETED_TODOS:
      console.log('line 46');
      
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
      };
    default:
      throw new Error(`${action.type} is not a valid action`);
  }
};
