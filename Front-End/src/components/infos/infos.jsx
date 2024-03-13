import './infos.scss';

export const Infos = ({ id, cover, alt, title, desc }) => {
    return (
        <div className='infos-bloc'>
            <div key={id} className='infos-card'>
                <div className='infos-img'>
                    <img src={cover} alt={alt} />
                </div>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}