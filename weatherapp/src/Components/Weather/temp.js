import React, { useEffect, useState } from "react";
import "./style.css";
import WeatherCard from "./WeatherCard.js";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("Butwal");
  const [tempInfo, settempInfo] = useState("");

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&unitmetrics&appid=688ff699027d09f7e5461bdbc80b87a7`;

      let res = await fetch(url);
      let data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      let cel=Math.floor((temp-273.15)); 

      const myNewWeatherInfo = {
        cel,
        humidity,
        pressure,
        main,
        name,
        speed,
        country,
        sunset,
      };
      settempInfo(myNewWeatherInfo);
      console.log(data);

      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search.."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>

      <WeatherCard tempInfo={tempInfo} />
    </>
  );
};

export default Temp;
