import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { LOGIN_USER_SUCCESS } from '../../actions/login.action';
import { LOGIN_USER_ERROR } from '../../actions/login.action';

import './loginform.scss';


export const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SubmitForm = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data = await response.json();
            console.log(data.body.token);

            if (response.ok) {
                dispatch({ type: LOGIN_USER_SUCCESS, payload: { token: data.body.token } }); // Authentification réussie
                localStorage.setItem("token", data.body.token);
                navigate('/Dashboard');
                return data.body.token; // Retourne le token pour être utilisé ultérieurement
            } else {
                // Erreur d'authentification
                throw new Error(data.message);
            }
        } catch (error) {
            dispatch({ type: LOGIN_USER_ERROR, payload: { error: error.message } }); // Erreur lors de la requête
            throw error;
        }
    };

    return (
        <section className='Login-section'>
            <form className='login-form' onSubmit={SubmitForm}>
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
