
import axiosBase  from './AxiosConfig';
const  getMemberTypeAll = async ()=>{
 return await axiosBase({
    method: 'get',
    url: '/getAllMemberType',
    data: {}
  });
}
export default {
  getMemberTypeAll
}
