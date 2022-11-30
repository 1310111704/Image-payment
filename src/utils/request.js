import axios from "axios";
// import qs from 'qs'
// axios.defaults.baseURL = "http://192.168.31.249:9999/api/"
const request = axios.create({
  // baseURL: 'http://192.168.31.249:9999/api/'
  // baseURL: 'http://192.168.31.44:9995'
  baseURL: 'https://hyperlink.ltd/v1/api'
  // baseURL: "https://server.hyperlinkvpn.com/v1/api/",
  // baseURL: 'http://192.168.31.175:9998/api/'
  //  baseURL: 'http://192.168.31.200:8/api/'
});
// request拦截器
// request.interceptors.request.use(
//   (config) => {
//     let equipment = "";
//     let token = localStorage.getItem("tokenKey");
//     if (token) {
//       equipment = token;
//     } else {
//       equipment = localStorage.getItem("token");
//     }
//     // console.log(equipment);
//     config.headers["Authorization"] = equipment;

//     return config;
//   },
//   (error) => {
//     // Do something with request error
//     console.log("请求错误信息为：" + error); // for debug
//     return Promise.reject(error);
//   }
// );
export default request;
