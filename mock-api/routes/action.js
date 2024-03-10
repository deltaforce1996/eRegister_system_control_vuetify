/* eslint-disable no-undef */
const { delay } = require('../utils');
module.exports = (app) => {
  const actions = require('../data/action-data/action.json')

app.get('/master/get-actions', async (req, res) => {
  await delay(500);
  res.json(actions);
});
}

