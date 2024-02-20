import './header.scss';


export const Header = () => {
    return (
        <header className='header-section'>
            <nav>
                <div className='header-first-bloc'>
                    <img src="/src/assets/images/logo/argentBankLogo.png" alt="Logo ArgentBank" />
                </div>
                <div className='header-scnd-bloc'>
                    <i className="fa-solid fa-circle-user"></i>
                    <p>Sign In</p>
                </div>
            </nav>
        </header>
    )
}