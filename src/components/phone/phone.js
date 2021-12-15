import './phone.css';

function Phone(props) {
    return (
        <div className='center'>
            <div className='iphone-mobile'>
                <div className='notch-mobile'></div>
                <div className='phone-cover' id={props.id}>
                    <img src={props.src} alt={props.src} className={props.class} />
                </div>
                <div className='frame-mobile'></div>
            </div>
        </div>
    )
}

export default Phone;