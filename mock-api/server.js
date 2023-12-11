/* eslint-disable no-undef */
const express = require("express");
const cors = require('cors');
const fs = require('fs');
const app = express();
app.use(express.static('downloads'));
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
const port = process.env.PORT || 4000;



const users = require('./data/user.json')
const company = require('./data/company.json')
const memberType = require('./data/memberType.json')
const role = require('./data/role.json')
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

app.get('/v1/getAllMemberType', async (req, res) => {
  await delay(2000);
  res.json(memberType);
});
app.get('/v1/getAllCompany', async (req, res) => {
  await delay(2000);
  res.json(company);
});
app.get('/v1/getAllRole', async (req, res) => {
  await delay(2000);
  res.json(role);
});
app.get('/v1/users/get-users', async (req, res) => {
  await delay(2000);
  res.json(users);
});

app.post('/v1/MockActiveUser', (req, res) => {
  console.log(req.body)
  res.json({
    "is_success": true,
    "code": 200,
    "message": "Ok",
    "data": {}
  });
});
app.post('/v1/MockDeactiveUser', (req, res) => {
  console.log(req.body)
  res.json({
    "is_success": true,
    "code": 200,
    "message": "Ok",
    "data": {}
  });
});

// eslint-disable-next-line no-unused-vars
app.get('/v1/MockDownlaodTemplate', (req, res) => {

  const filePath = 'file/active.xlsx';

    // Read the file asynchronously
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error('Error reading the file:', err);
        return;
      }
      const base64String = data.toString('base64');
      res.send(base64String);
      // Now 'base64String' contains the base64-encoded data
      //console.log(base64String);
    });
});


app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});
