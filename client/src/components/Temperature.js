import React from 'react';
import "./Temperature.css";

const Temperature = props => {
    return (
        props.weatherData ?
        <div className="temperature">
            {props.weatherData.map((station, idx) => {
                let temperature = Object.values(station)[0]["temperature"]["value"];
                // converts celcius temperature to fahrenheit
                let fahrenheit = temperature * 1.8 + 32;
                return (
                    <div key={idx} className="temperature-data">
                        <h2>Temperature: {temperature}°C/{Math.ceil(fahrenheit)}°F</h2>
                    </div>
                )
            })}
        </div>:
        <div>
            <h1>Loading temperature data...</h1>
        </div>
    );
};

export default Temperature;