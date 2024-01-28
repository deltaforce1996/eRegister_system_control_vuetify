/* eslint-disable no-undef */

const { delay } = require('../utils');

module.exports = (app) => {
  const role = require('../data/role.json')

app.get('/master/get-roles', async (req, res) => {
  await delay(2000);
  res.json(role);
});
}

