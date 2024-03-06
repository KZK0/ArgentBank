import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../actions/login.action';

import './header.scss';

export const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector(state => state.login.auth);
    const userName = useSelector(state => state.user.userInfo);


    const Profil = () => {
        navigate('/Dashboard');
    }

    const Logout = () => {
        dispatch(logoutUser());
        sessionStorage.removeItem('token');
        localStorage.removeItem('token');
        navigate('/Login');
    };

    return (
        <header className='header-section'>
            <nav>
                <div className='header-first-bloc'>
                    <NavLink to="/">
                        <img src="/src/assets/images/logo/argentBankLogo.webp" alt="Logo ArgentBank" />
                    </NavLink>
                </div>
                <div className='header-scnd-bloc'>
                    {isAuthenticated ? (
                        <div className='scnd-log'>
                            <div className='logged-name' onClick={Profil}>
                                <i className="fa-solid fa-circle-user"></i>
                                <p>{userName?.body?.userName || 'User'}</p>
                            </div>
                            <div className='logged-btn-out' onClick={Logout}>
                                <i className="fa-solid fa-right-from-bracket"></i>
                                <p>Logout</p>
                            </div>
                        </div>
                    ) : (
                        <NavLink to="/Login">
                            <div className='thrd-log'>
                                <i className="fa-solid fa-circle-user"></i>
                                <p>Login</p>
                            </div>
                        </NavLink>
                    )}
                </div>
            </nav>
        </header>
    );
};