import BookingForm from "../components/BookingForm";

const times = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
]

const occasions = [
    'Birthday',
    'Anniversary',
    'Graduation',
]

const Reservation = (props) => {
    return(
        <>
            <BookingForm 
                availableTimes={times}
                availableOccasion={occasions}
                submitForm={props.submitForm}
            />
        </>
    )
}

export default Reservation