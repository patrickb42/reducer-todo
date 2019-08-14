const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO_COMPLETED = 'TOGGLE_TODO_COMPLETED';
const REMOVE_TODO = 'REMOVE_TODO';

export const todosAction = {
  ADD_TODO,
  TOGGLE_TODO_COMPLETED,
  REMOVE_TODO,
}

export const todosInitalState = {
  todos: [
    {
      id: 1,
      task: 'one',
      completed: true,
    },
    {
      id: 2,
      task: 'two',
      completed: false,
    }
  ],
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
      case REMOVE_TODO:
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload),
        };
    default:
      throw new Error(`${action.type} is not a valid action`);
  }
};
