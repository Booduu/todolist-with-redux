import React from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { visibilityFilters, toggleTodo, deleteTodo } from '../store/actions';
import List from '@material-ui/core/List'



const TodoList = ({ todos, filter, deleteTodo, toggleTodo }) => {

  const filterArray = filter === visibilityFilters.SHOW_ALL ? todos : filter === visibilityFilters.SHOW_DONE ? todos.filter( (t, i) => t.done ) : todos.filter( (t, i) => !t.done)

    return (
        <List>
            { filterArray.map( (t, i) => (
                <TodoItem 
                    key={ t.name } 
                    todo={ t } 
                    deleteTodo={ () => deleteTodo(i) } 
                    toggleTodo={ () => toggleTodo(i)} 
                />
            ))} 
        </List>
    )
}

export default connect(state => ({
    filter: state.todosRed.filter,
    todos: state.todosRed.todos
  }), {toggleTodo, deleteTodo})(TodoList);