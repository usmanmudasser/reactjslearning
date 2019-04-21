import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state={
    todos: [
         {
             id:1,
             title:'clean the trash',
             completed:false
         },
         {
             id:2,
             title:'dinner with friends',
             completed:false
         },
         {
             id:3,
             title:'meeting with boss',
             completed:false
         }
     ]
 }

 deleteTodo=(id)=>
 {
    //... three dots is known as spread operator
    this.setState({
      todos: [...this.state.todos.filter(todo=>todo.id !== id)]
    })
    
 }
 //toggle complete
 markComplete=(id)=>
   {
      this.setState({
        todos:this.state.todos.map((todo)=>
        {
          if(todo.id === id){
            todo.completed = !todo.completed;
          }
          return todo;
        })
      })
   }


  render() {
   
    return (
      <div className="App">
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} ></Todos>
      </div>
      
    );
  }
}

export default App;
