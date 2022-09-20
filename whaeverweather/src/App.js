import React, {useState} from "react";
import axios from 'axios';

function App() {
  const [data,setData] = useState({})
  const [cityName, setLocation] = useState('')

const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=6db052c81ab241264bb03a84cc0f9eb4`;

  const searchcityName = (event) => {
    if (event.key === "Enter") {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation("")
  }
}


  return (
    <div className="App">
      <div className="search">
        <input value={cityName}
       onChange={event => setLocation(event.target.value)}
       onKeyPress={searchcityName}
       placeholder='Enter Location'      
        type="text"/>
      </div>
      <div className="container">
     <div className="top">
      <div className="location">
        <p>{data.name}</p>
      </div>
      <div className="temp">
        {data.main ? <h1>{data.main.temp.toFixed()}&#176;C</h1> : null}
      </div>
      <div className="description">
        {data.weather ? <p>{data.weather[0].main}</p> : null}
      </div>
     </div>

     {data.name != undefined &&
     <div className="bottom">
      <div className="feels">
        {data.main ? <p className="bold">{data.main.feels_like}</p> : null}
        <p>Feels Like</p>
      </div>
      <div className="humidity">
      {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
        <p>Humidity</p>
      </div>
      <div className="wind">
      {data.wind ? <p className="bold">{data.wind.speed.toFixed()}kph</p> : null}
        <p>Wind Speedo</p>
     

      </div>
      </div>
}  
      </div>
     
    </div>
  );
}

export default App;
