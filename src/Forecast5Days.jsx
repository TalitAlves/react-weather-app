import React from "react";
import calendar from "./img/calendar.svg"

export default function Forecast5Days (){
    return (
      <div>

      <div className="calendar-image">
              <img src={calendar} alt="calendar" />
          </div>



      <div className="forecast" id="forecast">
          <div className="day">
         <div className="day" id="weekDay">Tus</div>
          <span id="temperature5Days">15</span><span>ºC</span>
          <div>
            <img
              id="icon5Days"
              src={`/`}
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
    )
}