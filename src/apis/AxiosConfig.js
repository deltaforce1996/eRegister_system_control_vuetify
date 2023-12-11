import axios from 'axios'
const _axios = axios.create()

_axios.defaults.baseURL = " http://127.0.0.1:4000/v1",
_axios.defaults.timeout = 12000;


  _axios.interceptors.request.use((request) => {
    window.console.log('Request', JSON.stringify(request, null, 2))
    return request
})

_axios.interceptors.response.use((response) => {
    window.console.log('Response:', JSON.stringify(response, null, 2))
    return response
})

export default _axios
