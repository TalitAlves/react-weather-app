import React  from 'react';
import axios from "axios";
import { useState } from "react";
import FormattedDate from "./FormattedDate"
import TemperatureUnits from './TemperatureUnits';
import Forecast5Days from './Forecast5Days';

export default function MainForecast (props){
const[status, setStatus]= useState(false);
const[weatherData, setWeatherData]= useState("");
const [city, setCity] = useState (props.defaultCity);


function search(){
  const apiKey = "40430ba55fc1o6890ct12a8363f6d64d";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metrics`
  axios.get(apiURL).then(handleResponse);

}

    function handleForm(event, props){
       event.preventDefault() ;
       search()

    }

    function handleCityName(event){
        setCity(event.target.value);
    }

function handleResponse(response){
    setWeatherData({
        coordinates: response.data.coordinates,
        temperature: Math.round(response.data.temperature.current),
        city: response.data.city,
        weather: response.data.condition.description,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        feelsLike: response.data.temperature.feels_like,
        icon:response.data.condition.icon_url,
        date: new Date(response.data.time*1000),

    })
    setStatus(true)
    console.log(response)
    
}

if (status){
    return(

      <div className="container">
      <div className="heading">
        <div className="tittle">
        Weather Around The World
        </div>
          
        <form className="form-search-city" onSubmit={handleForm}>
            <input
              type="text"
              id="form-city"
              placeholder="Search for your city"
              autoFocus="on"
              onChange={handleCityName}
            />
            <button className="btn btn-primary" type="submit">Search</button>
            </form>
        </div>
            
      <div className="container-forecast">
          <div className="main-weather">
               <div className="box-city-name">
                 {weatherData.city}
               </div>
        
            <div className="box-date">
                 <FormattedDate date={weatherData.date}/>
            </div>     

        <div className="main-icon">
           <img src={weatherData.icon} alt="" />
           <TemperatureUnits temp={weatherData.temperature} unitA={"C"} unitB={"F"}/>
        </div>
         <div id="description">{weatherData.weather}</div>
       
       <div className=" box-weather-details">
         <div>Real Feel: {Math.round(weatherData.feelsLike)}ºC</div>
         <div>Humidity: {weatherData.humidity}%</div>
         <div>Wind:{Math.round(weatherData.wind)}km/h </div>
       </div>    
     </div>
     
         
     <div className=" main-weather five-days-forecast">
     <Forecast5Days coordinates={weatherData.coordinates} />
      
     </div>     
      </div>
   </div>



    )} else {
        search()
        return("Loading")
    }
}