import axiosBase from "./AxiosConfig";
const getBusinessPartnerDetail = async (offset = 0, limit = 1000, search_field,search_value,company_id,bu_id,company_category_id,activity_id,activity_status,completed_from,completed_to) => {
  return await axiosBase({
    method: "get",
    url: `/partner/get-business-partner-detail?offset=${offset}&limit=${limit}&search_field=${search_field}&search_value=${search_value}&company_id=${company_id}&bu_id=${bu_id}&company_category_id=${company_category_id}&activity_id=${activity_id}&activity_status=${activity_status}&completed_from=${completed_from}&completed_to=${completed_to}`,
    data: {},
  });
};
export default {
  getBusinessPartnerDetail,
};
