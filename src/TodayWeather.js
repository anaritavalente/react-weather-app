import React from "react";

function TodayWeather() {
    return (
        <div className="TodayWeather">
            <div className="row" id="square1">
                <div className="col-8">
                    <img id="icon" alt="/" />
                    <p id="temp" />
                    <p id="description" />
                </div>
                <div className="col-4">
                    <i className="fas fa-tint" />
                    <span id="humidity" />%
                    <br />
                    <i className="fas fa-wind" />
                    <span id="wind" />
                    km/h
                </div>
            </div>
        </div>
  );
}

export default TodayWeather;