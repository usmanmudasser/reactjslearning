import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {

    //since the state of addtodo component is form level so we will maintain it here
    //if in any case when state is to be manageg at application level than we can use redux.

    state ={
        title: ''
    }

    onChange = (e)=>
    {
        //one way to provide each field name inside the form.
        // this.setState({
        //     title: e.target.value
        // });
        //second way works if your state variable has same name as its name in form
        this.setState(            
            {
                [e.target.name] : e.target.value
            });
    }

    onSubmit=(e) =>
    {
        e.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({title: ''});
    }
  render() {
    return (
      <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
          <input 
            type="text" 
            name="title" 
            style={{flex: '10', padding: '5px'}}
            placeholder="Add Todo..."
            value={this.state.title}
            onChange={this.onChange}
            />
            <input 
                value="submit" 
                type="submit" 
                className="btn"
                style={{flex: '1'}}/> 
      </form>
    )
  }
}


// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
