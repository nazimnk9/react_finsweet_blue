import React from 'react'
import "./error.css"
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className='error_body'>
        <div className='error_wrapper'>
            <h1>404</h1>
            <h2>page not found</h2>
            <p>Oops! The page you are looking for might have been removed had its name changed or its temporarily unavailable.</p>
            <Link to="/">Go to home page</Link>
        </div>
    </div>
  )
}

export default Error