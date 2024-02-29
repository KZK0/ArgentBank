import { Header } from '../../components/header/header';
import { EditName } from '../../components/Edit/edit';
import { Balance } from '../../components/card/card';
import { Footer } from '../../components/footer/footer';
import Currency from '../../data/currency.json';
import './dashboard.scss'


export const Dashboard = () => {
    return (
        <div className='dashboard-page'>
            <Header />
            <EditName />
            <Balance data={Currency} />
            <Footer />
        </div>
    )
}