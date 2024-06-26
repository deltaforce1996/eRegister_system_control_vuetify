import axiosBase from "./AxiosConfig";
const getVendorRspStatus = async (
  offset = 0,
  limit = 1000,
  search_field,
  search_value,
  company_id,
  bu_id,
  company_category_id,
  activity_id,
  activity_status,
  completed_from,
  completed_to
) => {
  let url = `/rsp/get-vendor-rsp-status?offset=${
    offset > 0 ? (offset -= 1) : offset
  }&limit=${limit}`;
  if (search_field) url += `&search_field=${search_field}`;
  if (search_value) url += `&search_value=${search_value}`;
  if (company_id) url += `&company_id=${company_id}`;
  if (company_category_id) url += `&company_category_id=${company_category_id}`;
  if (activity_id) url += `&activity_id=${activity_id}`;
  if (activity_status) url += `&activity_status=${activity_status}`;
  if (completed_from) url += `&completed_from=${completed_from}`;
  if (completed_to) url += `&completed_from=${completed_from}`;

  return await axiosBase({
    method: "get",
    // url: `/rsp/get-vendor-rsp-status?offset=${offset}&limit=${limit}&search_field=${search_field}&search_value=${search_value}&company_id=${company_id}&bu_id=${bu_id}&company_category_id=${company_category_id}&activity_id=${activity_id}&activity_status=${activity_status}&completed_from=${completed_from}&completed_to=${completed_to}`,
    url,
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

const sendFollowUpVendors = async (bp_numbers, is_sent, additional_msg) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/follow-up-vendors`,
    data: {
      business_partners: Array.from(bp_numbers, (email) => {
        return {
          bp_number: email,
        };
      }),
      is_sent_to_contact_owner: Number(is_sent),
      additional_message: additional_msg,
    },
  });
};

const shareRspActivity = async (bp_number, accessible_email) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/share-rsp-activity`,
    data: {
      bp_number,
      accessible_email,
      created_user_id: 1,
    },
  });
};

const sendFollowUpVendor = async (
  bp_number,
  is_sent,
  email,
  additional_msg
) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/follow-up-vendor`,
    data: {
      bp_number: bp_number,
      is_sent_to_contact_owner: Number(is_sent),
      email: email,
      additional_message: additional_msg,
    },
  });
};
const getRspPolicyResults = async (_bp_number, rsp_policy_id) => {
  const data = { bp_number: _bp_number };
  if (rsp_policy_id) data.rsp_policy_id = Number(rsp_policy_id);
  return await axiosBase({
    method: "post",
    url: `/rsp/get-rsp-policy-results`,
    data,
  });
};

const getRspSurveyResults = async (_bp_number, rsp_suvery_id) => {
  const data = { bp_number: _bp_number };
  if (rsp_suvery_id) data.rsp_suvery_id = Number(rsp_suvery_id);
  return await axiosBase({
    method: "post",
    url: `/rsp/get-rsp-survey-results`,
    data,
  });
};

const getRspSurveyResultDetail = async (_bp_number) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/get-rsp-survey-result-detail`,
    data: {
      bp_number: _bp_number,
    },
  });
};
const getRspSurveyResultDocument = async (_bp_number, _rsp_suvery_id) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/get-rsp-survey-result-documents`,
    data: {
      bp_number: _bp_number,
      rsp_survey_id: Number(_rsp_suvery_id),
    },
  });
};
const exportRspActivityReport = async (bp_number = []) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/export-rsp-activity-report`,
    data: {
      business_partner: Array.from(bp_number, (i) => {
        return {
          bp_number: i,
        };
      }),
      exporter_user_id: 1,
    },
  });
};
const getExportRspPolicyByVendor = async (bp_number) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/export-rsp-policy-by-vendor`,
    data: { bp_number, exporter_user_id: 1 },
  });
};
const getExportRspSurveyByVendor = async (rsp_survey_id, bp_number) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/export-rsp-survey-by-vendor`,
    data: { rsp_survey_id, bp_number, exporter_user_id: 1 },
  });
};

