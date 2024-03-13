import { useEffect } from 'react';
import { Header } from '../../components/header/header';
import { EditName } from '../../components/Edit/edit';
import { Balance } from '../../components/card/card';
import { Footer } from '../../components/footer/footer';
import Currency from '../../data/currency.json';
import './dashboard.scss'


export const Dashboard = () => {

    useEffect(() => {
        document.title = "ArgentBank - Dashboard";
    }, []);

    return (
        <div className='dashboard-page'>
            <Header />
            <EditName />
            <div className='balance-section'>
                {
                    Currency.map((item) => {
                        return <Balance
                            key={item.id}
                            type={item.type}
                            balance={item.balance}
                            available={item.available}
                        />
                    })
                }
            </div>
            <Footer />
        </div>
    )
}