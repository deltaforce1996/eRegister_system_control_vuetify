
import axiosBase  from './AxiosConfig';
import { Base64 } from 'js-base64'
import { saveAs } from 'file-saver'

const  exportBase64= async (_name,_type,_url)=>{
  const response = await axiosBase({
     method: 'get',
     url: _url,
     data: {}
   });
   const { data } = response
   const decode = Base64.toUint8Array(data)
   const blob = new Blob([decode], { type: _type })
   saveAs(blob, `${_name}.${_type}`)
}


export default {
  exportBase64
 }
