/* eslint-disable no-undef */


module.exports = (app) => {
  const permission = require('../data/permission-data/permission.json')
  const permission_by_id = require('../data/permission-data/permission_by_id.json')

app.get('/master/get-role-permissions', async (req, res) => {
  res.json(permission);
});

app.get('/master/get-role-permissions/:id', async (req, res) => {
  res.json(permission_by_id);
});
}

