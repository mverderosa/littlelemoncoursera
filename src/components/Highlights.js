import { Link } from "react-router-dom";
import BruschettaImg from "../assets/bruschetta.png";
import LemonImg from "../assets/lemon-dessert.png";
import SaladImg from "../assets/greek-salad.png";
import DeliverySvg from "../assets/delivery.svg";

const Highlights = () => {
    const HighlightCard = (props) => {
        return (
            <div className="highlight-item">
                <div className="highlight-item-img-container">
                    <img src={props.image} alt="food" />
                </div>
                <div className="item-wrapper">
                    <div className="item-price">
                        <h4>{props.title}</h4>
                        <h5>{props.price}</h5>
                    </div>
                    <p>{props.description}</p>
                    <a href="/order-online">
                      <button>
                          Order a delivery
                          <img src={DeliverySvg} alt="delivery" />
                      </button>
                    </a>
                </div>
            </div>
        )
    }

    const items = [
        {
          image: SaladImg,
          title: "Greek Salad",
          price: "$12.99",
          description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        },
        {
          image: BruschettaImg,
          title: "Bruschetta",
          price: "$5.99",
          description: "Our Bruschetta is made from griller bread that has been smeared with garlic and seasoned with salt and olive oil."
        },
        {
          image: LemonImg,
          title: "Lemon Dessert",
          price: "$5.00",
          description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        }
    ]

    return(
        <section className="highlight-section">
          <div className="highlight-container">
            <div className="highlight-banner">
              <h1>This weeks specials!</h1>
              <Link to="/menu"><button>Online Menu</button></Link>
            </div>
            <div className="highlight-card">
              {items.map(item => {
                return (
                  <HighlightCard
                    key={item.title}
                    {...item}
                  />
                )
              })}
            </div>
          </div>
      </section>
    )
}

export default Highlights