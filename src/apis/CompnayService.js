
import axiosBase  from './AxiosConfig';
const  getCompanyAll = async ()=>{
 return await axiosBase({
    method: 'get',
    url: '/getAllCompany',
    data: {}
  });
}
export default {
  getCompanyAll
}
