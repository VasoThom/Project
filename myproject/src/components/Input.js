import React from "react";

export default function Input() {
  const data = (d) => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="search a location:"
          />
        </div>
        <div className="location-box">
          <div className="location">Grecce, GR</div>
          <div className="date">{data(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temperature"> 15 °C </div>
          <div className="weather"> Sunny day </div>
        </div>
      </main>
    </div>
  );
}
