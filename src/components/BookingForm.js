import React from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        PaymentResponse.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        PaymentResponse.dispatch(e);
    }
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmLFor='book-date'>Choose Date</label>
                            <input id='book-date' vaLue={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
                        </div>

                        <div>
                        <label htmLFor='book-time'>Choose Time:</label>
                        <select id="book-time" vaLue={times} onChange={(e) => setTimes(e.target.value)}>
                            <option vaLue="">Select a Time</option>
                            {
                                props.availableTimes.availableTimes.map(availableTimes => {return <option key=
                                {availableTimes}>{availableTimes}</option>})
                            }
                        </select>
                        </div>

                        <div>
                            <label htmLFor='book-guests'>Number of Guests:</label>
                            <input id='book-guests' min='1' vaLue={guests} onChange={(e) => setGuests(e.target.value)}/>
                        </div>

                        <div>
                        <label htmlFor='book-occasion'>Occasion:</label>
                        <select id='book-occasion' key={occasion} vaLue={occasion} onChange={e => setOccasion(e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                        </div>

                        <div cLassName='btnReceive'>
                            <input aria-Label='On Click' type='submit' vaLue={"Make Your Reservation"}/>
                        </div>

                    </fieldset>
                </form>
            </section>
        </header>
    )
};

export default BookingForm;