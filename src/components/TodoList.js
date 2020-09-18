import React from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { visibilityFilters, toggleTodo, deleteTodo } from '../store/actions';


const TodoList = ({ todos, filter, deleteTodo, toggleTodo }) => {

  const filterArray = filter === visibilityFilters.SHOW_ALL ? todos : filter === visibilityFilters.SHOW_DONE ? todos.filter( (t, i) => t.done ) : todos.filter( (t, i) => !t.done)

    return (
        <ul className="list-group">  
            { filterArray.map( (t, i) => (
                <TodoItem 
                    key={ t.name } 
                    todo={ t } 
                    deleteTodo={ () => deleteTodo(i) } 
                    toggleTodo={ () => toggleTodo(i) }
                />
            ))} 
        </ul>
    )
}

export default connect(state => ({
    filter: state.todosRed.filter,
    todos: state.todosRed.todos
  }), {toggleTodo, deleteTodo})(TodoList);