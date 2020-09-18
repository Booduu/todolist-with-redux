import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import Filter from './components/Filter';
import TodoList from './components/TodoList';
import DeleteAllTodos from './components/DeleteAllTodos';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

class App extends Component {
  
  render() {
   
    return (
      <Container  maxWidth="sm">
        <hr className="my-4" />
        <AddTodo />
        <hr className="my-4" />

        {/* <div className="card"> */}
        <Card>
         <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Typography>
              TO-DO LIST
            </Typography>
            <Filter className={{ display:'flex', justifyContent: 'space-between'}}/>
          </Box>
          

          <div className="card-body">
            <TodoList />
          </div>
          <DeleteAllTodos />
          </CardContent>
        </Card>
        {/* </div>   */}

      </Container>
    );
  }
}

export default App;