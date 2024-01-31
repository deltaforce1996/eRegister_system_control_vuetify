/* eslint-disable no-undef */

const { delay } = require("../utils");

module.exports = (app) => {
  const company = require("../data/company.json");
  const company_by_id = require("../data/master-data/company_by_id.json");

  app.get("/getAllCompany", async (req, res) => {
    await delay(2000);
    res.json(company);
  });

  app.get("/master/get-companies", async (req, res) => {
    res.json(company);
  });

  app.get("/master/get-company/:id", async (req, res) => {
    res.json(company_by_id);
  });
};
