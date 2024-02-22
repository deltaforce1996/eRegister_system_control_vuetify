import axiosBase from "./AxiosConfig";
const getVendorRspStatus = async (offset = 0, limit = 1000, search_field,search_value,company_id,bu_id,company_category_id,activity_id,activity_status,completed_from,completed_to) => {
  return await axiosBase({
    method: "get",
    url: `/rsp/get-vendor-rsp-status?offset=${offset}&limit=${limit}&search_field=${search_field}&search_value=${search_value}&company_id=${company_id}&bu_id=${bu_id}&company_category_id=${company_category_id}&activity_id=${activity_id}&activity_status=${activity_status}&completed_from=${completed_from}&completed_to=${completed_to}`,
    data: {},
  });
};
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
const sendFollowUpVendors = async (bp_numbers,is_sent,additional_msg) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/follow-up-vendors`,
    data: {
      business_partners : Array.from(bp_numbers,email=>{
         return {
          bp_number : email
         }
      }),
      is_sent_to_contact_owner: is_sent,
      additional_message : additional_msg
    },
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
const getRspSurveyResultDetail = async (_bp_number) => {
  return await axiosBase({
    method: "get",
    url: `/rsp/get-rsp-survey-result-detail`,
    params: {
      bp_number : _bp_number
    },
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
const exportRspActivityReport = async (bp_number = []) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/export-rsp-activity-report`,
    data: {
      business_partner : Array.from(bp_number,i =>{ return {
        bp_number: i
      }})
    },
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

// rsp-policy
const getRspPolicyState = async (_state) => {
  return await axiosBase({
    method: "get",
    url: `/rsp/get-rsp-policies`,
    params: {
      state : _state
    },
  });
};
const getRspPolicyPagination = async (_state,_offset,_limit) => {
  return await axiosBase({
    method: "get",
    url: `/rsp/get-rsp-policies`,
    params: {
      state:_state,
      offset:_offset,
      limit : _limit
    },
  });
};
const createRspPolicy = async (_name,_file,_start_at) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/create-rsp-policy`,
    data: {
      name : _name,
      file : _file,
      start_at : _start_at,
      updated_user_id : 1
    },
  });
};
const updateRspPolicy = async ( _rsp_policy_id,_name,_file,_start_at) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/update-rsp-policy`,
    data: {
      rsp_policy_id : _rsp_policy_id,
      name : _name,
      file : _file,
      start_at : _start_at,
      updated_user_id : 1
    },
  });
};
const deleteRspPolicy = async (_rsp_policy_id) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/delete-rsp-policy/${_rsp_policy_id}`,
    data: {},
  });
};
const exportRspPolicyResult = async (_rsp_policy_id) => {
  return await axiosBase({
    method: "get",
    url: `/rsp/export-rsp-policy-result/${_rsp_policy_id}`,
    data: {},
  });
};
const UndeleteRspPolicy = async (_rsp_policy_id) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/undelete-rsp-policy/${_rsp_policy_id}`,
    data: {},
  });
};
const PermanentlyDeleteRspRolicy = async (_rsp_policy_id) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/permanently-delete-rsp-policy/${_rsp_policy_id}`,
    data: {},
  });
};
export default {
  getVendorRspStatus,
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
  getExportRspPolicyByVendor,

  // rsp-policy
  getRspPolicyPagination,
  getRspPolicyState,
  createRspPolicy,
  updateRspPolicy,
  deleteRspPolicy,
  exportRspPolicyResult,
  UndeleteRspPolicy,
  PermanentlyDeleteRspRolicy
};
