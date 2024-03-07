import { useEffect } from 'react';
import { Header } from '../../components/header/header'
import { LoginForm } from '../../components/form/loginform';
import { Footer } from '../../components/footer/footer';
import './login.scss'


export const Login = () => {

    useEffect(() => {
        document.title = "ArgentBank - Login";
    }, []);

    return (
        <div className='login-page'>
            <Header />
            <LoginForm />
            <Footer />
        </div>
    )
}