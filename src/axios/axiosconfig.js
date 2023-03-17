import axios from 'axios';
import router from '../../router'


const axiosinstance= axios.create();
axiosinstance.interceptors.request.use(function (config) {
  //config.headers.Authorization="Bearer "+authStore.accessToken
  config.headers.set
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


axiosinstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  const authStore=useAuthStore();
  if(error.response.data.error==="Unauthorized"){
    if(authStore.accessToken!=""){
      authStore.setAccessToken('');
      axios.post('http://localhost:8080/auth/refresh', {
        refreshToken:authStore.refreshToken
      })
      .then(function (response) {
        authStore.setAccessToken(response.data.accessToken);
      })
      .catch(function (error) {
        router.push({name: 'login'})
      });
    }else{
      router.push({name: 'login'})
    }
  }
});
export default axiosinstance;
