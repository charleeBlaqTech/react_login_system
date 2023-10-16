import React, { useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import "./utility/css/loginStyles.css";
import {Google, Github, Sso} from "../components/icons/Icons";
import {NavLogo} from "../components/icons/DashboardIcons";
import { AuthContext} from "./UserContext"


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate= useNavigate();
  const {login}= useContext(AuthContext);
  

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      if(email !== "" || password !== ""){
        const response = await fetch('https://sig-staging-api-a4c37da3d933.herokuapp.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
            });

          if (response.ok) {
                login()
                navigate('/dashboard')
          }else{
              setErrorMessage("The login credentials is either not correct/mismatch");
              setEmail("");
              setPassword("");
          }
      }else{
        setErrorMessage("The inputs cannot be empty...");
      }
      
    } catch (error) {
      setErrorMessage(error.message)
    }
  };

  return (
    <div className="login__main__container">
      <div className="logo__container">
          <NavLogo/>
      </div>
      <div className='form__container'>
          <form action="/user/login" className="form" id="login" method="post" onSubmit={handleLogin}>
              <div className="form__heading">
                  <h1 className="form__title">welcome back</h1>
                  <p className='form__subtitle'>sign in to access your account</p>
              </div>

              <div className="form__message form__message--error">{errorMessage}</div>

              <div className="form__input-group">
                <label className='form__label' htmlFor="email">Email</label>
                <input type="email" id="email" className="form__input" value={email}
                    onChange={(e) => setEmail(e.target.value)} onFocus={(e)=>setErrorMessage("")} placeholder="Enter Your Email"/>
                {/* <div className="form__input-error-message">invalid password pls try again</div> */}
              </div>

              <div className="form__input-group">
                <label className='form__label' htmlFor="password">Password</label>
                <input type="password" id="password" className="form__input" value={password}
                  onChange={(e) => setPassword(e.target.value)} onFocus={(e)=>setErrorMessage("")} placeholder="Enter Your Password"/>
              {/* <div className="form__input-error-message">invalid password pls try again</div> */}
              <p className="form__text">
                <a href="#" className="form__link">Forgot password?</a>
              </p>
            </div>
            <button className="form__button" type="submit">sign in</button>
       
          </form>
          <div className="form__other__login__method__wrapper">
            <p className='form__OR__divider'>OR</p>
            <div className="other__methods__btn__container">
              <button><a href="#">sign in with Github</a><Google/></button>
              <button><a href="#">sign in with Google</a><Github/></button>
              <button><a href="#">sign in with SSO</a><Sso/></button>
            </div>
          </div>
      </div>
      
      <p className="form__text">
          <a href="#" className='form__signup__link'>Don't have an account?<span>sign up</span></a>
      </p>
    
    </div>
  )
}

export default Login