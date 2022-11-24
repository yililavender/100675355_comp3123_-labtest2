import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

export default class Forecast extends Component {
 state ={
    time: new Date(),
    coord:{},
    weather: [],
    main: {},
    wind: {},
    icon:{},
    description:{},
    sys:{},
    visibility:0 ,
    base:""
  }

  componentDidMount() {
    axios.get("http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=3544ebad66ed7f503ed96225b01c54b4")
    .then(res => {
      const { coord,weather , main , wind , icon, description, sys , name, visibility, base } = res.data
      this.setState({ coord, weather : weather[0] , main , wind , 
                icon: weather[0].icon, description: weather[0].description, 
                sys , name, visibility, base })
    })
  }


  render() {

    return (
    <>
      <div style={{background: "lightsilver"}}>
        <div>
        <p>{this.state.time.toLocaleDateString("en-CA", { weekday: "long", year: "numeric", month:"long", day:"numeric"})}</p>
        <p>{this.state.name}, {this.state.sys.country}</p>

        <img src={`https://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt={this.state.description}/>
        </div>
        
        <ul >
            <li>Lon: {this.state.coord.lon } C° </li>
            <li>Lat: {this.state.coord.lat } C° </li>
            <li>Average Temp: {this.state.main.temp } C° </li>
            <li>Min Temp: {this.state.main.temp_min } C° </li>
            <li>Max Temp: {this.state.main.temp_max } C° </li>
            <li>Feels like: {this.state.main.feels_like} C°</li> 
            <li>Pressure: {this.state.main.pressure} C°</li>
            <li>Humidity: {this.state.main.humidity} C°</li>
            <li>Wind Speed: {this.state.wind.speed } miles/seconds</li>
            <li>Visibility: {this.state.visibility}</li>
            <li>Base: {this.state.base}</li>
        </ul>

      </div>
    </>
    )
  }


}
