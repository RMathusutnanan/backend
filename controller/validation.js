const request = require("request-promise");

module.exports = async (req, res, next) => {
  //console.log("Validation", req.body);
  let data = {
    ApiKey: process.env.ApiKey,
    /* AccountNumber: req.body.Properties.$values.find(
      (ele) => ele.Name == "AccountNumber"
    ).Value,
    SortCode: req.body.Properties.$values.find((ele) => ele.Name == "SortCode")
      .Value,*/
    AccountNumber: req.body.AccountNumber,
    SortCode: req.body.SortCode,
  };

  const options = {
    method: "POST",
    uri: "https://verify.uat.uk.pt-x.com/v1/api/ValidateUKBankAccount",
    body: data,
    json: true,
  };
  let response;
  try {
    response = await request(options);
    res.validation = response;

    next();
    //res.send(response);
    //console.log("Response", response);
    /* if (accountValidation.$values.Name === BankName) {
      accountValidation.$values.Name.Value = response.BankName;
    }*/
    //return res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};
