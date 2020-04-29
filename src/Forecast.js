import React from "react";

function Forecast(){
    return (
        <div className="Forecast">
            <div className="col-5">
                <div className="row nextdays-block">
                    <h1 className="h1-nextdaysweather">Next days</h1>
                    <div className="col-7">
                        <p id="day1" />
                        <p className="forecast">
                            <span id="max1" />
                            <span>|</span>
                            <span id="min1" />
                        </p>
                
                        <p id="day2" />
                        <p className="forecast">
                            <span id="max2" />
                            <span>|</span>
                            <span id="min2" />
                        </p>
                
                        <p id="day3" />
                        <p className="forecast">
                            <span id="max3" />
                            <span>|</span>
                            <span id="min3" />
                        </p>
                
                        <p id="day4" />
                        <p className="forecast">
                            <span id="max4" />
                            <span>|</span>
                            <span id="min4" />
                        </p>
                
                        <p id="day5" />
                        <p className="forecast">
                            <span id="max5" />
                            <span>|</span>
                            <span id="min5" />
                        </p>
                
                        <p id="day6" />
                        <p className="forecast">
                            <span id="max6" />
                            <span>|</span>
                            <span id="min6" />
                        </p>
                    </div>
                    <div className="col-5">
                        <div className="row">
                            <img id="icon1" alt="/" />
                        </div>
                        <div className="row">
                            <img id="icon2" alt="/" />
                        </div>
                        <div className="row">
                            <img id="icon3" alt="/" />
                        </div>
                        <div className="row">
                            <img id="icon4" alt="/" />
                        </div>
                        <div className="row">
                            <img id="icon5" alt="/" />
                        </div>
                        <div className="row">
                            <img id="icon6" alt="/" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
export default Forecast;