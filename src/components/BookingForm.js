import { useState } from "react";
import TimeSvg from "../assets/time.svg";
import ContactSvg from "../assets/contact.svg";

const BookingForm = (props) => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;

    const [numOfGuests, setNumOfGuets] = useState(1);

    const [formData, setFormData] = useState({
        date: "",
        time: "",
        occasion: "",
        fullname: "",
        email: "",
        phone: "",
        isTouched: false,
    })

    const clearForm = () => {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                date: "",
                time: "",
                occasion: "",
                fullname: "",
                email: "",
                phone: "",
                isTouched: false,
            }
        })
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const getIsFormValid = () => {
        return (
            formData.date &&
            formData.time &&
            formData.fullname && formData.fullname.trim().length > 1 &&
            formData.email &&
            formData.phone && formData.phone.length > 10
        )
    }

    function handleSubmit(e) {
        e.preventDefault();
        clearForm();
        props.submitForm(e);
    }

    return (
        <div className="reservation-form">
            <form onSubmit={handleSubmit}>
                <div className="form-title">
                    <img src={TimeSvg} alt="time"/>
                    <h2>Reserve Table</h2>
                </div>
                <label htmlFor="date">Choose a date<sup>*</sup></label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    min={today}
                    value={formData.date}
                    onBlur={() => setFormData({ ...formData, isTouched: true })}
                    onChange={handleChange}
                />
                {formData.isTouched && formData.date.trim().length < 3 ? <div className="field-error">Date not valid. Please select a date</div> : null}
                <label htmlFor="time">Choose a time<sup>*</sup></label>
                <select
                    name="time"
                    id="time"
                    value={formData.time}
                    onBlur={() => setFormData({ ...formData, isTouched: true })}
                    onChange={handleChange}
                >
                    <option value="">Select a time</option>
                    {props.availableTimes?.map((availableTime) => { return <option key={availableTime}>{availableTime}</option> })}
                </select>
                {formData.isTouched && formData.time.trim().length < 3 ? <div className="field-error">Date not valid. Please select a date</div> : null}
                <div className="num-of-guests">
                    <label>Number of guests</label>
                    <div className="num">
                        <span onClick={() => numOfGuests > 1 ? setNumOfGuets(numOfGuests - 1) : null}>-</span>
                        <h5>{numOfGuests}</h5>
                        <span onClick={() => numOfGuests < 10 ? setNumOfGuets(numOfGuests + 1) : null}>+</span>
                    </div>
                </div>
                <label htmlFor="occasion">Occasion</label>
                <select
                    name="occasion"
                    id="occasion"
                    value={formData.occasion}
                    onBlur={() => setFormData({ ...formData, isTouched: true })}
                    onChange={handleChange}
                >
                    <option value="">-</option>
                    {props.availableOccasion?.map((availableOccasion) => { return <option key={availableOccasion}>{availableOccasion}</option> })}
                </select>
                <div className="form-title">
                    <img src={ContactSvg} alt="contact"/>
                    <h2>Contact Info</h2>
                </div>
                <label htmlFor="fullname">Full Name<sup>*</sup></label>
                <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    value={formData.fullname}
                    onBlur={() => setFormData({ ...formData, isTouched: true })}
                    onChange={handleChange}
                />
                {formData.isTouched && formData.fullname.trim().length < 2 ? <div className="field-error">Please enter a valid name</div> : null}
                <label htmlFor="email">Email<sup>*</sup></label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onBlur={() => setFormData({ ...formData, isTouched: true })}
                    onChange={handleChange}
                />
                {formData.isTouched && formData.email.trim().length < 8 ? <div className="field-error">Please enter a valid email</div> : null}
                <label htmlFor="phone">Phone Number<sup>*</sup></label>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onBlur={() => setFormData({ ...formData, isTouched: true })}
                    onChange={handleChange}
                    pattern="[0-9]{10,11}"
                />
                {formData.isTouched && formData.phone.trim().length < 10 ? <div className="field-error">Please enter a valid number</div> : null}
                <button aria-label='On Click' type="submit" className="submit-button" disabled={!getIsFormValid()}>Confirm Booking</button>
            </form>
        </div>
    )
}

export default BookingForm