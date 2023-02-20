import React from "react";

export default function FormattedDate(props){
    let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = props.date.getDate()
    let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
    let month =monthName[props.date.getMonth()];
    let day = dayName[props.date.getDay()];
    let hour = props.date.getHours();
    let minutes = props.date.getMinutes();
    if (minutes <10){
            minutes = `0${minutes}`
    }
    if(hour<10){
        hour = `0+${hour}`
    }

    return(
        <div>
            {day}, {date} of {month}
            <div>Last update: {hour}:{minutes}</div>
        </div>
    )
}