// rsp-policy
const getRspPolicyState = async (_state) => {
  return await axiosBase({
    method: "get",
    url: `/rsp/get-rsp-policies`,
    params: {
      state: _state,
    },
  });
};
const getRspPolicyPagination = async (_state, _offset, _limit) => {
  return await axiosBase({
    method: "get",
    url: `/rsp/get-rsp-policies`,
    params: {
      state: _state,
      offset: _offset,
      limit: _limit,
    },
  });
};
const createRspPolicy = async (_name, _file, _start_at) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/create-rsp-policy`,
    data: {
      name: _name,
      data: _file && _file == "" ? "" : _file.split(",")[1],
      published_at: _start_at,
      created_user_id: 1,
    },
  });
};
const updateRspPolicy = async (_rsp_policy_id, _name, _file, _start_at) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/update-rsp-policy`,
    data: {
      rsp_policy_id: Number(_rsp_policy_id),
      name: _name,
      data: _file && _file == "" ? "" : _file.split(",")[1],
      published_at: _start_at,
      updated_user_id: 1,
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
    params: { exporter_user_id: 161 },
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
    url: `/rsp/permanently-delete-rsp-policy`,
    data: {
      rsp_policy_id: Number(_rsp_policy_id),
      updated_user_id: 1,
    },
  });
};

// traning
const getRspTraining = async (
  _state,
  _offset,
  _limit,
  _roleId,
  _dateFrom,
  _dateTo
) => {
  return await axiosBase({
    method: "get",
    url: `/rsp/get-rsp-training`,
    data: {
      state: _state,
      offset: _offset,
      limit: _limit,
      role_id: _roleId,
      created_from: _dateFrom,
      created_to: _dateTo,
    },
  });
};
const createRspTraining = async (name, file, role_id, active_at) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/create-rsp-training`,
    data: {
      name: name,
      data: file,
      role_id: role_id,
      published_at: active_at,
      created_user_id: 123,
    },
  });
};

const updateRspTraining = async (
  training_id,
  name,
  file,
  role_id,
  active_at
) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/update-rsp-training`,
    data: {
      rsp_training_id: training_id,
      name: name,
      data: file,
      role_id: role_id,
      published_at: active_at,
      updated_user_id: 123,
    },
  });
};

const exportRspTrainingResult = async (rsp_training_id) => {
  return await axiosBase({
    method: "get",
    url: `/rsp/export-rsp-training-result/${rsp_training_id}`,
    data: {},
  });
};

const activateRspTraining = async (_rsp_traning_id) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/activate-rsp-training`,
    data: {
      rsp_training_id: _rsp_traning_id,
      updated_user_id: "1",
    },
  });
};
const deactivateRspTraining = async (_rsp_traning_id) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/deactivate-rsp-training`,
    data: {
      rsp_training_id: _rsp_traning_id,
      updated_user_id: "1",
    },
  });
};
const undeleteRspTraining = async (_rsp_traning_id) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/undelete-rsp-training`,
    data: {
      rsp_training_id: _rsp_traning_id,
      updated_user_id: "1",
    },
  });
};
const deleteRspTraining = async (_rsp_traning_id) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/delete-rsp-training`,
    data: {
      rsp_training_id: _rsp_traning_id,
      updated_user_id: "1",
    },
  });
};

const permanentlyDeleteRspTraining = async (_rsp_traning_id) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/permanently-delete-rsp-training`,
    data: {
      rsp_training_id: _rsp_traning_id,
      updated_user_id: "1",
    },
  });
};

// survey
// eslint-disable-next-line no-unused-vars
const completeRspSurvey = async (bp_number, rsp_survey_id) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/complete-rsp-survey`,
    data: {
      bp_number,
      rsp_survey_id: Number(rsp_survey_id),
      created_user_id: 1,
    },
    // data:{
    //   "bp_number": "01707129375000",
    //   "rsp_survey_id": 6,
    //   "created_user_id": 157
    // }
  });
};

// eslint-disable-next-line no-unused-vars
const createRspSurveyAnswer = async (rsp_survey_result_id, answers) => {
  // answers = [{question_id, answer}]
  return await axiosBase({
    method: "post",
    url: `/rsp/create-rsp-survey-answer`,
    data: {
      rsp_survey_result_id: Number(rsp_survey_result_id),
      answers: answers.map((el) => {
        return { question_id: Number(el.question_id), answer: "" + el.answer };
      }),
      created_user_id: 1,
    },
    // data:{
    //   "rsp_survey_result_id": 3,
    //   "answers": [
    //     {"question_id": 14, "answer": "27"},
    //     {"question_id": 11, "answer": "www.abc.com"},
    //     {"question_id": 12, "answer": "25"},
    //     {"question_id": 12, "answer": "26"},
    //     {"question_id": 13, "answer": ""}
    //   ],
    //   "created_user_id": 1
    // }
  });
};

