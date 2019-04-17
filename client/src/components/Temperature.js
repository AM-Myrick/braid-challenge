import React from 'react';

const Temperature = props => {
    return (
        props.weatherData ?
        <div>
            {props.weatherData.map((station, idx) => {
                let weatherStation = Object.keys(station)[0];
                let temperature = Object.values(station)[0]["temperature"]["value"];
                let fahrenheit = temperature * 1.8 + 32;
                return (
                    <div key={idx} className="temperature">
                        <p>{props.cityDict[weatherStation]} - {temperature}°C/{Math.ceil(fahrenheit)}°F</p>
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