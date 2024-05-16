import React from 'react';
import './Login.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();

  return (
    <div className='login'>
      <div className='login__wrapper'>
        <div className='login__header'>
          <img
            className='header__img'
            src='https://i.ibb.co/r5krrdz/logo.png'
            alt='Netflix Logo'
          />
        </div>

        <div className='login__signIn-form'>
          <div className='login__signIn-form-top'>
            <h1>Sign In</h1>
            <input
              className='login__input'
              type='text'
              placeholder='Email or phone number'
            />
            <input
              className='login__input'
              type='text'
              placeholder='Password'
            />
            <button
              className='login__btn'
              onClick={() => history.push('/profiles')}
            >
              Sign In
            </button>
            <div className='login__signIn-form-top-footer'>
              <div className='login__rememberMe'>
                <input type='checkbox' name='rememberMe' id='rememberMe' />
                <span class='checkmark'></span>
                <label htmlFor='rememberMe'>Remember me</label>
              </div>
              <a href='/'>Need help?</a>
            </div>
          </div>

          <div className='login__signIn-form-bottom'>
            <div
              className='login__facebook'
              onClick={() => history.push('/profiles')}
            >
              <FacebookIcon /> <span>Login with Facebook</span>{' '}
            </div>
            <span>
              New to Netflix?{' '}
              <a href='/' className='login__signUpLink'>
                Sign up now.
              </a>{' '}
            </span>
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{' '}
              <a href='/' className='login__learnMore'>
                Learn more.
              </a>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
