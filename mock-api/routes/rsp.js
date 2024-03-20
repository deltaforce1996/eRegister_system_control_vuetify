/* eslint-disable no-undef */

const { delay } = require("../utils");

module.exports = (app) => {
  const policy_results = require("../data/rsp-policy-results.json");
  const survey_results = require("../data/rsp-survey-results.json");
  const survey_results_doc = require("../data/rsp-survey-result-documents.json");
  const survey_results_detail = require("../data/rsp-survey-result-detail.json");
  const vendor_rsp_status_results = require("../data/rsp-vendor-rsp-status.json");

  const rsp_training = require("../data/rsp-traning/rsp-training.json");

  const rsp_policies = require("../data/rsp-policies/rsp-policies.json");
  const rsp_policies_activated = require("../data/rsp-policies/rsp-policies_activated.json");

  const rsp_serveies = require("../data/rsp-survey/rsp-servey.json");
  const rsp_serveies_activated = require("../data/rsp-survey/rsp-servey-active.json");
  const rsp_serveies_questionaire = require("../data/rsp-survey/questionaire.json");


  app.post("/rsp/follow-up-vendor", async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": 200,
      "message": "OK"
    });
  });
  app.post("/rsp/follow-up-vendors", async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": 200,
      "message": "OK"
    });
  });

  app.get("/rsp/get-registered-vendor-amount", async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": 200,
      "message": "OK",
      "data": {
        "registered_vendor_amount": 2
      }
    });
  });
  app.get("/rsp/get-rsp-report-data", async (req, res) => {
    await delay(2000);
    res.json(
      {
        "is_success": true,
        "code": 200,
        "message": "OK",
        "data": {
          "policy": {
            "completed_amount": 15,
            "completed_percentage": 75
          },
          "survey": {
            "completed_amount": 10,
            "completed_percentage": 50,
            "aligned_amount": 5,
            "aligned_percentage": 25
          },
          "training": {
            "completed_amount": 8,
            "completed_percentage": 40
          }
        }
      }
    );
  });
  app.get("/rsp/get-vendor-rsp-status", async (req, res) => {
    await delay(2000);
    res.setHeader('Items-Offset', 0);
    res.setHeader('Items-Limit', 10);
    res.setHeader('Items-Total', 24);
    res.json(vendor_rsp_status_results);
  });
  app.get("/rsp/get-rsp-policy-results", async (req, res) => {
    await delay(2000);
    res.json(policy_results);
  });
  app.get("/rsp/get-rsp-survey-results", async (req, res) => {
    await delay(2000);
    res.json(survey_results);
  });
  app.get("/rsp/get-rsp-survey-result-detail", async (req, res) => {
    await delay(2000);
    res.json(survey_results_detail);
  });
  app.get("/rsp/get-rsp-survey-result-documents", async (req, res) => {
    await delay(2000);
    res.json(survey_results_doc);
  });
  app.get("/rsp/export-rsp-policy-by-vendor", async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": 200,
      "message": "Ok",
      "data": {
          "bp_number": "12345678901000",
          "file_url":  "http://localhost:4000/dowload/test-pdf"
        }
    }
    );
  });
  app.post("/rsp/export-rsp-activity-report", async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": 200,
      "message": "Ok",
      "data": {
          "file_url": "http://localhost:4000/dowload/test-pdf"
        }
    });
  });
  app.get("/rsp/export-rsp-policy-by-vendor/:id", async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": 200,
      "message": "Ok",
      "data": {
          "bp_number": "12345678901000",
          "file_url": "http://localhost:4000/dowload/test-pdf"
        }
    });
  });
  app.get("/rsp/export-rsp-survey-by-vendor/:id", async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": 200,
      "message": "Ok",
      "data": {
          "bp_number": "12345678900001",
          "file_url": "http://localhost:4000/dowload/test-pdf"
        }
       }
    );
  });

  // traning ***
  app.get("/rsp/get-rsp-training", async (req, res) => {
    await delay(2000);
    res.setHeader('Items-Offset', 0);
    res.setHeader('Items-Limit', 10);
    res.setHeader('Items-Total', 24);
    res.json(rsp_training);
  });
  app.get("/rsp/export-rsp-training-result/:id", async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": 200,
      "message": "Ok",
      "data": {
        "rsp_training_id": "33123",
        "file_url": "http://localhost:4000/dowload/test-xlsx"
      }
    });
  });

  app.post("/rsp/activate-rsp-training", async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": 200,
      "message": "Ok"
    });
  });
  app.post("/rsp/deactivate-rsp-training", async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": 200,
      "message": "Ok"
    });
  });
  app.post("/rsp/delete-rsp-training", async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": 200,
      "message": "Ok"
    });
  });
  app.post("/rsp/undelete-rsp-training", async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": 200,
      "message": "Ok"
    });
  });
  app.post("/rsp/permanently-delete-rsp-training", async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": 200,
      "message": "Ok"
    });
  });
  app.post("/rsp/create-rsp-training", async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": 200,
      "message": "Ok"
    });
  });
  app.post("/rsp/update-rsp-training", async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": 200,
      "message": "Ok"
    });
  });

 // policies
 app.get("/rsp/get-rsp-policies", async (req, res) => {
  const { state } = req.query;
  await delay(2000);
  res.setHeader('Items-Offset', 0);
  res.setHeader('Items-Limit', 10);
  res.setHeader('Items-Total', 24);
  if(state === 'activated'){
    res.json(rsp_policies_activated);
  }else{
    res.json(rsp_policies);
  }
 });
 app.get("/rsp/export-rsp-policy-result/:rsp_policy_id", async (req, res) => {
    res.json({
      "is_success": true,
      "code": 200,
      "message": "Ok",
      "data": {
        "rsp_policy_id": "12345",
        "file_url": "http://localhost:4000/dowload/test-xlsx"
      }
    });
 });
 app.post("/rsp/create-rsp-policy", async (req, res) => {

 // API create RSP Policy POST /v1/rsp/create-rsp-policy { "name": "Example RSP Policy", "data": "base64_encoded_file_content", "published_at": "2023-11-10T14:20:12", "created_user_id": 123 }

  res.json({
    "is_success": true,
    "code": 200,
    "message": "Ok",
    "data": {}
  });
});

