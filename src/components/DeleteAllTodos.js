import React from 'react';
import { connect } from 'react-redux';
import { deleteAllTodos } from '../store/actions';
import { Button } from '@material-ui/core';

const DeleteAllTodos = ({ todos, deleteAllTodos }) => {

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding:'0 20px 0 20px'}}>
        { todos.length > 1 && (
            <Button onClick={ () => deleteAllTodos() } >Delete All</Button>
        )}   
        </div>
    )
}

export default connect(state => ({
    filter: state.todosRed.filter,
    todos: state.todosRed.todos
}), {deleteAllTodos})(DeleteAllTodos);