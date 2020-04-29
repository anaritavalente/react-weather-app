import React from 'react';
import Search from './Search';
import TodayWeather from './TodayWeather';
import Forecast from './Forecast';
import CurrentLocation from './CurrentLocation';
import Units from './Units';

function Weather() {
    return (
        <div className="Weather">
            <div className="row">
                <div className="col-7">
                    <div className="today-block">
                        <h1 className="h1-todayweather"> How is the weather today? </h1>
                        <div className="row">
                            <CurrentLocation />
                            <Search />
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
                <Forecast />
            </div>
        </div>
    );
}
export default Weather;
