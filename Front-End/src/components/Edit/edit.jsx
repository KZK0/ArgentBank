import React, { useState } from 'react';
import './edit.scss';

export const EditName = () => {
    const [isEditing, setIsEditing] = useState(false);

    const EditClick = () => {
        setIsEditing(true);
    };

    const CancelClick = () => {
        setIsEditing(false);
    };

    return (
        <section className='editname-section'>
            {isEditing ? (
                <div className='editname-action'>
                    <h2>Edit User Info</h2>
                    <form className='edituser-form'>
                        <div className='userform-mid'>
                            <div className='user-champs'>
                                <label htmlFor="user_name">User Name:</label>
                                <input type="text" name='user_name' />
                            </div>
                            <div className='user-champs'>
                                <label htmlFor="user_firstname">First Name:</label>
                                <input type="text" name='user_firstname' placeholder='Tony' disabled
                                    style={{
                                        cursor: 'not-allowed',
                                        background: '#ffffffb0',
                                    }} />
                            </div>
                            <div className='user-champs'>
                                <label htmlFor="user_lastname">Last Name:</label>
                                <input type="text" name='user_lastname' placeholder='Jarvis' disabled
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
                            <h3>Tony Jarvis</h3>
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
