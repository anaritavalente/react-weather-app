import React, {useState} from 'react';
import WeatherIcon from './WeatherIcon';

import './WeatherInfo.css';

function WeatherInfo(props){

    const [unit, setUnit] = useState(props.unit);
    
    function convertToFahrenheit(){
        let fahrenheit = (props.info.temperature* 9/5)+32;
        return fahrenheit;
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
   
    if (unit === "celsius"){
        return(
            <div className="WeatherInfo" >
                <div className="row" id="rectangle">
                    <div className="col-3">
                        <WeatherIcon iconCode={props.info.icon}/> 
                    </div>   
                    <div className="col-5">
                        <p id="temp">{Math.round(props.info.temperature)} ºC </p>
                    </div>
                    <div className="col-4">
                        <i className="fas fa-tint"/>
                        <span id="humidity">{props.info.humidity} % </span>
                        <br />
                        <i className="fas fa-wind" />
                        <span id="wind">{Math.round(props.info.wind)} m/s </span>
                    </div>
                    <p id="description">{props.info.description}</p>
                </div>
                <div className="Units">
                    <a href="/" id="celsius" className="active" onClick={showCelsius}>ºC</a> | <a href="/" id="fahrenheit" onClick={showFahrenheit}>F</a>
                </div>
            </div>
        );
    }
    else {
        return(
            <div className="WeatherInfo" >
                <div className="row" id="rectangle">
                    <div className="col-3">
                        <WeatherIcon iconCode={props.info.icon}/> 
                    </div>   
                    <div className="col-5">
                        <p id="temp">{Math.round(convertToFahrenheit())} F </p>
                    </div>
                    <div className="col-4">
                        <i className="fas fa-tint"/>
                        <span id="humidity">{props.info.humidity} % </span>
                        <br />
                        <i className="fas fa-wind"/>
                        <span id="wind">{Math.round(props.info.wind)} m/s </span>
                    </div>
                    <p id="description">{props.info.description}</p>
                </div>
                <div className="Units">
                    <a href="/" id="celsius" onClick={showCelsius}>ºC</a> | <a href="/" id="fahrenheit" className="active" onClick={showFahrenheit}>F</a>
                </div>
            </div>
        );
    }
}

export default WeatherInfo;
    