import React, {useState} from 'react';
import axios from 'axios';
import Search from './Search';
import Units from './Units';

import './Weather.css';

export default function Weather(props) {
    const [WeatherData, setWeatherData] = useState({ready: false});

    function handleSubmit(response) {
        console.log(response.data.main.temp);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp, 
            wind: response.data.wind.speed, 
            humidity: response.data.main.humidity, 
            description: response.data.weather[0].description, 
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`});
    }

    if (WeatherData.ready) {
    return (
        <div className="Weather">
            <div className="col-7">
                <div className="today-block">
                    <h1 className="h1-todayweather"> How is the weather today? </h1>
                    <div className="row">
                        <div className="col-5" >
                            <button
                            type="button"
                            className="buttoncurrentcity"
                            id="current-position"
                            >
                            Current Location
                            </button> 
                        </div>
                        <div className="col-7" >
                            <Search />
                        </div>
                    </div>
                    <div className="city_hour_day">
                        <i className="fas fa-map-marker-alt" />
                        <p id="city"> {props.cityDefault} </p>
                        <p id="hour" />
                        <p id="day" />
                    </div>
                    <div className="row" id="square1">
                        <div className="col-8">
                            <img id="icon" alt="/" src={WeatherData.iconUrl}/>
                            <p id="temp"> {Math.round(WeatherData.temperature)} ºC </p>
                            <p id="description">{WeatherData.description}</p>
                        </div>
                        <div className="col-4">
                            <i className="fas fa-tint"/>
                            <span id="humidity" > {WeatherData.humidity} % </span>
                            <br />
                            <i className="fas fa-wind" />
                            <span id="wind"> {Math.round(WeatherData.wind)} m/s </span>
                        </div>
                    </div>
                    <Units />
                </div>
            </div>
        </div>
    );
    }
    else {
        const apiKey = "bbfdbb35ce4efcbcbaa0fc30e630ce66";
        let city = 'London';
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityDefault}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleSubmit);
        return "Loading..."
    }
}

