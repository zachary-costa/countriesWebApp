import React, { useState, useEffect } from 'react'
import CountryList from './components/CountryList'
import axios from 'axios'

const App = () => {
  const [countryList, setCountryList] = useState([])
  const [country, setNewCountry] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fufilled')
        setCountryList(response.data)
      })
  }, [])


  const handleCountryChange = (event) => {
    //console.log(event.target.value)
    setNewCountry(event.target.value)
  }

  function buttonCountry(country) {
    setNewCountry(country)
  }

  //console.log(countryList)


  return (
    <div>
      <form>
      find countries
      <input value={country} onChange={handleCountryChange}/>
      </form>
      <div>
        <CountryList countries={countryList} country={country} buttonCountry={buttonCountry}/>
      </div>
    </div>
  )
}

export default App;
