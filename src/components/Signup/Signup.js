import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);
     
    const handleEmailOnBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordOnBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordOnBlur = event => {
        setConfirmPassword(event.target.value)
    }
    
    if(user){
        navigate('/shop');
    }
    const handleClickOnSubmit = event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('Password did not match.Please try again.')
            return;
        }
        else {
            setError('')
        }

        if(password.length <6){
            setError('Password must be contains at least 6 character')
            return;
        }

        createUserWithEmailAndPassword(email,password)
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign up</h2>
                <form onSubmit={handleClickOnSubmit} className='form-fields'>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailOnBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordOnBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordOnBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='submit-btn' type="submit" value="Sign up" />
                    <p className='link-title'>
                        Already have an account ? <Link className='signup-link' to='/login'>Login</Link>
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

export default Signup;