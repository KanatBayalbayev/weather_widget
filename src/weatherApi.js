import axios from "axios";

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

const getData = async (city) => {
  const { data } = await axios.get(`${URL}?q=${city}`, options);
  return data;
};

export default getData;
