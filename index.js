require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const axios = require("axios");
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.BRAID_SECRET_KEY}`;
const port = process.env.PORT || 9001;

const server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());

// sanity check route
server.get("/", (req, res) => {
    res.status(200).json({
      api: "running"
    });
})

server.get("/weather-api", (req, res) => {
    let weatherStations = [];
    let weatherData = [];
    axios
        .get("https://wx.wearebraid.com/stations")
        .then(response => {
            for (let data of response.data) {
                let obj = {};
                obj[data["Station"]] = `${data["City"]}, ${data["State"]}`;
                weatherStations.push(obj)
            }
            // does a get request for all of the stations the API returned and adds that data to an array
            for (let station of weatherStations) {
                axios
                    .get(`https://wx.wearebraid.com/stations/${Object.keys(station)[0]}`)
                    .then(response => {
                        let obj = {};
                        obj[Object.keys(station)[0]] = response.data;
                        weatherData.push(obj);
                        // once all the data has been retrieved for each station, a response will be sent
                        if (weatherData.length === weatherStations.length) {
                            weatherData.push(weatherStations);
                            res.status(200).send(weatherData);
                        }
                    })
                    .catch(err => console.log("could not access weather API"))
            }
        })
        .catch(err => console.log(err, "could not access weather API"))
})

server.listen(port, () => console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`));