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
                            <p>Clear Skies!</p>
                        </div>
                    )
                }
                else if (cloudConditions.length > 1) {
                    return (
                        <div key={idx} className="cloud-cover-issues">
                            <h1>{props.cityDict[weatherStation]}</h1>
                            <p>{cloudConditions[0].type} at altitude {cloudConditions[0].altitude} and {cloudConditions[1].type} at altitude {cloudConditions[1].altitude}</p>
                        </div>
                    )
                }
                else {
                    return (
                        <div key={idx} className="cloud-cover-issues">
                            <h1>{props.cityDict[weatherStation]}</h1>
                            <p>{cloudConditions.type} at altitude {cloudConditions.altitude}</p>
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