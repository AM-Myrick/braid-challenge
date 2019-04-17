import React from 'react';

const Wind = props => {
    return (
        props.weatherData ?
        <div>
            {props.weatherData.map((station, idx) => {
                let weatherStation = Object.keys(station)[0];
                let windSpeed = Object.values(station)[0]["wind_speed"]["value"];
                if (windSpeed === 0) {
                    return (
                        <div key={idx} className="no-wind">
                            <p>{props.cityDict[weatherStation]} - No Wind!</p>
                        </div>
                    )
                }
                else {
                    let windDirection = Object.values(station)[0]["wind_direction"]["repr"];
                    if (windDirection === "VRB") {
                        return (
                            <div key={idx} className="wind-issues">
                                <p>{props.cityDict[weatherStation]} - Wind Speed is {windSpeed}kt in variable directions</p>
                            </div>
                        )
                    }
                    else {
                        windDirection = parseInt(windDirection);
                        switch (true) {
                            case windDirection > 0 && windDirection < 90:
                                windDirection = "Northeast";
                                break;
                            case windDirection === 0:
                                windDirection = "North";
                                break;
                            case windDirection === 90:
                                windDirection = "East";
                                break;
                            case windDirection === 180:
                                windDirection = "South";
                                break;
                            case windDirection === 270:
                                windDirection = "West";
                                break;
                            case windDirection > 90 && windDirection < 180:
                                windDirection = "Southeast";
                                break;
                            case windDirection > 180 && windDirection < 270:
                                windDirection = "Southwest";
                                break;
                            case windDirection > 270 && windDirection < 360:
                                windDirection = "Northwest";
                                break;
                            default:
                                break;
                        }
                        return (
                            <div key={idx} className="wind-issues">
                                <p>{props.cityDict[weatherStation]} - Wind Speed is {windSpeed}kt from the {windDirection}</p>
                            </div>
                        )
                    }
                }
            })}
        </div>:
        <div>
            <h1>Loading wind speed & direction data...</h1>
        </div>
    );
};

export default Wind;