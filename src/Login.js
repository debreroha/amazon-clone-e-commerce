import React, { useState } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import  {auth}  from './firebase'
 
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState()

  const signIn = (e) => {
    e.preventDefault()

    // do some firabase to signin
  }

  const register = e => {
    e.preventDefault()
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth)
      })
      .catch(error => alert(error.message))

    // do some firebase to register
    // auth.createUserWithEmailAndPassword(email, password)
    //   .then((auth) => {
    //     // it succefully creates a new user with email and password
    //     console.log(auth)
    //   })
    //   .catch(error => alert(error.message))

  } 

  return (
    <div className='login'>
      <Link to='/'>
        <img 
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
          alt="amazon logo" className="login__logo" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
            <h5>E-mail</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

            <h5>Password</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type='submit' onClick={signIn} className='login__signInButton'>Sing In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
      </p>

      <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>

        
      </div>
    </div>
  )
}

export default Login
