import React from 'react';
import { connect } from 'react-redux';
import { deleteAllTodos } from '../store/actions';

const DeleteAllTodos = ({ todos, deleteAllTodos }) => {

    return (
        <>
        { todos.length > 1 && (
            <button 
                type="button"
                onClick={ () => deleteAllTodos() } 
                className="btn btn-danger btn-small w-25"> Delete All
            </button>
        )}   
        </>
    )
}

export default connect(state => ({
    filter: state.todosRed.filter,
    todos: state.todosRed.todos
}), {deleteAllTodos})(DeleteAllTodos);