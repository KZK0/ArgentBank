import './card.scss';

export const Balance = ({ data }) => {
    return (
        <section className='balance-section'>
            <div className='balance-bloc'>
                {data.map((item) => (
                    <div key={item.id} className='balance-card'>
                        <div className='card-first'>
                            <p className='first-a'>{item.type}</p>
                            <p className='first-b'>{item.balance}</p>
                            <p className='first-c'>{item.available}</p>
                        </div>
                        <div className='card-scnd'>
                            <button>
                                View transactions
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}