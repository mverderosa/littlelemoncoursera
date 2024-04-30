import Person1 from "../assets/person1.png";
import Person2 from "../assets/person2.png";
import Person3 from "../assets/person3.png";
import Person4 from "../assets/person4.png";
import StarImg from "../assets/star.png";

const Testimonials = () => {
    const testimonialData = [
      {
        name: "Alex",
        stars: "4.5",
        image: Person1,
        review: "This is the best Mediterranean food that I've ever had! I've never tried anything like this! Thanks to Mario and Adrian."
      },
      {
        name: "Lucy",
        stars: "5",
        image: Person2,
        review: "I came to Little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here."
      },
      {
        name: "Maria",
        stars: "5",
        image: Person3,
        review: "My family and I enjoyed eating at the restaurant. I will definitely come again next time to try some other delicious meal!"
      },
      {
        name: "Brian",
        stars: "5",
        image: Person4,
        review: "This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!"
      },
    ]
  
    function Testimonial(props) {
        return (
            <div className="review-card">
              <span className="stars">{props.stars}<img src={StarImg} alt="star" className="star" /></span>
              <div className="client-detail">  
                <img src={props.image} alt="customer" className="client" />
                <h5>{props.name}</h5>
              </div>
              <p>"{props.review}"</p>
            </div>
          )
    }

    return(
        <section className="testimonials-section">
          <div className="testimonials-container">
            <div className="testimonials-headline">
            <h2>Testimonials</h2>
            <h4>Read what others have to say about us</h4>
            </div>
            <div className="reviews">
            {testimonialData.map((testimonial) => {
                return (
                <Testimonial
                    key={testimonial.image}
                    {...testimonial}
                />
                )
            })}
            </div>
          </div>
        </section>
    )
}

export default Testimonials