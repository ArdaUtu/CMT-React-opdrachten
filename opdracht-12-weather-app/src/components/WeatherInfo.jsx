const WeatherInfo = ({ weather }) => {
  return (
    <div>
      {weather ? (
        <section className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 inline-block text-left">
          <h1>{weather.name}</h1>
          <p>Temperatuur: {Math.floor(weather.main.temp)} °C</p>
          <p>Gevoelstemperatuur: {Math.floor(weather.main.feels_like)} °C</p>
          <p>Luchtvochtigheid: {weather.main.humidity} %
           <p>wind snelheid: {Math.floor(weather.wind.speed)} m/s</p>
          </p>
        </section>
      ) : (
        <p>Het is weer aan het laden</p>
      )}
    </div>
  );
}
export default WeatherInfo;


