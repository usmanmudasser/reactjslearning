import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';
//import uuid from 'uuid';
import './App.css';

class App extends Component {

  //we use jsonplaceholder fake api for development purpose
  
  state={
    todos: [
        //  {
        //      id:uuid.v4(),
        //      title:'clean the trash',
        //      completed:false
        //  },
        //  {
        //      id:uuid.v4(),
        //      title:'dinner with friends',
        //      completed:false
        //  },
        //  {
        //      id:uuid.v4(),
        //      title:'meeting with boss',
        //      completed:false
        //  }
     ]
 }
 
 componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data }))
}
 

 deleteTodo=(id)=>
 {
    //... three dots is known as spread operator
    // this.setState({
    //   todos: [...this.state.todos.filter(todo=>todo.id !== id)]
    // })
    
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));

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
      });
   }

   AddTodo = (title)=>
   {
    //  const newTodo = {
    //    id:uuid.v4(),
    //    //title:title, // syntax example below
    //    title,
    //    completed:false
    //  }
    //   //spread opeartor
    //   this.setState({
    //     todos: [...this.state.todos,newTodo]
    //   });

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));

   }

  render() {
   
    return (
      <Router>
          <div className="App">
            <div className="container">
            <Route exact path="/" render={props => (
                <React.Fragment>
                  <Header/>
                  <AddTodo AddTodo={this.AddTodo}/>
                  <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} ></Todos>
                </React.Fragment>
            )}>
            </Route>
              
              <Route path="/about" component={About}>

              </Route>
            </div>
        
          </div>
      </Router>
    );
  }
}

export default App;
