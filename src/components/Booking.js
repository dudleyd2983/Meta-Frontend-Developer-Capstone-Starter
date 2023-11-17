import React from 'react';
import BookingForm from './BookingForm';

const Booking = (props) => {
    return (
        <BookingForm avaiLabLeTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.sub}/>
    );
};

export default Booking;