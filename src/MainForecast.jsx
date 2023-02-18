import React from 'react';
import calendar from "./img/calendar.svg"

export default function mainForecast (){
    return(
        <div className="container-forecast">
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
           <div/>
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


        <div className=" main-weather five-days-forecast">

        <div className="image">
                <img src={calendar} alt="calendar" />
            </div>



        <div class="forecast" id="forecast">
            <div className="day">
           <div class="day" id="weekDay">Tus</div>
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
              <span class="max" id="max">15</span> <span>º </span>
              <span class="min" id="min">12</span> <span>º</span>
            </div>
            </div>
            <div className="day">
            <div class="day" id="weekDay">Tus</div>
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
              <span class="max" id="max">15</span> <span>º </span>
              <span class="min" id="min">12</span> <span>º</span>
            </div>
            </div>


           <div className="day">
            <div class="day" id="weekDay">Tus</div>
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
              <span class="max" id="max">15</span> <span>º </span>
              <span class="min" id="min">12</span> <span>º</span>
            </div>
            </div>


            <div className="day">
            <div class="day" id="weekDay">Tus</div>
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
              <span class="max" id="max">15</span> <span>º </span>
              <span class="min" id="min">12</span> <span>º</span>
            </div>
            </div>


            <div className="day">
            <div class="day" id="weekDay">Tus</div>
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
              <span class="max" id="max">15</span> <span>º </span>
              <span class="min" id="min">12</span> <span>º</span>
            </div>
            </div> 
      </div>
      </div>
      </div>




    )
}