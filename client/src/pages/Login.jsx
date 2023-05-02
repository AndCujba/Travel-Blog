import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='login'>
        <span className='loginTitle'>Login</span>
      <form className='loginForm'>
        <label>Email</label>
        <input className='loginInput' type="email" placeholder='Enter Your Email...' />
        <label>Password</label>
        <input className='loginInput' type="password" placeholder='Enter Your Password...' />
        <button className='loginButton'>Login</button>
      </form>
      <button className='registerButton'>
      <Link to="/register" className='link'>Register</Link>
      </button>
    </div>
  )
}
