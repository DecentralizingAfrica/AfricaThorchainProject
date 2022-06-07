import React, { Component } from 'react'
// import PropTypes from 'prop-types';

export class TodoItems extends Component {
    getStyle = () => {
        // if(this.props.todo.completed){
        //     return{
        //         textDecoration:'line-through',
        //         color: 'red'
        //     }
        // }
        // else{
        //     return{
        //         textDecoration:'none'
        //     }
        // }

        // fast way

        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none',
            color: this.props.todo.completed ?
                'brown' : 'black'

        }
    }

    // markComplete=()=>{
    //     console.log(this.props)
    // }
    render() {
        const {id, title} = this.props.todo;
        return (

            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox"  onChange={this.props.markComplete.bind(this, id)}/> {'  '} {title}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}> x</button>
                </p>
            </div>

        )
    }
}
// TodoItems.PropTypes ={
//     todo: PropTypes.object.isRequired
// };

const btnStyle = {
    background: 'brown',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50px',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItems