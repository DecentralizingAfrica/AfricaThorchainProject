import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div style={headerStyle}>
       <h3> TodoList Project</h3>
       <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </div>
  )
}
const headerStyle={
    background: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
  
}
const linkStyle={
  color:'#fff',
  textDecoration: 'none'
}
export default Header