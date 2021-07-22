const Weather = ({weather}) => {
  return (
    <div>
    <b>temperature:</b> {weather.current.temperature} Celsius <br/>
    <img src={weather.current.weather_icons[0]} alt='weather icon'/> <br/>
    <b>wind:</b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}
    </div>
  )
}

export default Weather
