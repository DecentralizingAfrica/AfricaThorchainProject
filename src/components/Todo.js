import React, { Component } from 'react';
import TodoItems from './TodoItems';
// import PropTypes from 'prop-types';

class Todo extends Component {
    // markComplete=()=>{
    //     console.log('Should Change')
    // }
    render() {
        return this.props.todo.map((todo)=>(
            <TodoItems key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
           
        )); 
    }
}

// Todo.PropTypes ={
//     todo: PropTypes.array.isRequired
// }

export default Todo;