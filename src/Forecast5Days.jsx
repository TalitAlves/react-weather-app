import React from "react";
import calendar from "./img/calendar.svg"
import axios from "axios";
import { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";

export default function Forecast5Days (props){

const [status, setStatus] = useState(false);
const [forecast, setForecast]= useState("");

useEffect(()=> {
  setStatus(false)
},[props.coordinates] );

  
function showForecast(response){
    setForecast(response.data.daily)
    setStatus(true)
}


if(status){

  console.log(forecast)

    return (
      <div>
        <div className="calendar-image">
              <img src={calendar} alt="calendar" />
          </div>

          <div className="forecast" id="forecast"> 
              {forecast.map(function(dailyForecast, index){
                  if(index<5){
                     return ( 
                      <ForecastDay data={dailyForecast}/>
                    );
          }
        })}
       
       </div>       
        
    </div>

    )}else{
      let apiKey = "40430ba55fc1o6890ct12a8363f6d64d"
      let lon = props.coordinates.longitude
      let lat = props.coordinates.latitude
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`
      axios.get(apiUrl).then(showForecast)
      console.log(lon, lat)
      return ("loading")
    }
}