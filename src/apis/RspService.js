import axiosBase from "./AxiosConfig";

const getRegisteredVendorAmount = async () => {
  return await axiosBase({
    method: "get",
    url: `/rsp/get-registered-vendor-amount`,
    data: {},
  });
};

const getRspReportData = async () => {
  return await axiosBase({
    method: "get",
    url: `/rsp/get-rsp-report-data`,
    data: {},
  });
};
const sendFollowUpVendors = async () => {
  return await axiosBase({
    method: "post",
    url: `/rsp/follow-up-vendors`,
    data: {},
  });
};
const sendFollowUpVendor = async (bp_number,is_sent,email,additional_msg) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/follow-up-vendor`,
    data: {
      "bp_number": bp_number,
      "is_sent_to_contact_owner": is_sent,
      "email": email,
      "additional_message": additional_msg
     },
  });
};
const getRspPolicyResults = async (_bp_number) => {
  return await axiosBase({
    method: "get",
    url: `/rsp/get-rsp-policy-results`,
    params: {
      bp_number : _bp_number
    },
  });
};
const getRspSurveyResults = async (_bp_number) => {
  return await axiosBase({
    method: "get",
    url: `/rsp/get-rsp-survey-results`,
    params: {
      bp_number : _bp_number
    },
  });
};
const getRspSurveyResultDetail = async () => {
  return await axiosBase({
    method: "get",
    url: `/rsp/get-rsp-survey-result-detail`,
    data: {},
  });

};
const getRspSurveyResultDocument = async (_bp_number, _rsp_suvery_id) => {
  return await axiosBase({
    method: "get",
    url: `/rsp/get-rsp-survey-result-documents`,
    params: {
      bp_number :_bp_number,
      rsp_suvery_id : _rsp_suvery_id
    },
  });
};
const exportRspActivityReport = async () => {
  return await axiosBase({
    method: "get",
    url: `/export-rsp-activity-report`,
    data: {},
  });
};
const getExportRspPolicyByVendor = async (rsp_policy_id) => {
  return await axiosBase({
    method: "get",
    url: `/rsp/export-rsp-policy-by-vendor/${rsp_policy_id}`,
    data: {},
  });
};
const getExportRspSurveyByVendor = async (rsp_survey_id) => {
  return await axiosBase({
    method: "get",
    url: `/rsp/export-rsp-survey-by-vendor/${rsp_survey_id}`,
    data: {},
  });
};
export default {
  sendFollowUpVendor,
  sendFollowUpVendors,
  getRegisteredVendorAmount,
  getRspReportData,
  getRspPolicyResults,
  getRspSurveyResults,
  getRspSurveyResultDetail,
  getRspSurveyResultDocument,
  exportRspActivityReport,
  getExportRspSurveyByVendor,
  getExportRspPolicyByVendor
};
