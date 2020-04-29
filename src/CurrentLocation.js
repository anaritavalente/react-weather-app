import React from 'react';

function CurrentLocation(){
    return(
        <div className="CurrentLocation">
            <div className="col-5">
                <button
                type="button"
                className="buttoncurrentcity"
                id="current-position"
                >
                Current Location{" "}
                </button>
            </div>
        </div>
    );
}

export default CurrentLocation;