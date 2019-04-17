import React from 'react';

const CloudCover = props => {
    console.log(props)
    return (
        <div>
            {props.weatherData.map(station => {
                <div className="cloud-cover-issues">
                </div>
            })}
        </div>
    );
};

export default CloudCover;