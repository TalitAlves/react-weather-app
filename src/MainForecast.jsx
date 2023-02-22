import React from 'react';
import axios from "axios";
import { useState } from "react";
import FormattedDate from "./FormattedDate"
import TemperatureUnits from './TemperatureUnits';
import WeatherIcon from "./WeatherIcon"
import Forecast5Days from './Forecast5Days';

export default function MainForecast (props){
const[status, setStatus]= useState(false);
const[weatherData, setWeatherData]= useState("");
const [city, setCity] = useState (props.defaultCity);

function search(){
  const apiKey = "8b91fc8da1e02bf608ec0e58160cf792";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
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
    console.log(response);
    setWeatherData({
        temperature: Math.round(response.data.main.temp),
        city: response.data.name,
        weather: response.data.weather[0].main,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        feelsLike: response.data.main.feels_like,
        icon:response.data.weather[0].icon,
        date: new Date(response.data.dt*1000),

    })
    setStatus(true)
}

if (status){
    return(

      <div className="container">
        <div className=" heading tittle">
      Weather Around The World
        </div>
          
        <form className="heading form-seach-city" onSubmit={handleForm}>
            <input
              type="text"
              id="form-city"
              placeholder="Search for your city"
              autoFocus="on"
              onChange={handleCityName}
            />
            <button className="btn btn-primary" type="submit">Search</button>
            <button className="btn btn-primary" id="currentLocation" type="submit">Your location</button>
        </form>
      
            
        <div className="container-forecast">
        <div className="main-weather">
               <div className="box-city-name">
                 {weatherData.city}
               </div>
        
            <div className="box-date">
                 <FormattedDate date={weatherData.date}/>
            </div>
        
        

        <div className="main-icon">
            <WeatherIcon icon={weatherData.icon}/>
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
     <Forecast5Days />
     </div>
      
      
      </div>
      </div>



    )} else {
        search()
        return("Loading")
    }
}