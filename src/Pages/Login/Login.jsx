import React, {useState} from 'react';
import './Login.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const auth = getAuth();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        console.log("succes");
      })
      .catch((error) => {
        console.log("failed");
      });
  };

  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Login" onClick={handleLogin} />
    </div>
  );
};

export default Login;
