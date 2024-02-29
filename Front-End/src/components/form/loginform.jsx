import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../actions/login.action';

import './loginform.scss';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector(state => state.login.auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await dispatch(loginUser(email, password));
            console.log('Response:', response);
            console.log('isAuthenticated:', isAuthenticated);
            console.log('Token:', response.token);
            if (response && response.token && isAuthenticated) {
                // Stocker le token dans le localStorage
                localStorage.setItem('token', response.token);
                // Rediriger vers la page Dashboard
                navigate('/Dashboard');
                console.log("Connecté !");
            } else {
                console.error('Failed to login: Invalid response');
            }
        } catch (error) {
            console.error('Failed to login:', error.message);
        }
    };

    return (
        <section className='Login-section'>
            <form className='login-form' onSubmit={handleSubmit}>
                <div className='form-top'>
                    <i className="fa-solid fa-circle-user"></i>
                    <h3>Sign In</h3>
                </div>
                <div className='form-mid'>
                    <div className='form-champs'>
                        <label htmlFor="user_email">Email</label>
                        <input
                            type="email"
                            name='user_email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-champs'>
                        <label htmlFor="user_password">Password</label>
                        <input
                            type="password"
                            name='user_password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-checkbox'>
                        <input name='remember-me' type="checkbox" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button aria-label='Submit login form' type='submit' id='submit-btn'>
                        Sign In
                    </button>
                </div>
            </form>
        </section>
    );
};
