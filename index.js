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
                weatherStations.push(data["Station"])
            }
            for (let station of weatherStations) {
                axios
                    .get(`https://wx.wearebraid.com/stations/${station}`)
                    .then(response => {
                        let obj = {};
                        obj[station] = response.data;
                        weatherData.push(obj);
                        if (weatherData.length === weatherStations.length) {
                            res.status(200).send(weatherData);
                        }
                    })
                    .catch(err => console.log(err, "could not access weather API"))
            }
        })
        .catch(err => console.log(err, "could not access weather API"))
})

server.listen(9001, () => console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`));