import React from "react";

export default function heading (){
 return(
    
    <div>
    <div className=" heading tittle">
    <h1>Weather Around The World</h1>
    </div>
        
        <form className="heading form-seach-city" id="searching">
          <input
            type="text"
            id="form-city"
            placeholder="Search for your city"
          />
          <button className="btn btn-primary" type="submit">Search</button>
          <button className="btn btn-primary" id="currentLocation" type="submit">Your location</button>
        </form>
      </div>
      
    
 )

}