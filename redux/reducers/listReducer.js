import {GOAL_ADD, GOAL_DELETE} from '../actions/types'; // Reducers requires action types for switch cases

const initialState = {
  todos: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GOAL_ADD:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case GOAL_DELETE:
      const newtodos = state.todos.filter(
        (todos) => todos.id !== action.payload,
      );
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
}
