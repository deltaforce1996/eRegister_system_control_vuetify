import axiosBase  from './AxiosConfig';
const  getTeamAll = async (offset = 0,limit = 1000, sort_by= 'id:desc')=>{
 return await axiosBase({
    method: 'get',
    url: '/master/get-teams',
    params: {
      "offset": offset,
      "limit": limit,
      "sort-by":sort_by
    }
  });
};
const getTeamById = async (teamId) => {
  return await axiosBase({
    method: "get",
    url: `/master/get-team/${teamId}`,
    data: {},
  });
};

const  createdTeam = async (company_id ,name_th, name_en)=>{
  return await axiosBase({
     method: 'post',
     url: '/master/create-team',
     data:{
      "company_id": company_id,
      "name_th":name_th,
      "name_en":name_en,
      "created_user_id":1
     }
   });
 };
export default {
  getTeamAll,
  getTeamById,
  createdTeam
}
