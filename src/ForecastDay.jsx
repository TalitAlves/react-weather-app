import React from "react"


export default function ForecastDay (props){

function date(){
    let date = new Date(props.data.time*1000);
    let day = date.getDay();
    let weekDay = ["Sun", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat"]
    return weekDay[day];
    
}
    return(
        <div className="day">
        <div>
        {date()}
        </div>                  
        <div className="forecast-icon">
        <img src={props.data.condition.icon_url} alt="" />
        </div>

        <div id="forecast-description">{props.data.condition.description}</div>
        <div>
          <span className="max" id="max">{Math.round(props.data.temperature.maximum)}º</span> {""}
          <span className="min" id="min">{Math.round(props.data.temperature.minimum)}º</span>
        </div>
        </div>
    )
}