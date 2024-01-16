import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
 
function Login() {
  return (
    <div Login>
      <Link to='/'>
        <img src="https://www.pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" className="login__logo" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
            <h5>E-mail</h5>
            <input type="email" value='email' />
        </form>
      </div>
    </div>
  )
}

export default Login
