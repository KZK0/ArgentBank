import './infos.scss';

export const Infos = ({ data }) => {
    return (
        <section className='infos-section'>
            <div className='infos-bloc'>
                {data.map((item) => (
                    <div key={item.id} className='infos-card'>
                        <div className='infos-img'>
                            <img src={item.cover} alt={item.alt} />
                        </div>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}