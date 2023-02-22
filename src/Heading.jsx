import { useState } from "react";
import React from "react";

export default function Heading (props){

const [city, setCity] = useState ("");

    function handleForm(event, props){
       event.preventDefault() ;
       alert(city);
    }

    function handleCityName(event){
        setCity(event.target.value);
    }

      

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
      </div>
      
    
 )

}