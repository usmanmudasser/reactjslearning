import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component
{

   
    getStyle=() =>
    {
        return {
            backgroundColor:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration:this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    

    render()
    {
        //destructuring of object
        const {id,title}= this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {' '}
                {title}
                <button style={btnStyle} onClick={this.props.deleteTodo.bind(this,id)}>x</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    backgroundColor:'#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'

}
//PropTypes
TodoItem.propTypes= {
    todo:PropTypes.object.isRequired
  }

//   const itemStyle = {
//       backgroundColor:'#f4f4f4'
//   }
export default TodoItem