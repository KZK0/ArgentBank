import { useEffect } from 'react';
import { Header } from '../../components/header/header'
import { Banner } from '../../components/banner/banner'
import { Infos } from '../../components/infos/infos'
import { Footer } from '../../components/footer/footer';
import Data from '../../data/data.json';
import './home.scss'


export const Home = () => {

    useEffect(() => {
        document.title = "ArgentBank - Home";
    }, []);

    return (
        <div className='section-homepage'>
            <Header />
            <Banner />
            <div className='bloc-card-infos'>
                {
                    Data.map((item) => {
                        return <Infos
                            key={item.id}
                            cover={item.cover}
                            alt={item.alt}
                            title={item.title}
                            desc={item.desc}
                        />
                    })
                }
            </div>
            <Footer />
        </div>
    )
}