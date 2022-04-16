import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();
    let location = useLocation();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    
      let from = location.state?.from?.pathname || "/";

    const handleEmailOnBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordOnBlur = event =>{
        setPassword(event.target.value);
    }

    if(user){
        navigate(from, { replace: true });
    }

    const handleLogin = event =>{
         event.preventDefault();
         signInWithEmailAndPassword(email,password)
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleLogin} className='form-fields'>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailOnBlur} type="email" name="email" id=""  required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordOnBlur} type="password" name="password" id=""  required />
                    </div>
                    {
                        loading && <p>Loading...</p>
                    }
                    <p style={{color: 'red'}}>{error?.message}</p>
                    <input className='submit-btn' type="submit" value="Login" />
                    <p className='link-title'>
                        New to Ema-John ? <Link className='signup-link' to='/signup'>Create a Aew Account</Link>
                    </p>
                    <div className='horizontal-or'>
                        <hr />
                        <p>Or</p>
                        <hr />
                    </div>
                    <button className='googleSignIn-btn'>
                        <FontAwesomeIcon className='icon' icon={faGoogle}></FontAwesomeIcon>
                        Continue with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;