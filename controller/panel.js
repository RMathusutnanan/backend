const request = require("request-promise");

exports.addPanel = async (req, res, next) => {
  let requestOptions = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token.access_token,
    },
    body: JSON.stringify(req.body),
  };

  let endpoint = "api/Mandate?Id=194";
  let fetchUrl = secret.baseUri + endpoint;
  let data = "";

  console.log(requestOptions, fetchUrl);

  request(fetchUrl, requestOptions).then((response) => {
    data = response;
    console.log(data);
  });
  next();
};

// Response body - input values
// Validation Values
// Combaine both
// store to imis
