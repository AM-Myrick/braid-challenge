import React from 'react';
import "./Visibility.css";

const Visibility = props => {
    return (
        props.weatherData ?
        <div className="visibility">
            {props.weatherData.map((station, idx) => {
                let visibilityConditions = Object.values(station)[0]["visibility"]["value"];
                if (visibilityConditions >= 5) {
                    return (
                        <div key={idx} className="visibility-no-issues">
                            <h2>Visibility is {visibilityConditions}sm.</h2>
                        </div>
                    )
                }
                else {
                    return (
                        <div key={idx} className="visibility-issues">
                            <h2 className="warning">Visibility is {visibilityConditions}sm.</h2>
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