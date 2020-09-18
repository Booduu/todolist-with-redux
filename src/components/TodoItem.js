import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';


const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    // <li onClick={toggleTodo} className="list-group-item d-flex flex-row justify-content-between align-items-center list-group-item-action" >
     <Box display="flex" justifyContent="space-between" alignItems="center">
     {/* <Box display="flex" justifyContent="space-between"> */}
        <span> {todo.name} </span>
        <span style={{ display: 'flex'}}>
          <ListItemIcon onClick={toggleTodo}>
            <Checkbox
              checked={todo.done}
              tabIndex={-1}
              disableRipple
              color="primary"
            />
          </ListItemIcon>
          <IconButton
            onClick={(e) => {
            e.stopPropagation();
            deleteTodo();
            }}>
            <DeleteIcon bgcolor="action"/>
          </IconButton>
        </span>
      {/* </Box> */}
      </Box>  
  
  )
}

export default TodoItem;