
import axiosBase  from './AxiosConfig';
const  getUserAll = async (offset,limit,sort_by)=>{
 return await axiosBase({
    method: 'get',
    url: '/users/get-users?offset=0&limit=10&sort-by=id:desc',
    data: {
      "offset": offset,
      "limit": limit,
      "sort-by":sort_by
    }
  });
}

const  downloadActiveUser = async ()=>{
  return await axiosBase({
     method: 'get',
     url: '/user/download/active',
     data: {}
   });
}
const  submitImportActiveUser = async (data = [])=>{
  return await axiosBase({
     method: 'post',
     url: '/CreatedMultipleUser',
     data: {
        user:Array.from(data, (i) => {
          return  {
              email : i.email,
              member_type_id :i.member_type?.id,
              team_id :i.team?.id,
              role_id :i.role?.id
            }
        }),
      created_user_id :'id-user'
     }
   });
}

export default {
  getUserAll,
  downloadActiveUser,
  submitImportActiveUser
 }
