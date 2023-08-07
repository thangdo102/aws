const express = require("express");
const { default: axios } = require("axios");
const dayjs = require("dayjs");
const app = express();
const hostname = "127.0.0.1";
const port = 3000;

const version = "1.0.0";

app.get("/", async (req, res) => {
  const { data } = await axios.get("https://api.ipify.org/?format=json");

  res.send(`<!DOCTYPE html>
<html>
  <head>
    <title>EC2 IP and Time</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="script.js"></script>
  </head>
  <body>
    <div class="container" style=" text-align: center;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);>
      <hnd Time</h1>
      <p>IP Address: <span id="ipAddress">${data.ip}</span></p>
      <p>Current Time: <span id="currentTime">${dayjs(new Date()).format(
        "DD/MM/YYYY hh:mm:ss"
      )}</span></p>
    </div>
  </body>
</html>`);
});

app.listen(port, () => {
  console.log(
    `[Version ${version}]: Server running at http://${hostname}:${port}/`
  );
});