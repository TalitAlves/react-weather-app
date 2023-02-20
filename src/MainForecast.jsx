import React from 'react';
import calendar from "./img/calendar.svg"
import axios from "axios";
import { useState } from "react";
import FormattedDate from "./FormattedDate"

export default function MainForecast (){
const[status, setStatus]= useState(false);
const[weatherData, setWeatherData]= useState(null);

function handleResponse(response){
    console.log(response);
    setWeatherData({
        temperature: response.data.main.temp,
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
     
        
        <div className="container-forecast">
        <div className="main-weather box-city-forecast">
       
        <div className="box-city-name">
        <div className="city-name" id="city-name">{weatherData.city}</div>
        </div>
        
            <div className="box-date">
            <div className="date" id="actual-date">
                <FormattedDate date={weatherData.date}/>
                </div>
                </div>
        
    
       <div className="box-actual-weather">
           <div className="main-icon">
           <img
             id="icon"
             src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`}
             alt=""
           />
           <div/>
           <div>
           <span id="temperature"> {Math.round(weatherData.temperature)}</span>
           <span className="celsius-temperature">ºC</span>
           </div>
           
         </div>
         <div className="weather" id="description">{weatherData.weather}</div>
       

       <div className=" box-weather-details">
         <div>Real Feel: <span id="realFeal">{Math.round(weatherData.feelsLike)}</span><span>ºC</span></div>
         <div>Humidity: <span id="humidity"> {weatherData.humidity}</span> <span>%</span></div>
         <div>Wind: <span id="wind">{Math.round(weatherData.wind)} </span> <span>km/h </span></div>
       </div>
     </div>
     </div>


        <div className=" main-weather five-days-forecast">

        <div className="image">
                <img src={calendar} alt="calendar" />
            </div>



        <div className="forecast" id="forecast">
            <div className="day">
           <div className="day" id="weekDay">Tus</div>
            <span id="temperature5Days">15</span><span>ºC</span>
            <div>
              <img
                id="icon5Days"
                src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`}
                alt=""
                width="60px"
              />
            </div>
            <div id="forecast-description">Sunny</div>
            <div>
              <span className="max" id="max">15</span> <span>º </span>
              <span className="min" id="min">12</span> <span>º</span>
            </div>
            </div>
            <div className="day">
            <div className="day" id="weekDay">Tus</div>
            <span id="temperature5Days">15</span><span>ºC</span>
            <div>
              <img
                id="icon5Days"
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                width="60px"
              />
            </div>
            <div id="forecast-description">Sunny</div>
            <div>
              <span className="max" id="max">15</span> <span>º </span>
              <span className="min" id="min">12</span> <span>º</span>
            </div>
            </div>


           <div className="day">
            <div className="day" id="weekDay">Tus</div>
            <span id="temperature5Days">15</span><span>ºC</span>
            <div>
              <img
                id="icon5Days"
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                width="60px"
              />
            </div>
            <div id="forecast-description">Sunny</div>
            <div>
              <span className="max" id="max">15</span> <span>º </span>
              <span className="min" id="min">12</span> <span>º</span>
            </div>
            </div>


            <div className="day">
            <div className="day" id="weekDay">Tus</div>
            <span id="temperature5Days">15</span><span>ºC</span>
            <div>
              <img
                id="icon5Days"
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                width="60px"
              />
            </div>
            <div id="forecast-description">Sunny</div>
            <div>
              <span className="max" id="max">15</span> <span>º </span>
              <span className="min" id="min">12</span> <span>º</span>
            </div>
            </div>


            <div className="day">
            <div className="day" id="weekDay">Tus</div>
            <span id="temperature5Days">15</span><span>ºC</span>
            <div>
              <img
                id="icon5Days"
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                width="60px"
              />
            </div>
            <div id="forecast-description">Sunny</div>
            <div>
              <span className="max" id="max">15</span> <span>º </span>
              <span className="min" id="min">12</span> <span>º</span>
            </div>
            </div> 
      </div>
      </div>
      </div>




    )} else {
        const apiKey = "8b91fc8da1e02bf608ec0e58160cf792";
        let city = "London"
        let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiURL).then(handleResponse);
        return("Loading")
    }
}