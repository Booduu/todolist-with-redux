import React from 'react';
import { connect } from 'react-redux';
import { deleteAllTodos } from '../store/actions';

const DeleteAllTodos = ({ deleteAllTodos }) => {
    return (
        <>
            <button 
                type="button"
                onClick={ () => deleteAllTodos() } 
                className="btn btn-danger btn-small w-25"> Delete All
            </button>
        </>
    )
}

export default connect(state => ({
    filter: state.todosRed.filter,
    todos: state.todosRed.todos
}), {deleteAllTodos})(DeleteAllTodos);