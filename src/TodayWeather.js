import React, {useState} from 'react';
import axios from 'axios';

import CityandTime from './CityandTime';
import WeatherInfo from './WeatherInfo';

import './TodayWeather.css';

function TodayWeather(props) {
    const [city, setCity]= useState(props.cityDefault);
    const [WeatherData, setWeatherData] = useState({ready: false});
    const apiKey = "bbfdbb35ce4efcbcbaa0fc30e630ce66";
    
    
    
    function getWeather(response) {
        
        setWeatherData({
            ready: true,
            city: response.data.name,
            temperature: response.data.main.temp, 
            wind: response.data.wind.speed, 
            humidity: response.data.main.humidity, 
            description: response.data.weather[0].description, 
            icon: response.data.weather[0].icon,
            timezone: response.data.timezone
        });
    }

    function getMyLocation(position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        axios.get(url).then(getWeather);
    }
    
    function getPosition() {
        navigator.geolocation.getCurrentPosition(getMyLocation);
    }

    function search(event){
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(getWeather);
    }
    
    function handleSubmit(event){
        event.preventDefault();
        search();
    }
    
    function input(event){
        setCity(event.target.value);
    }

    if (WeatherData.ready) {
    return (
        <div className="TodayWeather">
            <div className="col-7">
                <div className="today-block">
                    <h1 className="h1-todayweather"> How is the weather today? </h1>
                    <div className="row">
                        <div className="col-5" >
                            <button 
                            type="button"
                            className="buttoncurrentcity"
                            id="current-position"
                            onClick={getPosition}>
                            Current Location
                            </button> 
                        </div>
                        <div className="col-7" >
                            <form onSubmit={handleSubmit}>
                                <input
                                type="text"
                                placeholder="Enter a city here"
                                className="entercity"
                                autoComplete="off"
                                id="city-input"
                                onChange={input}/>
                                <input type="submit" value="Search" className="buttonsearch" />
                            </form>
                        </div>
                    </div>
                    <CityandTime info={WeatherData}/>
                    <WeatherInfo info={WeatherData} unit="celsius"/>
                </div>
            </div>
        </div>
    );
    }
    else {
        search();
        return "Loading..."
    }
}

export default TodayWeather;