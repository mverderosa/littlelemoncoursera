import { Link } from 'react-router-dom';
import CheckSvg from '../assets/check.svg';

const ConfirmedBooking = (props) => {
    return (
        <div className="confirmation">
            <div>
                <h2>Thank you !</h2>
                <img src={CheckSvg} alt="check sign" />
                <p className="confirm-msg">Your booking is confirmed</p>
                <p className="reminder">You will get a reminder and a confirmation text on your provided phone number and email.</p>
                <Link to="/"><button>Return to Home</button></Link>
            </div>
        </div>
    )
}

export default ConfirmedBooking
