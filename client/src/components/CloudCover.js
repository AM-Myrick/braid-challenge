import React from 'react';
import "./CloudCover.css";

const CloudCover = props => {
    return (
        props.weatherData ?
        <div className="cloud-cover">
            {props.weatherData.map((station, idx) => {
                console.log(station)
                let weatherStation = Object.keys(station)[0];
                let cloudConditions = Object.values(station)[0]["clouds"];
                if (cloudConditions.length === 0) {
                    return (
                        <div key={idx} className="cloud-cover-no-issues">
                            <h2>{props.cityDict[weatherStation]}</h2>
                            <h2>Clear Skies!</h2>
                        </div>
                    )
                }
                else if (cloudConditions.length > 1) {
                    return (
                        <div key={idx} className="cloud-cover-issues">
                            <h2>{props.cityDict[weatherStation]}</h2>
                            <h2 className="warning">{cloudConditions[0].type} at {cloudConditions[0].altitude}ft<br/>and<br/>{cloudConditions[1].type} at {cloudConditions[1].altitude}ft</h2>
                        </div>
                    )
                }
                else {
                    return (
                        <div key={idx} className="cloud-cover-issues">
                            <h2>{props.cityDict[weatherStation]}</h2>
                            <h2>{cloudConditions.type} at {cloudConditions.altitude}ft</h2>
                        </div>
                    )
                }
            })}
        </div>:
        <div>
            <h2>Loading cloud cover data...</h2>
        </div>
    );
};

export default CloudCover;