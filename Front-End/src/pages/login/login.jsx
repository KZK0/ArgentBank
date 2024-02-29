import { Header } from '../../components/header/header'
import { LoginForm } from '../../components/form/loginform';
import { Footer } from '../../components/footer/footer';
import './login.scss'


export const Login = () => {
    return (
        <div>
            <Header />
            <LoginForm />
            <Footer />
        </div>
    )
}