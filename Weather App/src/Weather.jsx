import React, { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';

export default function Weather() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Muzaffarpur",
        humidity: 14,
        pressure: 1008,
        temp: 35.35,
        tempMax: 35.35,
        tempMin: 35.35,
        weather: "clear sky",
        windDirection: 283,
        windSpeed: 6.74,
    });
    let updateinfo =  (result) => {
        setWeatherInfo(result);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App</h2>
            <SearchBox update = {updateinfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}
