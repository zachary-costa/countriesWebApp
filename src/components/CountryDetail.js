import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Weather from './Weather'

const CountryDetail = ({country}) => {
  const [capitalWeather, setCapitalWeather] = useState([])
  const [weatherGathered, setWeatherGathered] = useState(false)
  const apikey = process.env.REACT_APP_API_KEY
  useEffect(() => {
    console.log('weather effect')
    axios
      .get('http://api.weatherstack.com/current?access_key=' + apikey + '&query=' + country[0].capital)
      .then(response => {
        console.log('weather promise fulfilled')
        setCapitalWeather(response.data)
        setWeatherGathered(true)
      })
  }, [])

  const renderWeather = weatherGathered
  ? <Weather weather={capitalWeather}/>
  : "Loading..."


  return (
    <div>
      <h2> {country[0].name} </h2>
        <div>
          capital {country[0].capital}
        </div>
        <div>
          population {country[0].population}
        </div>
      <h3> languages </h3>
      <ul>
        {country[0].languages.map(lang => <li key={lang.name}>{lang.name}</li>)} <br/>
      </ul>
      <div>
          <img src={country[0].flag} width='100' height='100' alt='country flag'/>
      </div>
      <h3> Weather in {country[0].capital}</h3>
      <div>
        {renderWeather}
      </div>
    </div>


  )
}

export default CountryDetail
