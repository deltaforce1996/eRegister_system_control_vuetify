
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


const  submitImportActiveUser = async (data = [])=>{
  return await axiosBase({
     method: 'post',
     url: '/MockActiveUser',
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
const  updateDeactiveUsers = async (data = [])=>{
  return await axiosBase({
     method: 'post',
     url: '/user/deactivate-user',
     data: {
        user:Array.from(data, (i) => {
          return  {
              email : i.email
            }
        }),
      updated_user_id :'id-user'
     }
   });
}

const  downloadTemplateActiviteUser = async ()=>{
  return await axiosBase({
     method: 'get',
     url: '/MockDownlaodTemplate',
     data: {}
   });
}

const  downloadDeactiviteUsers = async ()=>{
  return await axiosBase({
     method: 'get',
     url: '/test/download/deactivate',
     data: {}
   });
}

export default {
  getUserAll,
  downloadTemplateActiviteUser,
  submitImportActiveUser,
  downloadDeactiviteUsers,
  updateDeactiveUsers
 }
