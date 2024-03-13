import './card.scss';

export const Balance = ({ id, type, balance, available }) => {
    return (
        <div className='balance-bloc'>
            <div key={id} className='balance-card'>
                <div className='card-first'>
                    <p className='first-a'>{type}</p>
                    <p className='first-b'>{balance}</p>
                    <p className='first-c'>{available}</p>
                </div>
                <div className='card-scnd'>
                    <button>
                        View transactions
                    </button>
                </div>
            </div>
        </div>
    )
}