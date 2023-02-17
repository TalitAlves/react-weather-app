import React from 'react';

export default function mainForecast (){
    return(
        <div className="main-weather box-city-forecast">
       
        <div className="box-city-name">
        <div className="city-name" id="city-name">Barcelona</div>
        </div>
        
            <div className="box-date">
            <div className="date" id="actual-date">Sunday - August, 22nd</div>
            <span>Last update:</span>
            <span id="hour-infomation"> 11:51</span>
          </div>
        
    
       <div className="box-actual-weather">
        <div className="main-icon">
           <img
             id="icon"
             src="http://openweathermap.org/img/wn/10d@2x.png"
             alt=""
           />
           <div>
           <span id="temperature"> 28</span>
           <span className="celsius-temperature">ºC</span>
           </div>
         </div>
       

       <div className=" box-weather-details">
         <div className="weather" id="description">Sunny</div>
         <div>Real Feel: <span id="realFeal">30</span><span>ºC</span></div>
         <div>Humidity: <span id="humidity"> 73</span> <span>%</span></div>
         <div>Wind: <span id="wind">15 </span> <span>km/h </span></div>
       </div>
     </div>
     </div>
    )
}