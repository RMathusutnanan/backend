const express = require("express");
const dotenv = require("dotenv");
const request = require("request-promise");
const bodyParser = require("body-parser");
const cors = require("cors");
const auth = require("./middlewares/auth");
const validation = require("./controller/validation");
dotenv.config({ path: "./config/config.env" });
const PROT = 4000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/getCountry", auth, (req, res) => {
  let requestOptions = {
    method: "get",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + res.data.access_token,
    },
  };

  let endpoint = "api/country";
  let fetchUrl = process.env.URL + endpoint;

  request(fetchUrl, requestOptions).then((response) => {
    res.send(response);
  });
});

app.get("/getPanel", auth, (req, res) => {
  let requestOptions = {
    method: "get",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + res.data.access_token,
    },
  };

  let endpoint = "api/Mandate";
  let fetchUrl = process.env.URL + endpoint;

  request(fetchUrl, requestOptions).then((response) => {
    res.send(response);
  });
});

app.post("/addPanel", [validation, auth], (req, res) => {
  console.log("Response", res.validation);
  let requestOptions = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + res.data.access_token,
    },
    body: JSON.stringify(req.body),
  };

  let endpoint = "api/Mandate?Id=194";
  // let fetchUrl = secret.baseUri + endpoint;
  let data = "";

  console.log(requestOptions, fetchUrl);

  request(fetchUrl, requestOptions).then((response) => {
    data = response;
    console.log(data);
  });
});

app.listen(PROT, () => {
  console.log("Server Running on Port number 4000");
});
