import React from 'react'

const Country = ({country, buttonCountry}) => {
  return (<div> {country.name}&nbsp;
    <button type="submit" onClick={() => buttonCountry(country.name)}> show </button>
    </div>)
}

export default Country
