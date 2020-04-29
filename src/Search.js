import React from "react";

function Search(){
    return(
        <div className="Search">
            <div className="col-7">
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
        </div>
    );
}

export default Search;