import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Weather() {
  
  const [city, setCity] = useState();
  const handleCityChange = (event)=>{
    setCity(event.target.value)
  }

  const fetchWeather = async() =>{
    try{
      const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API key}")
    }
    catch {

    }

  }
  const handleClick= ()=>{
    fetchWeather();

  }
  return (
    <div className='weather-container'>
      <input type="text" placeholder='Enter City Name' value={city} onChange={handleCityChange}></input>
      <br/>
      <button onClick={handleClick}> Get Weather Report </button>
      
    </div>
  )
}

export default Weather
