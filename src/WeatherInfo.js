import React from 'react';
import WeatherIcon from './WeatherIcon';

import './WeatherInfo.css';

function WeatherInfo(props){
    return(
        <div className="WeatherInfo" >
            <div className="row" id="rectangle">
                <div className="col-3">
                    <WeatherIcon iconCode= {props.info.icon} /> 
                </div>   
                <div className="col-5">
                    <p id="temp"> {Math.round(props.info.temperature)} ºC </p>
                </div>
                <div className="col-4">
                    <i className="fas fa-tint"/>
                    <span id="humidity" > {props.info.humidity} % </span>
                    <br />
                    <i className="fas fa-wind" />
                    <span id="wind"> {Math.round(props.info.wind)} m/s </span>
                </div>
                <p id="description">{props.info.description}</p>
            </div>
        </div>
    );
}

export default WeatherInfo;
    