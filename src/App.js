import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import Filter from './components/Filter';
import TodoList from './components/TodoList';
import DeleteAllTodos from './components/DeleteAllTodos';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

class App extends Component {
  
  render() {
   
    return (
      <Container  maxWidth="sm">
        <AddTodo />
        <Divider />

        {/* <div className="card"> */}
        <Card style={{ paddingTop: '20px'}}>
         <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Typography>
              TO-DO LIST
            </Typography>
            <Filter className={{ display:'flex', justifyContent: 'space-between'}}/>
          </Box>
          
            <TodoList />
          <DeleteAllTodos />
         
        </CardContent>
        </Card>
      </Container>
    );
  }
}

export default App;