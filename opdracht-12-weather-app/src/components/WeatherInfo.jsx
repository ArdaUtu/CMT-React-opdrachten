const WeatherInfo = ({ weather }) => {
  return (
    <div>
      {weather ? (
        <section>
          <h1>{weather.name}</h1>
          <p>Temperatuur: {weather.main.temp} °C</p>
          <p>Weer: {weather.weather[0].description}</p>
          <p>Luchtvochtigheid: {weather.main.humidity} %
           <p>wind snelheid: {weather.wind.speed} m/s</p>
          </p>
        </section>
      ) : (
        <p>Het is weer aan het laden</p>
      )}
    </div>
  );
}
export default WeatherInfo;


