/* eslint-disable no-undef */

const { delay } = require('../utils');

module.exports = (app) => {
  const memberType = require('../data/memberType.json')

app.get('/getAllMemberType', async (req, res) => {
  await delay(2000);
  res.json(memberType);
});
}

