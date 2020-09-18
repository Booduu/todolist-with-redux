import * as actions from './actions';

const initialState = {
  todos: [
    {
      name: 'premiere chose à faire',
      done: false
    },
    {
      name: 'seconde chose à faire',
      done: false
    }
  ],
  filter: actions.visibilityFilters.SHOW_ALL
}

export const todosRed = (state = initialState, action) => {
    switch (action.type) {
      case actions.ADD_TODO:
        return {
          ...state,
          todos: state.todos.concat(action.todo)
        };
      case actions.DELETE_TODO:
        const newTodos = [ ...state.todos ].filter( (t, i) => i !== action.index);
        return {
          ...state,
          todos: newTodos
        }
      case actions.DELETE_ALL_TODOS:
        return {
          ...state,
          todos: []
        }
        break;
      case actions.TOGGLE_TODO:
        console.log('toggle');
        const newTodosList = [...state.todos];
        newTodosList[action.index].done = !newTodosList[action.index].done;
        return {
          ...state,
          todos: newTodosList
        }
      case actions.SET_FILTER: {
        return {
          ...state,
          filter: action.filter
        }
      }
      default:
        return state
    }
 }

// export const filter = (state = actions.visibilityFilters.SHOW_ALL, action) => {
//     switch(action.type) {
//         case actions.SET_FILTER: {
//             return action.filter
//         }
//         default: {
//             return state
//         }
//     }
// }
