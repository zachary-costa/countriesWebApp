import React from 'react'
import Country from './Country'
import CountryDetail from './CountryDetail'


const CountryList = ({countries, country, buttonCountry}) => {
  console.log(country.toLowerCase())
  const countryFilter = countries.filter(countries => countries.name.toLowerCase().includes(country.toLowerCase()))
  const countryLength = countryFilter.length
  function RenderSwitch() {
    console.log(countryLength)
      if (countryLength === 1)
        return <CountryDetail country={countryFilter}/>
      else if (countryLength < 11)
        return (countryFilter.map(countries => <Country key={countries.name} country={countries} buttonCountry={buttonCountry}/>))
      else
        return "Too Many Countries to Show, be more specific."
  }

  return (
    <div>
    <RenderSwitch/>
    </div>
  )
}


export default CountryList
