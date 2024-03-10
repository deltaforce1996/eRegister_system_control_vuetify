/* eslint-disable no-undef */
const { delay } = require('../utils');

module.exports = (app) => {
  const role = require("../data/role.json");
  const role_by_id = require("../data/role_by_id.json");

  app.get("/master/get-roles", async (req, res) => {
    await delay(500)
    res.json(role);
  });

  app.get("/master/get-role/:role_id", async (req, res) => {
    await delay(500)
    res.json(role_by_id);
  });
};