app.post("/rsp/update-rsp-policy", async (req, res) => {

  // API create RSP Policy POST /v1/rsp/create-rsp-policy { "name": "Example RSP Policy", "data": "base64_encoded_file_content", "published_at": "2023-11-10T14:20:12", "created_user_id": 123 }

   res.json({
     "is_success": true,
     "code": 200,
     "message": "Ok",
     "data": {}
   });
 });

 app.post("/rsp/undelete-rsp-policy/:id", async (req, res) => {
    res.json({
      "is_success": true,
      "code": 200,
      "message": "Ok",
      "data": {}
    });
 });
 app.post("/rsp/permanently-delete-rsp-policy/:id", async (req, res) => {
  res.json({
    "is_success": true,
    "code": 200,
    "message": "Ok",
    "data": {}
  });
 });



 // survey
 app.get("/rsp/get-rsp-surveys", async (req, res) => {
  const { state } = req.query;
  await delay(2000);
  res.setHeader('Items-Offset', 0);
  res.setHeader('Items-Limit', 10);
  res.setHeader('Items-Total', 24);
  if(state === 'active'){
    res.json(rsp_serveies_activated);
  }else{
    res.json(rsp_serveies);
  }
 });


 app.get("/rsp/get-rsp-survey-questionaire/:rsp_survey_id", async (req, res) => {
  //const { state } = req.query;
   await delay(2000);
   res.json(rsp_serveies_questionaire);

 });

 app.post("/rsp/delete-rsp-survey", async (req, res) => {
  await delay(2000);
  res.json({
    "is_success": true,
    "code": 200,
    "message": "Ok",
    "data": {}
  });

 });
 app.post("/rsp/permanently-delete-rsp-survey", async (req, res) => {
  await delay(2000);
  res.json({
    "is_success": true,
    "code": 200,
    "message": "Ok",
    "data": {}
  });

 });
 app.post("/rsp/undelete-rsp-survey", async (req, res) => {
  await delay(2000);
  res.json({
    "is_success": true,
    "code": 200,
    "message": "Ok",
    "data": {}
  });

 });



 app.get("/rsp/export-rsp-survey-result/:rsp_survey_id", async (req, res) => {
  //const { state } = req.query;
   await delay(2000);
   res.json({
    "is_success": true,
    "code": 200,
    "message": "Ok",
    "data": {
        "rsp_survey_id": "Integer",
        "file_url": "http://localhost:4000/dowload/test-xlsx"
      }
    }
  );

 });

};
