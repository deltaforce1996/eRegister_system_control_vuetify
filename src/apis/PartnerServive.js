import axiosBase from "./AxiosConfig";
const getBusinessPartnerDetail = async (_bp_number) => {
  return await axiosBase({
    method: "post",
    url: `/partner/get-business-partner-detail`,
    data: {
      bp_number : _bp_number
    },
  });
};
const getBusinessPartnerDetailBranchCode = async (_bp_number,_branch_code) => {
  return await axiosBase({
    method: "post",
    url: `/partner/get-business-partner-detail`,
    data: {
      bp_number : _bp_number,
      branch_code:_branch_code
    },
  });
};
export default {
  getBusinessPartnerDetail,
  getBusinessPartnerDetailBranchCode
};
