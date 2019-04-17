import React from 'react';
import "./CloudCover.css";

const CloudCover = props => {
    return (
        props.weatherData ?
        <div className="cloud-cover">
            {props.weatherData.map((station, idx) => {
                let weatherStation = Object.keys(station)[0];
                let cloudConditions = Object.values(station)[0]["clouds"];
                console.log(station)
                if (cloudConditions.length === 0) {
                    return (
                        <div key={idx} className="cloud-cover-no-issues">
                            <h1>{props.cityDict[weatherStation]}</h1>
                            <h2>Clear Skies!</h2>
                        </div>
                    )
                }
                else if (cloudConditions.length > 1) {
                    return (
                        <div key={idx} className="cloud-cover-issues">
                            <h1>{props.cityDict[weatherStation]}</h1>
                            <h2>{cloudConditions[0].type} at altitude {cloudConditions[0].altitude} and {cloudConditions[1].type} at altitude {cloudConditions[1].altitude}</h2>
                        </div>
                    )
                }
                else {
                    return (
                        <div key={idx} className="cloud-cover-issues">
                            <h1>{props.cityDict[weatherStation]}</h1>
                            <h2>{cloudConditions.type} at altitude {cloudConditions.altitude}</h2>
                        </div>
                    )
                }
            })}
        </div>:
        <div>
            <h1>Loading cloud cover data...</h1>
        </div>
    );
};

export default CloudCover;