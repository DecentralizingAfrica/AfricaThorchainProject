import React, { Component } from 'react';
import Todo from '../Todo'
import '../../App.css'
import Header from '../layout/Header';
import AddTodo from '../AddTodo';
import  axios from 'axios';



// import uuid from 'uuid';

class Routex extends Component {
  
  state = {
    todos: [
      // {
      //   id: 1,
      //   title: 'Attend NIIT Class',
      //   completed: false
      // },
      // {
      //   id: 2,
      //   title: 'Eat good food',
      //   completed: true
      // },
      // {
      //   id: 3,
      //   title: 'Attend Church',
      //   completed: false
      // },
    ]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res =>this.setState({todos:res.data}))
  }
  // Togo Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  // delTodo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  //addTodo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res=>this.setState({ todos: [...this.state.todos, res.data] }))
    // const newTodo = {
      
    //   id: 4,
    //   title,
    //   completed: false
    // }
    // this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
        <div className='App'>
          <div className='container'>
            <Header />
           
           
                <AddTodo addTodo={this.addTodo} />
                <Todo todo={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            
            {/* <Route path='/about' component={About}/> */}
       

          </div>

        </div>
    );
  }
}

export default Routex;