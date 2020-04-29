import React from 'react';
import Search from './Search';
import TodayWeather from './TodayWeather';
import Units from './Units';

import './Weather.css';

function Weather() {
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
                        <p id="city" />
                        <p id="hour" />
                        <p id="day" />
                    </div>
                    <TodayWeather />
                    <Units />
                </div>
            </div>
        </div>
    );
}
export default Weather;
