import React from 'react';
import "./Wind.css";

const Wind = props => {
    return (
        props.weatherData ?
        <div className="wind">
            {props.weatherData.map((station, idx) => {
                let weatherStation = Object.keys(station)[0];
                let windSpeed = Object.values(station)[0]["wind_speed"]["value"];
                if (windSpeed === 0) {
                    return (
                        <div key={idx} className="no-wind">
                            <h2>No Wind!</h2>
                        </div>
                    )
                }
                else {
                    let windDirection = Object.values(station)[0]["wind_direction"]["repr"];
                    if (windDirection === "VRB") {
                        return (
                            <div key={idx} className="wind-variable">
                                <h2>Wind Speed: {windSpeed}kt in variable directions</h2>
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
                                <h2>Wind Speed: {windSpeed}kt from the {windDirection}</h2>
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