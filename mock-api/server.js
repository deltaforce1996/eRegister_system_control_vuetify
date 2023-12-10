/* eslint-disable no-undef */
const express = require("express");
const cors = require('cors');
// const path = require('path');
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
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
app.get('/v1/users/get-users', async (req, res) => {

  await delay(2000);
  res.json(users);
});

app.post('/v1/CreatedMultipleUser', (req, res) => {
  console.log(req.body)
  res.json({
    "is_success": true,
    "code": 200,
    "message": "Ok",
    "data": {}
  });
});


app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});
