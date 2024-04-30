import { Link } from "react-router-dom";
import FooterLogo from "../assets/FooterLogo.png";

const Footer = () => {
    return(
        <footer>
            <img src={FooterLogo}></img>
            <div className="footer-wrapper">
                <div className="about">
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/menu"><li>Menu</li></Link>
                        <Link to="/reservation"><li>Reservation</li></Link>
                        <Link to="/order-online"><li>Order Online</li></Link>
                        <Link to="/login"><li>Login</li></Link>
                    </ul>
                </div>
                <div className="contact">
                    <h4>Contact</h4>
                    <ul>
                        <li>123 Ford Blvd, Chicago, IL, 60618</li>
                        <li>+1(123)456-7890</li>
                        <li>info@littlelemon.com</li>
                    </ul>
                </div>
                <div className="social">
                    <h4>Socials</h4>
                    <ul>
                        <li><a href="https://www.instagram.com/">Instagram</a></li>
                        <li><a href="https://www.facebook.com/">Facebook</a></li>
                        <li><a href="https://twitter.com/?lang=en">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer