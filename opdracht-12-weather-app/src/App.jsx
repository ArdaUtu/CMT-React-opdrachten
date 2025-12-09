import './App.css'
import WeatherInfo from './components/WeatherInfo.jsx'
import { useState, useEffect } from 'react';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Rome");
  const apiKey = "dc76cccbb21b5f7a428dea92f606659f";

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const weatherData = await response.json();
      setWeather(weatherData);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Voer een stad in"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />

      <button onClick={fetchWeather}>
        Zoek
      </button>

  
      <WeatherInfo weather={weather} />
    </div>
  );
}

export default App;
