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
const getRspPolicyResults = async () => {
  return await axiosBase({
    method: "get",
    url: `/rsp/get-rsp-policy-results`,
    data: {},
  });
};
const getRspSurveyResultDetail = async () => {
  return await axiosBase({
    method: "get",
    url: `/rsp/get-rsp-survey-result-detail`,
    data: {},
  });

};
const getRspSurveyResultDocument = async () => {
  return await axiosBase({
    method: "get",
    url: `/get-rsp-survey-result-documents`,
    data: {},
  });
};
const exportRspActivityReport = async () => {
  return await axiosBase({
    method: "get",
    url: `/export-rsp-activity-report`,
    data: {},
  });
};
const exportRspSurveyByVendor = async () => {
  return await axiosBase({
    method: "get",
    url: `/export-rsp-activity-report`,
    data: {},
  });
};
export default {
  sendFollowUpVendor,
  sendFollowUpVendors,
  getRegisteredVendorAmount,
  getRspReportData,
  getRspPolicyResults,
  getRspSurveyResultDetail,
  getRspSurveyResultDocument,
  exportRspActivityReport,
  exportRspSurveyByVendor
};
