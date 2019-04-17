import React from 'react';

const CloudCover = props => {
    return (
        props.weatherData ?
        <div>
            {props.weatherData.map(station => {
                let weatherStation = Object.keys(station)[0];
                let cloudConditions = Object.values(station)[0]["clouds"];
                console.log(cloudConditions)
                if (cloudConditions.length === 0) {
                    return (
                        <div className="cloud-cover-no-issues">
                            <p>{props.cityDict[weatherStation]} - Clear Skies!</p>
                        </div>
                    )
                }
                else if (cloudConditions.length > 1) {
                    return (
                        <div className="cloud-cover-issues">
                            <p>{props.cityDict[weatherStation]} - {cloudConditions[0].type} at altitude {cloudConditions[0].altitude} and {cloudConditions[1].type} at altitude {cloudConditions[1].altitude}</p>
                        </div>
                    )
                }
                else {
                    return (
                        <div className="cloud-cover-issues">
                            <p>{props.cityDict[weatherStation]} - {cloudConditions.type} at altitude {cloudConditions.altitude}</p>
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