import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/actions';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    submitTodo = () => {
        this.props.addTodo({
            name: this.input.current.value,
            done: false
        })
        this.input.current.value = ''
    }

    render() {
        return (
            <div style={{ width: '100%', margin: '2rem 0 2rem 0' }}>
                <Box display="flex" justifyContent="space-between">
                    <form noValidate autoComplete="off" style={{ width: '100%'}}>
                        <TextField style={{ width: '90%'}} id="outlined-basic" label="Ajouter une to-do" variant="outlined" inputRef={ this.input } />
                    </form>
                    {/* <button onClick={ this.submitTodo } className="btn btn-success"> Ajouter </button> */}
                    <Button onClick={ this.submitTodo } variant="contained">Add</Button>
                </Box>
            </div>
        )
    }
}

export default connect(null, dispatch => {
    return {
        addTodo: (todo) => { dispatch(addTodo(todo)) }
    }
})(AddTodo);