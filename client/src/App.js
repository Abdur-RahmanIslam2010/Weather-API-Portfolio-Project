import './App.css';
import WeatherCard from './Components/WeatherCard/Weather';
import React, { useState, useEffect } from 'react';

function App() {

  const [day, setDay] = useState([]);
  const [wmo, setWmo] = useState([]);

  useEffect(() => {
    async function fetchWeatherData() {
      const res = await fetch("http://localhost:8080/api");
      const data = await res.json();
      
      const dailyData = data.daily;

      setDay(dailyData.time);
      setWmo(dailyData.weather_code);
    }

    fetchWeatherData();
  }, []);

  const wmoCodes = {
    "Clear": [0, "clear"],
    "Mostly Clear": [1, 2, 3, "partially_cloudy"],
    "Foggy": [45, 48, "foggy"],
    "Drizzle": [51, 53, 55, "drizzle"],
    "Freezing Drizzle": [56, 57, "drizzle"],
    "Rainy": [61, 63, 65, "rain"],
    "Freezing Rain": [66, 67, "rain"],
    "Snowy": [71, 73, 75, "snow"],
    "Snow grains": [77, "snow"],
    "Rain Showers": [80, 81, 82, "shower"],
    "Snow Showers": [85, 86, "snow_shower"],
    "Thunderstorm": [95, "thunderstorm"],
    "Thunderstorm (with hail)": [96, 99, "thunderstorm"]
  };
  
  function getWeatherLabel(code) {
    for (const [label, codes] of Object.entries(wmoCodes)) {
      if (codes.includes(code)) {return label};
    }
    return "Unknown Weather";
  };

  function getWeatherIcon(code) {
    for (const [ _, codes ] of Object.entries(wmoCodes)) {
      if (codes.includes(code)) {return codes.at(-1)};
    }
  }

  return (
    <div className="App">
      <div className='weather-cards-container'>
        {day.map((d, i) => (
          <WeatherCard key={i} date={d} weather={getWeatherLabel(wmo[i])} icon={getWeatherIcon(wmo[i])} />
        ))}

      </div>
    </div>
  );
}

export default App;
