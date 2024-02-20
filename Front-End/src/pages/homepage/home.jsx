import { Header } from '../../components/header/header'
import { Banner } from '../../components/banner/banner'
import { Infos } from '../../components/infos/infos'
import { Footer } from '../../components/footer/footer';
import Data from '../../data/data.json';
import './home.scss'


export const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Infos data={Data} />
            <Footer />
        </div>
    )
}