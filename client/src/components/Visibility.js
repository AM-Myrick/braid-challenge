import React from 'react';

const Visibility = props => {
    return (
        props.weatherData ?
        <div>
            {props.weatherData.map((station, idx) => {
                let weatherStation = Object.keys(station)[0];
                let visibilityConditions = Object.values(station)[0]["visibility"]["value"];
                if (visibilityConditions >= 5) {
                    return (
                        <div key={idx} className="visibility-no-issues">
                            <p>{props.cityDict[weatherStation]} - Visibility is {visibilityConditions}sm.</p>
                        </div>
                    )
                }
                else {
                    return (
                        <div key={idx} className="visibility-issues">
                            <p>{props.cityDict[weatherStation]} - Visibility is {visibilityConditions}sm.</p>
                        </div>
                    )
                }
            })}
        </div>:
        <div>
            <h1>Loading visibility data...</h1>
        </div>
    );
};

export default Visibility;