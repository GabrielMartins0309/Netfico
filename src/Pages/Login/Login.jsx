import React, { useState } from 'react';
import './Login.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => { 
        console.log("success");
      })
      .catch((error) => {
        console.log("failed");
      });
  };

  return (
  <section className="login">
    <div className='loginForm'>
      <img src='images/logoBranco.png' alt='logo' className='logoLogin'/>
        <input
          type="email"
          class='inputLogins'
          id="inputEmail"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)} />    
        <input  
          type="password" 
          class='inputLogins'
          id="inputPassword"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" onClick={handleLogin}/>
    </div>
  </section>
  );
};

export default Login;
