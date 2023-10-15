import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./utility/css/loginStyles.css";


// import {} from "react-icons/fc";
// import { FaGoogle, FaGithub, } from "react-icons/fa";
// FaKey
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate= useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
  
      const response = await fetch('https://sig-staging-api-a4c37da3d933.herokuapp.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        navigate('/dashboard')
      } else {
        setErrorMessage("The login credentials is either not correct/mismatch");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      setErrorMessage(error.message)
    }
  };

  return (
    <div className="login__main__container">
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
              <button><a href="#">sign in with Github</a><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M16 2C8.265 2 2 8.265 2 16C2 22.195 6.0075 27.4275 11.5725 29.2825C12.2725 29.405 12.535 28.985 12.535 28.6175C12.535 28.285 12.5175 27.1825 12.5175 26.01C9 26.6575 8.09 25.1525 7.81 24.365C7.6525 23.9625 6.97 22.72 6.375 22.3875C5.885 22.125 5.185 21.4775 6.3575 21.46C7.46 21.4425 8.2475 22.475 8.51 22.895C9.77 25.0125 11.7825 24.4175 12.5875 24.05C12.71 23.14 13.0775 22.5275 13.48 22.1775C10.365 21.8275 7.11 20.62 7.11 15.265C7.11 13.7425 7.6525 12.4825 8.545 11.5025C8.405 11.1525 7.915 9.7175 8.685 7.7925C8.685 7.7925 9.8575 7.425 12.535 9.2275C13.655 8.9125 14.845 8.755 16.035 8.755C17.225 8.755 18.415 8.9125 19.535 9.2275C22.2125 7.4075 23.385 7.7925 23.385 7.7925C24.155 9.7175 23.665 11.1525 23.525 11.5025C24.4175 12.4825 24.96 13.725 24.96 15.265C24.96 20.6375 21.6875 21.8275 18.5725 22.1775C19.08 22.615 19.5175 23.455 19.5175 24.7675C19.5175 26.64 19.5 28.145 19.5 28.6175C19.5 28.985 19.7625 29.4225 20.4625 29.2825C23.2418 28.3443 25.6568 26.5581 27.3677 24.1753C29.0786 21.7926 29.9993 18.9334 30 16C30 8.265 23.735 2 16 2Z" fill="black"/>
</svg></button>
              <button><a href="#">sign in with Google</a><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4"/>
<path d="M16.2863 30C20.1434 30 23.3814 28.7555 25.7466 26.6089L21.2386 23.1865C20.0323 24.011 18.4132 24.5865 16.2863 24.5865C12.5086 24.5865 9.30225 22.1444 8.15929 18.7688L7.99176 18.7827L3.58208 22.1272L3.52441 22.2843C5.87359 26.8577 10.699 30 16.2863 30Z" fill="#34A853"/>
<path d="M8.16013 18.7689C7.85855 17.8978 7.68401 16.9644 7.68401 16C7.68401 15.0355 7.85855 14.1022 8.14426 13.2311L8.13627 13.0455L3.67132 9.64736L3.52524 9.71546C2.55703 11.6133 2.00146 13.7444 2.00146 16C2.00146 18.2555 2.55703 20.3866 3.52524 22.2844L8.16013 18.7689Z" fill="#FBBC05"/>
<path d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z" fill="#EB4335"/>
</svg></button>
              <button><a href="#">sign in with SSO</a><svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
<path d="M23.1667 11.9999C23.1666 11.3175 22.9063 10.6351 22.3856 10.1144C21.8649 9.59368 21.1825 9.33333 20.5 9.33333M20.5 20C24.9183 20 28.5 16.4183 28.5 12C28.5 7.58172 24.9183 4 20.5 4C16.0817 4 12.5 7.58172 12.5 12C12.5 12.3649 12.5244 12.7241 12.5717 13.076C12.6496 13.6549 12.6885 13.9443 12.6623 14.1275C12.635 14.3182 12.6003 14.421 12.5063 14.5892C12.416 14.7507 12.2569 14.9097 11.9388 15.2278L5.12484 22.0418C4.89424 22.2724 4.77894 22.3877 4.69648 22.5223C4.62337 22.6416 4.5695 22.7716 4.53684 22.9077C4.5 23.0611 4.5 23.2242 4.5 23.5503V25.8667C4.5 26.6134 4.5 26.9868 4.64532 27.272C4.77316 27.5229 4.97713 27.7268 5.22801 27.8547C5.51323 28 5.8866 28 6.63333 28H9.83333V25.3333H12.5V22.6667H15.1667L17.2722 20.5612C17.5903 20.2431 17.7493 20.084 17.9108 19.9937C18.079 19.8997 18.1818 19.865 18.3725 19.8377C18.5557 19.8115 18.8451 19.8504 19.424 19.9283C19.7759 19.9756 20.1351 20 20.5 20Z" stroke="#32D583" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
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