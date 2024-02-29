import './loginform.scss';

export const LoginForm = () => {
    return (
        <section className='Login-section'>
            <form className='login-form'>
                <div className='form-top'>
                    <i className="fa-solid fa-circle-user"></i>
                    <h3>Sign In</h3>
                </div>
                <div className='form-mid'>
                    <div className='form-champs'>
                        <label htmlFor="user_name">Username</label>
                        <input type="text" name='user_name' maxLength='25' required />
                    </div>
                    <div className='form-champs'>
                        <label htmlFor="user_password">Password</label>
                        <input type="password" name='user_password' maxLength='25' required />
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
    )
}