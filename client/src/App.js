import React, { Component } from 'react';
import CloudCover from "./components/CloudCover";
import Wind from "./components/Wind";
import Visibility from "./components/Visibility";
import Temperature from "./components/Temperature";
import axios from "axios";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      cities: null
    }
  }

  componentDidMount() {
    axios
    .get("https://braid-weather.herokuapp.com/weather-api")
    .then(res => {
      let cityNames = res.data[res.data.length - 1];
      let cityNamesDict = {}

      for (let city of cityNames) {
        // creates a lookup dictionary for city names
        cityNamesDict[Object.keys(city)[0]] = Object.values(city)[0];
      }

      this.setState({cities: cityNamesDict})
      // removes the array of city stations and names since they are no longer needed
      res.data.pop();
      this.setState({weather: res.data})
    })
    .catch(err => console.log(err, "could not connect to back-end"))
  }
  
  render() {
    return (
      <div className="App">
        <CloudCover weatherData={this.state.weather} cityDict={this.state.cities} />
        <Wind weatherData={this.state.weather} />
        <Visibility weatherData={this.state.weather} />
        <Temperature weatherData={this.state.weather} />
      </div>
    );
  }
}

export default App;
