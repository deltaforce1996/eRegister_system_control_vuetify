
import axiosBase  from './AxiosConfig';
const  getRoleAll = async ()=>{
 return await axiosBase({
    method: 'get',
    url: '/getAllRole',
    data: {}
  });
}
export default {
  getRoleAll
}
