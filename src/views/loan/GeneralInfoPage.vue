<template>
 
    <div class="login-page">
          <div class="login-box animated slideInDown"  v-if="!submitted">
               <div class="atypon-logo">
          <!-- <img src="../assets/images/atypontube-logo.png" style="width:170px;"> -->
              </div>
              <div class="title">
                  More Information
              </div>
              <div class="textbox">
                  <input type="text" placeholder="Project Name" v-model="projectName">
              </div>
              <div class="textbox">
                  <input type="text" placeholder="Project Description" v-model="projectDescription">
              </div>
            <div class="textbox">
                  <input type="text" placeholder="Estimated Loan Cost" >
              </div>
              <div class="textbox">
                  <input type="text" placeholder="Bank Preferences" >
              </div>
              <label for="file-upload" class="custom-file-upload">
                    <i class="fa fa-cloud-upload"></i>Upload Business Case PDF
            </label>
            <input id="file-upload" type="file"/>
              <div class="spinner-container" v-if="isLoading">
                 <div class="spinner-border text-blue" role="status"/>
                 </div>
              <div class="button" align="center" v-else>
                  <input type="button" value="PREVIOUS" @click="previousIndex">
                  <input type="button" value="SUBMIT"  @click="submit">
              </div>
               <div class="error" v-if="!isValid">
                  Please Enter A Valid Data
              </div>
          </div>
          <div class="login-box submit-box"  v-if="submitted">
            <div>
                <p class="submitting-text"> Your Proposal Has Been Submitted </p>
            </div>
          </div>
      </div>

  </template>
  
  <script>
  import { mapActions } from 'vuex'
  import router from '@/router'
  import axios from 'axios';
  import { mapGetters } from 'vuex'
  export default {
      data(){
          return{
              isLoading:false,
               isValid:true,
               submitted:false,
               projectName:"",
               projectDescription:""
            }
      },
      computed: {
    ...mapGetters([
      'getToken',
    ])
  },
    methods:{
        ...mapActions([
        'nextIndex',
        'previousIndex'
        ]),
        submit(){
            var projectRequest={
                name:this.projectName,
                description:this.projectDescription,
                bankId:localStorage.getItem("bankId"),
                bankName:localStorage.getItem("bankName"),
            }
            console.log("Bearer "+this.getToken.accessToken)
            axios.post("https://8239-109-237-193-34.eu.ngrok.io/project",projectRequest,{
            headers:{
                "ngrok-skip-browser-warning":'',
                "Authorization":"Bearer "+this.getToken.accessToken
            }});
            this.submitted=true;
            setTimeout(()=>router.push("/"), 1500);
        }
      }
  }
  </script>
  <style scoped>
  input[type="file"] {
    display: none;
}
.custom-file-upload {
    border: 1px solid #666666;
    display: block;
    padding: 6px 12px;
    cursor: pointer;
    
}
  .atypon-logo{
      margin-bottom: -27px;
      display: flex;
      justify-content: center;
      margin-left: -8px;
  }
  .login-page{
       margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
      width: 100%;
      min-height: 100vh;
    background-image: linear-gradient(170deg, #dee2fb, #2cabef);
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -moz-flexbox;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 15px;
      z-index: 1;
  }
  .submitting-text{
    font-family: 'Montserrat', sans-serif;
    font-size:40px;
    font-weight: 700;
  }
  .submit-box{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-box {
      width: 800px;
      height: 500px;
      position: absolute;
      background-color: white;
      border-radius: 10px;
      padding: 40px;
      box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.15);
  }
  
  .title {
      font-size: 20px;
      text-align: center;
      font-weight: 600;
      color: #444444;
      margin: 20px 0 50px 0;
  }
  
  .row::after {
      content: "";
      display: table;
      clear: both;
  }
  
  .col {
      float: left;
      width: 50%;
  }
  
  .textboxtop {
      width: 90%;
      border-bottom: 1px solid #666666;
  }
  
  .textboxtop input {
      border: none;
      outline: none;
      width: 100%;
      padding: 8px 0;
      color: #333333;
      font-weight: bold;
  }
  
  .textbox {
      width: 100%;
      overflow: hidden;
      border-bottom: 1px solid #666666;
      margin: 16px 0;
  }
  
  .textbox input {
      border: none;
      outline: none;
      width: 100%;
      padding: 8px 0;
      color: #333333;
      font-weight: 600;
  }
  .button{
    display: flex;
    justify-content: space-around;
  }
  .button input {
      width: 250px;
      display: inline-block;
      border-radius: 50px;
      padding: 12px;
      border: none;
      outline: none;
      font-size: 20px;
      font-weight: 600;
      cursor: pointer;
      margin: 40px 0;
      color: white;
        background-image: linear-gradient(170deg, #355EFC, #4cc0ff);
  }
  
  .button input:hover {
      background-image: linear-gradient(170deg, #6a71a0, #2cabef);
      box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  }
  .text-blue {
    color: #2b5b7b;
  }
  .spinner-container{
      display: flex;
      justify-content: center;
      margin-top: 20px;
  }
  </style>