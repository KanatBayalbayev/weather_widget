import React from "react";
import "./DisplayWeather.scss";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";
// import sunny from "../../assets/sunny.png";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const DisplayWeather = ({ data, loading}) => {
  const date = new Date(data?.location?.localtime);
  const options = { month: "long", day: "numeric" };
  const yearOptions = { year: "numeric" };
  const dateString = date.toLocaleDateString("en-US", options);
  const year = date.toLocaleDateString("en-US", yearOptions);
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="container">
      {loading ? (
        <BeatLoader
          color={"#123abc"}
          loading={loading}
          css={override}
          size={10}
        />
      ) : (
        <>
          <div className="info-container">
            <h1 className="cityName">{data?.location.name}</h1>
            <h3 className="date">
              {dateString}, {year}
            </h3>
            <h2>{data?.current.condition.text}</h2>
            <img src={data?.current.condition.icon} alt="sunny" />
          </div>
          <div className="weather-container">
            <h1 className="temp">{data?.current["temp_c"]}</h1>
            {/* <h3>{currentTime}</h3> */}
          </div>
        </>
      )}
    </div>
  );
};

export default DisplayWeather;