const updateRspSurveyAnswer = async (rsp_survey_result_id, answers) => {
  // answers = [{"question_id": 1, "answer": "ข้อ a"}]
  return await axiosBase({
    method: "post",
    url: `/rsp/update-rsp-survey-answer`,
    data: {
      rsp_survey_result_id,
      answers: answers.map((el) => {
        return { question_id: Number(el.question_id), answer: "" + el.answer };
      }),
      updated_user_id: 1,
    },
  });
};

const updateRspSurveyResult = async (data) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/update-rsp-survey-result`,
    data: { ...data, updated_user_id: 1 },
    // data:{
    //   "bp_number": "c",
    //   "rsp_survey_id": 4,
    //   "rsp_activity_status_id": 1,
    //   "inprogress_section_id": 1,
    //   "updated_user_id": 1
    // }
  });
};

const createRspSurveyResult = async (bp_number, rsp_survey_id) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/create-rsp-survey-result`,
    data: {
      bp_number,
      rsp_survey_id: Number(rsp_survey_id),
      created_user_id: 1,
    },
  });
};

const getRspSurveyAnswers = async (bp_number, rsp_survey_id, section_id) => {
  let url = `/rsp/get-rsp-survey-answers?bp_number=${bp_number}&rsp_survey_id=${rsp_survey_id}`;
  if (section_id) url += `&section_id=${section_id}`;
  return await axiosBase({
    method: "get",
    url,
    data: {},
  });
};

const createRspActivityLog = async (bp_number, rsp_activity_id, is_skipped) => {
  return await axiosBase({
    method: "post",
    url: `/rsp/create-rsp-activity-log`,
    data: {
      bp_number,
      rsp_activity_id,
      is_skipped,
      created_user_id: 1,
    },
  });
};

const getRspSurveysActive = async () => {
  return await axiosBase({
    method: "get",
    url: `/rsp/get-rsp-surveys`,
    params: {
      state: "active",
    },
  });
};
const getRspSurveys = async (_state, _offset, _limit) => {
  return await axiosBase({
    method: "get",
    url: `/rsp/get-rsp-surveys`,
    params: {
      state: _state,
      offset: _offset,
      limit: _limit,
    },
  });
};

const getRspSurveyQuestionaire = async (survey_id) => {
  return await axiosBase({
    method: "get",
    url: `/rsp/get-rsp-survey-questionnaire/${survey_id}`,
    data: {},
  });
};

const deleteRspSurvey = async (survey_id) => {
  return await axiosBase({
    method: "get",
    url: `/rsp/delete-rsp-survey`,
    data: {
      rsp_survey_id: survey_id,
      updated_user_id: "1",
    },
  });
};

const undeleteRspSurvey = async (survey_id) => {
  return await axiosBase({
    method: "get",
    url: `/rsp/undelete-rsp-survey`,
    data: {
      rsp_survey_id: survey_id,
      updated_user_id: "1",
    },
  });
};

const permanentlyDeleteRspSurvey = async (survey_id) => {
  return await axiosBase({
    method: "get",
    url: `/rsp/permanently-delete-rsp-survey`,
    data: {
      rsp_survey_id: survey_id,
      updated_user_id: "1",
    },
  });
};

const exportRspSurveyResult = async (survey_id) => {
  return await axiosBase({
    method: "get",
    url: `/rsp/export-rsp-survey-result/${survey_id}`,
    data: {},
  });
};

const createAcceptRspPolicy = async (databody) => {
  return await axiosBase({
    method: "post",
    url: "/rsp/accept-rsp-policy",
    data: {
      ...databody,
      created_user_id: 185,
    },
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
  PermanentlyDeleteRspRolicy,
  createAcceptRspPolicy,

  // rsp-traning
  getRspTraining,
  createRspTraining,
  updateRspTraining,
  exportRspTrainingResult,
  activateRspTraining,
  deactivateRspTraining,
  undeleteRspTraining,
  deleteRspTraining,
  permanentlyDeleteRspTraining,

  // survey
  getRspSurveysActive,
  getRspSurveys,
  getRspSurveyQuestionaire,
  deleteRspSurvey,
  undeleteRspSurvey,
  permanentlyDeleteRspSurvey,
  exportRspSurveyResult,
  createRspActivityLog,
  createRspSurveyAnswer,
  completeRspSurvey,
  updateRspSurveyResult,
  createRspSurveyResult,
  updateRspSurveyAnswer,
  getRspSurveyAnswers,
  shareRspActivity,
};
