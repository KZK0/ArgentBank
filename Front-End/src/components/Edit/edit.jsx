import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInfo, updateUserName } from '../../actions/user.action';
import './edit.scss';

export const EditName = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [newUsername, setNewUsername] = useState('');
    const dispatch = useDispatch();
    const token = sessionStorage.getItem('token');
    const userInfo = useSelector(state => state.user.userInfo);

    useEffect(() => {
        if (token) {
            dispatch(fetchUserInfo(token));
        }
    }, [dispatch, token]);

    const EditClick = () => {
        setIsEditing(true);
    };

    const CancelClick = () => {
        setIsEditing(false);
    };

    const FormSubmit = async (e) => {
        e.preventDefault();
        setIsEditing(false);
        if (token && newUsername) {
            dispatch(updateUserName(token, newUsername))
        }
    };

    return (
        <section className='editname-section'>
            {isEditing ? (
                <div className='editname-action'>
                    <h2>Edit User Info</h2>
                    <form className='edituser-form' onSubmit={FormSubmit}>
                        <div className='userform-mid'>
                            <div className='user-champs'>
                                <label htmlFor="user_name">User Name:</label>
                                <input
                                    type="text"
                                    name='user_name'
                                    value={newUsername}
                                    onChange={(e) => setNewUsername(e.target.value)}
                                />
                            </div>
                            <div className='user-champs'>
                                <label htmlFor="user_firstname">First Name:</label>
                                <input type="text" name='user_firstname' value={userInfo?.body?.firstName || ''} disabled
                                    style={{
                                        cursor: 'not-allowed',
                                        background: '#ffffffb0',
                                    }} />
                            </div>
                            <div className='user-champs'>
                                <label htmlFor="user_lastname">Last Name:</label>
                                <input type="text" name='user_lastname' value={userInfo?.body?.lastName || ''} disabled
                                    style={{
                                        cursor: 'not-allowed',
                                        background: '#ffffffb0',
                                    }} />
                            </div>
                            <div className='edit-btn'>
                                <button aria-label='Save edit button' type='submit' id='save-btn'>Save</button>
                                <button aria-label='Cancel edit button' onClick={CancelClick}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            ) : (
                <div className='editname-bloc'>
                    <div className='editname-first'>
                        <h2>Welcome back</h2>
                        <div className='first-row'>
                            <h3>{userInfo?.body?.firstName} {userInfo?.body?.lastName}</h3>
                            <p>!</p>
                        </div>
                    </div>
                    <div className='editname-scnd'>
                        <button onClick={EditClick}>
                            Edit Name
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}