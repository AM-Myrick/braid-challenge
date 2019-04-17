require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const axios = require("axios");
const port = process.env.PORT || 9001;
const server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());

// sanity check route
server.get("/", (req, res) => {
    console.log(process.env.BRAID_SECRET_KEY);
    res.status(200).json({
      api: "running"
    });
})

server.listen(9001, () => console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`));