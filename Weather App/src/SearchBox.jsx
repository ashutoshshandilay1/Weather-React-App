import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ update }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const apiurl = "https://api.openweathermap.org/data/2.5/weather";
  const apikey = "292813b8afa6e988d735d82a2cdfbef3";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${apiurl}?q=${city}&appid=${apikey}&units=metric `
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        pressure: jsonResponse.main.pressure,
        windSpeed: jsonResponse.wind.speed,
        windDirection: jsonResponse.wind.deg,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city); // Log the actual value of the city
      setCity("");
      let info = await getWeatherInfo();
      update(info);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="searchbox">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter City Name"
          color="error"
          required
          id="city"
          value={city}
          onChange={handleChange}
        />
        <br /> <br />
        <Button variant="outlined" color="error" type="submit" className="kk">
          Search
        </Button>
        {error && <p style={{color: "red"}}>No Such Place Exist in our database</p>}
      </form>
    </div>
  );
}
