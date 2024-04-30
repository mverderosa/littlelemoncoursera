import { Link } from "react-router-dom";
import heroImg from "../assets/hero-img.png";

const Hero = () => {
    return(
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-detail">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant,<br/>
                        focused on traditional <br/>recipes served with a modern
                        twist.
                    </p>
                    <Link to="reservation/"><button>Reserve a table</button></Link>
                </div>
                <div className="hero-img">
                    <img src={heroImg} alt="starter placeholder" />
                </div>
            </div>
        </section>
    )
}

export default Hero