import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';



export default function WeatherIcon(props){
  const iconMapping={
     "01d":"CLEAR_DAY",
     "01n":"CLEAR_NIGHT",
     "02d":"PARTLY_CLOUDY_DAY",
     "02n":"PARTLY_CLOUDY_NIGHT",
     "03d":"CLOUDY",
     "03n":"CLOUDY",
     "04d":"PARTLY_CLOUDY_DAY",
     "04n":"PARTLY_CLOUDY_NIGHT",
     "09d":"RAIN",
     "09n":"RAIN",
     "10d":"RAIN",
     "10n":"RAIN",
     "11d":"RAIN",
     "11n":"RAIN",
     "13d":"SNOW",
     "13n":"SNOW",
     "50d":"FOG",
     "50n":"FOG",


  } ;    
    
     return(
          <div className="main-icon">
               <ReactAnimatedWeather
               icon={iconMapping[props.icon]}
               color={'black'}
               size={50}
               animate={true}
                 />
          </div>
     )

}       

     
     
    