import axios from 'axios';

const _axios = axios.create({
  baseURL: 'https://api-esg-dev.onefrasers.com/release/v1',
  timeout: 12000,
  headers: {
    'Authorization': 'Bearer tXZFVTbtqM1hYqM5RFQb2Pl5NPN7uE9hAedkI/z2kJHDsdUD9DkN1hkqBOdB0v7XxCBQn1hfAkpWxpUa0duO+w==', // Replace with your actual access token
    // 'Cache-Control': 'no-cache',
    // 'Postman-Token': '<calculated when request is sent>',
    // 'Host':'<calculated when request is sent>',
    // 'User-Agent': 'PostmanRuntime/7.36.1',
    // 'Accept': '*/*',
    // 'Accept-Encoding': 'gzip, deflate, br',
    // 'Connection': 'keep-alive',
  },
});

// _axios.interceptors.response.use(
//   (response) => {
//     window.console.log('Response:', JSON.stringify(response, null, 2));
//     return response;
//   },
//   (error) => {
//     window.console.error('Error:', JSON.stringify(error, null, 2));
//     return Promise.reject(error);
//   }
// );

export default _axios;
