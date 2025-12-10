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
    <div className='text-center space-y-4 mt-10'>
      <input className='border-2 rounded'
        type="text"
        placeholder="Voer een stad in"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <div className='bg-blue-500 text-white px-4 py-2 rounded cursor-pointer w-24 text-center mx-auto hover:bg-white hover:text-blue-50'>
      <button onClick={fetchWeather}>
        Zoek
      </button>
      </div>

  
      <WeatherInfo weather={weather} />
    </div>
  );
}

export default App;
