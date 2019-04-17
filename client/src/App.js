import React, { Component } from 'react';
import CloudCover from "./components/CloudCover";
import axios from "axios";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    axios
    .get("http://localhost:9001/weather-api")
    .then(res => {
      this.setState({weather: res.data})
    })
    .catch(err => console.log(err, "could not connect to back-end"))
  }
  
  render() {
    return (
      <div className="App">
        <CloudCover weatherData={this.state.weather} />
      </div>
    );
  }
}

export default App;
