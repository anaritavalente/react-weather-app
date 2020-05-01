import React from 'react';
import './FormatedCityandTime.css';

function FormatedCityandTime(props) {

    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let weekday = week[props.date.getDay()];
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
    let day = props.date.getDate();
    let month = months[props.date.getMonth()];
    let year = props.date.getFullYear();
    if (minutes < 10) minutes = `0${minutes}`;
    if (hours < 10) hours = `0${hours}`;

    return(
        <div className="FormatedCityandTime">
            <i className="fas fa-map-marker-alt" />
            <p id="city"> {props.cityDefault} </p>
            <p id="time"> {hours}:{minutes}</p>
            <p id="date"> {weekday}, {day} {month} {year}</p>
        </div> 
    );
}

export default FormatedCityandTime;