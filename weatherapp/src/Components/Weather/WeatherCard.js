import React, { useEffect, useState } from "react";

const WeatherCard = ({ tempInfo }) => {
  const [ weatherState, setWeatherState ] = useState("");
  const { cel, humidity, pressure, main, name, speed, country, sunset } =
    tempInfo;

  useEffect(() => {
    if (main) {
      switch (main) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-day-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  },[main]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div classname="weatherInfo">
          <div className="temperature">
            <span>{cel}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition"> {main} </div>
            <div className="place">
              {name},{country}
            </div>
          </div>
        </div>

        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} <br />
                sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure}
                <br />
                pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
