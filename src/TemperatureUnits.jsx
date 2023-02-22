import { useState } from "react";
import React from "react";

export default function TemperatureUnits (props){
 const [unitA, setUnitA]= useState(props.unitA);
 const [unitB, setUnitB] = useState(props.unitB);
 const [temp, setTemp]=useState(props.temp);



 function updateUnitA(event){
    event.preventDefault();
    setTemp(props.temp);
    setUnitB(props.unitB);
    setUnitA(props.unitA);
    
 }

 function updateUnitB(event){
    event.preventDefault();
    setTemp(Math.round(props.temp * 9 / 5) + 32);
    setUnitA("F");
    setUnitB("C");
 }
     return(

        <div>
           <span id="temperature">{temp}</span>
           <a href="/" className="unit-temperature" onClick={updateUnitA}>°{unitA}</a>
           <a href="/" className="unit-temperature" onClick={updateUnitB}>|°{unitB}</a>
           </div>
    )
}