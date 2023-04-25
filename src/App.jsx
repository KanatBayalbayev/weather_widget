import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "./Сomponents/Input/Input";
import DisplayWeather from "./Сomponents/DisplayWeather/DisplayWeather";
import "./App.scss";

const URL = "https://weatherapi-com.p.rapidapi.com/forecast.json";
const options = {
  method: "GET",
  url: URL,
  params: {
    days: "1",
  },
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "84bd127e27msh97824982de541aep1dc7fajsn80e644ca0957",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};
const App = () => {
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("London");
  const [weatherObject, setWeatherObject] = useState("");
  const handleGetCity = (city) => {
    setCity(city);
  };
  useEffect(() => {
    axios
      .get(`${URL}?q=${city}`, options)
      .then((response) => {
        setWeatherObject(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [city]);
  console.log(weatherObject);
  return (
    <div className="widget">
      <Input onGetCity={handleGetCity} />
      <DisplayWeather data={weatherObject} loading={loading} />
    </div>
  );
};

export default App;
