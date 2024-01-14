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
}

const getTeamById = async (teamId) => {
  return await axiosBase({
    method: "get",
    url: `/master/get-team/${teamId}`,
    data: {},
  });
};

export default {
  getTeamAll,
  getTeamById
}
