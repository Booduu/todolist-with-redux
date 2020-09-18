import * as actions from './actions';

const initialState = {
  todos: [
    {
      name: 'On va manger des chips',
      done: false
    },
    {
      name: 'C\'est tout ce que ca t\'fais quand j\'te dis qu\'on va manger des chips ?',
      done: false
    },
    {
      name: 'Qu\'est-ce qu\'il y a ? Tu fais la trouche ou quoi ?' ,
      done: false
    },
    {
      name: 'Hugh Salut !' ,
      done: true
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

