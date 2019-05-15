import React, { Component } from 'react';
import './Weather.css';
import Form from "./Form";
import Weather from "./Weather";

const API_KEY="d610764d5e03cd57f5de857c2cef993d";

class WeatherLive extends Component {
  state={
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }
  getWeather=async (e)=> {
    e.preventDefault();
    /*e is a event object in javascript,which is going to prevent default behaviour of the react component when we press "Get Weather button" */

    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data=await api_call.json();
    if(city && country)
    {
    console.log(data);
    this.setState({
      temperature : data.main.temp,
      city:data.name,
      country : data.sys.country,
      humidity : data.main.humidity,
      description : data.weather[0].description,
      error: ""

    });
  } else {
    this.setState({
      temperature : undefined,
      city:undefined,
      country : undefined,
      humidity : undefined,
      description : undefined,
      error: "Please enter values"
    });
  }
  }
render() {
  return (
    <div>
    <Form getWeather={this.getWeather}/>
      <Weather
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        />

    </div>
  );
}

}


export default WeatherLive;
