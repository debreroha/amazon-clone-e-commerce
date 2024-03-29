import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

import './Login.css'
import {Link} from 'react-router-dom'
import auth  from './firebase'
 
function Login() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState()

  const signIn = (e) => {
    e.preventDefault()

    // do some firabase to signin
  }
  
  const register = async (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) =>{

      if(userCredential.user){

        console.log(userCredential.user)
      }
    }).catch(error => alert(error.message))
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
