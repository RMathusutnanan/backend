//var fetch = require("node-fetch");
module.exports = async (req, res, next) => {
  const { URLSearchParams } = require("url");
  let urlencoded = new URLSearchParams();
  let fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));

  urlencoded.append("grant_type", "password");
  urlencoded.append("username", process.env.clientID);
  urlencoded.append("password", process.env.clientSecret);

  let requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: urlencoded,
    json: true,
  };
  let endpoint = "token";
  let fetchUrl = "https://ukdemoaisp4.imiscloud.com/" + endpoint;

  try {
    let response = await fetch(fetchUrl, requestOptions);
    res.data = await response.json();
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};
