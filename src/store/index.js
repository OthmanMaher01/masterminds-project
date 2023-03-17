import { createStore } from 'vuex'
import axios from 'axios';
import SecureLS from "secure-ls";
import createPersistedState from 'vuex-persistedstate';
const ls = new SecureLS({ isCompression: false });
import router from '@/router';


export default createStore({
  state: {
    isAuthenticated:false,
    access_token:"",
    user:{},
    

  },
  getters: {
    isAuthenticated(state){
      return state.isAuthenticated;
    },
    getToken(state){
      return state.access_token;
    }, 
    getUser(state){
      return state.user;
    }, 
  },
  mutations: {
    setIsAuthenticated(state,value){
      state.isAuthenticated=value;
    },
    setToken(state,token){
      state.access_token=token;
    },
    setUser(state,user){
      state.user=user;
    },
  },
  actions: {
    async register(context,user){
      const response = await axios.post("https://8239-109-237-193-34.eu.ngrok.io/auth/register",user,{
        headers:{
            "ngrok-skip-browser-warning":''
        }});   
      console.log(response);
      },
    async login(context,user){
      try{
        const response = await axios.post("https://8239-109-237-193-34.eu.ngrok.io/auth/login",user,{
          headers:{
              "ngrok-skip-browser-warning":''
          }});
        context.commit("setIsAuthenticated",true);
        console.log(response)
        context.commit("setToken",response.data);
        context.commit("setUser",user);
      }catch(e){
        throw console.error();
      }
    },
    logout(context){
      location.reload()
      context.commit("setIsAuthenticated",false);
      context.commit("setToken",null);
      router.push('/');  

  }
  },
  modules: {
  },
  plugins:[
    createPersistedState({
  
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
    }
    })
  ]
})
