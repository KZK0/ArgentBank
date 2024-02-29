import { NavLink } from 'react-router-dom';
import './header.scss';


export const Header = () => {
    return (
        <header className='header-section'>
            <nav>
                <div className='header-first-bloc'>
                    <NavLink to="/">
                        <img src="/src/assets/images/logo/argentBankLogo.png" alt="Logo ArgentBank" />
                    </NavLink>
                </div>
                <div className='header-scnd-bloc'>
                    <div className='scnd-user'>
                        <i className="fa-solid fa-circle-user"></i>
                        <p>Test</p>
                    </div>
                    <NavLink to="/Login">
                        <div className='scnd-log'>
                            <i className="fa-solid fa-circle-user"></i>
                            <p>Sign In</p>
                        </div>
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}