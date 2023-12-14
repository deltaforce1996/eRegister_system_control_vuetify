/* eslint-disable no-undef */

const { delay } = require('../utils');
const fs = require('fs');
module.exports = (app) => {
  const user_all = require('../data/userGetAll.json')
  const user_byId = require('../data/userGetById.json')


  app.get('/users/get-users', async (req, res) => {
      await delay(2000);
      res.json(user_all);
  });
  app.get('/user/get-user/:user_id', async (req, res) => {

    //const userId = req.params.user_id;

    // Simulate delay
    await delay(2000);
    res.json(user_byId);
});
  app.post('/user/deactivate-user', (req, res) => {
    console.log(req.body)
      res.json({
        "is_success": true,
        "code": 200,
        "message": "Ok",
        "data": {}
      });
    });
  app.post('/MockActiveUser', (req, res) => {
      res.json({
        "is_success": true,
        "code": 200,
        "message": "Ok",
        "data": {}
      });
  });
  app.get('/test/download/activate', (req, res) => {
    const filePath = 'file/active.xlsx';
      fs.readFile(filePath, (err, data) => {
        if (err) {
          console.error('Error reading the file:', err);
          return;
        }
        const base64String = data.toString('base64');
        res.send(base64String);
      });
  });
  app.get('/test/download/deactivate', (req, res) => {
    const filePath = 'file/active.xlsx';
      fs.readFile(filePath, (err, data) => {
        if (err) {
          console.error('Error reading the file:', err);
          return;
        }
        const base64String = data.toString('base64');
        res.send(base64String);
      });
  });
}

