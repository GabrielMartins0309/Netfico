import React, { useState } from 'react';
import './Login.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import SubmitButton from '../../Components/SubmitButton/SubmitButton';
import Input from '../../Components/Input/Input';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/moviecard")
        console.log("success");
      })
      .catch((error) => {
        console.log("failed");
      });
  };

  return (
    <section>
      <div className="login">
      <form className='loginForm' onSubmit={handleLogin}>
        <img src='images/logoBranco.png' alt='logo' className='logoLogin' />
        <h1>Login</h1>
        <Input
          type="email"
          id="inputEmail"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          id="inputPassword"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton btnText="Login" />
        <a href="">Esqueceu a senha ?</a>
        <div className='boxRemember'>
          <label htmlFor="remember">Lembre-se de mim</label>
          <input type="checkbox" name="remember" id="remember" />
        </div>
        <div className="signNow">
          <p>Novo por aqui?</p>
          <a href="#">Assine aqui</a>
        </div>
      </form>
      </div>
      <Footer/>
    </section>
  );
};

export default Login;
