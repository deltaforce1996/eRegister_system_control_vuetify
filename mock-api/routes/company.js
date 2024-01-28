/* eslint-disable no-undef */

const { delay } = require('../utils');

module.exports = (app) => {
  const company = require('../data/company.json')

 app.get('/master/get-companies', async (req, res) => {
  await delay(2000);
  res.json(company);
});
}

