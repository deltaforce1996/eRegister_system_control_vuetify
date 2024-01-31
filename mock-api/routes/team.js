/* eslint-disable no-undef */

module.exports = (app) => {
  const team = require("../data/master-data/team.json");
  const team_by_id = require("../data/master-data/team_by_id.json");

  app.get("/master/get-teams", async (req, res) => {
    res.json(team);
  });

  app.get("/master/get-team/:id", async (req, res) => {
    res.json(team_by_id);
  });
};
