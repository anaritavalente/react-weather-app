import React from "react";
import './Search.css';

export default function Search(){
    return(
        <div className="Search">
            <form>
                <input
                type="text"
                placeholder="Enter a city here"
                className="entercity"
                autoComplete="off"
                id="city-input"
                />
                <input type="submit" value="Search" className="buttonsearch" />
            </form>
        </div>
    );
}