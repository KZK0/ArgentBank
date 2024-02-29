import './edit.scss';

export const EditName = () => {
    return (
        <section className='editname-section'>
            <div className='editname-bloc'>
                <div className='editname-first'>
                    <h2>Welcome back</h2>
                    <div className='first-row'>
                        <h3>Tony Jarvis</h3>
                        <p>!</p>
                    </div>
                </div>
                <div className='editname-scnd'>
                    <button>
                        Edit Name
                    </button>
                </div>
            </div>
        </section>
    )
}