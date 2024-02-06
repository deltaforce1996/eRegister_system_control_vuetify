/* eslint-disable no-undef */

const { delay } = require('../utils');

module.exports = (app) => {
  const business_bp_number = require('../data/business-partner-detail.json')

 app.post('/partner/get-business-partner-detail', async (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const { bp_number, branch_code} = req.body
  await delay(2000);
  if(branch_code != undefined){
    const new_item =  {...business_bp_number};
    new_item.data.branch.branch_code =  branch_code
    res.json(new_item);

  }else{
    res.json(business_bp_number);
  }


 });
}

