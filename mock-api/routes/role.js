/* eslint-disable no-undef */

const { delay } = require('../utils');

module.exports = (app) => {
  const role = require('../data/role.json')

app.get('/getAllRole', async (req, res) => {
  await delay(2000);
  res.json(role);
});
}

