<template>
  
   <div class="register-page">
        <div class="signup-box animated slideInDown">
             <div class="atypon-logo">
        <!-- <img src="../assets/atypontube-logo.png" style="width:170px;"> -->
    </div>
            <div class="title">
                CREATE ACCOUNT
            </div>
            <div class="row">
                <div class="col">
                    <div class="textboxtop">
                        <input type="text" placeholder="Firstname" v-model.trim="firstName">
                    </div>
                </div>
                <div class="col" align="right">
                    <div class="textboxtop">
                        <input type="text" placeholder="Lastname" v-model.trim="lastName">
                    </div>
                </div>
            </div>
            <div class="textbox">
                <input type="text" placeholder="Email" v-model.trim="user.email">
            </div>
            <div class="textbox">
                <input type="password" placeholder="Password" v-model.trim="user.password">
            </div>
            <div >
                <p style="margin-bottom:0px;">What are you ? </p>
                <div class="d-flex">
                <div >
                <input type="radio" name="radio" id="radio1" value="2" v-model.trim="user.roles[0].id"/>
                <label for="radio1" style="padding-left:5px;">Investor</label>
                </div>
                <div style="margin-left:35px">
                 <input type="radio" name="radio" id="radio1" value="3"  v-model.trim="user.roles[0].id"/>
                <label for="radio1" style="padding-left:5px;">Entrepreneur</label>
                </div>
                </div>
            </div>
             <div>
                <span style="color: #333333;font-weight: bold;">Have an account ? </span>
                <span style="color: #406c88;cursor: pointer;" @click="toLogin"> Login here</span>
            </div>
            <div class="spinner-container" v-if="isLoading">
               <div class="spinner-border text-blue" role="status"/>
               </div>
            <div class="button" align="center" @click="register" v-else>
                <input type="button" value="SIGN UP">
            </div>
            <div class="error" v-if="!isValid">
                Please Enter A Valid Data
            </div>
        </div>
    </div>



</template>

<script>
import router from '@/router'
import { mapActions } from 'vuex'
export default {
        data(){
        return{
            isLoading:false,
            firstName:'',
            lastName:'',
            isValid:true,
            user:{
                email:'',
                password:'',
                userName:'',
                roles:[
                    {
                        id:'',
                    }
                ]
            }
        }
    },
 methods:{
    ...mapActions({
        signup:'register'
    }),
        toLogin(){
            router.push('/login')
        },
        validate(){
            if(this.firstName===''||this.lastName===''||this.user.email===''||this.user.password===''){
                this.isValid=false;
            }
            if(!this.user.email.includes('@')||this.user.password.length<6){
                  this.isValid=false;
            }
            return this.isValid;
        },

        async register(){
             this.isValid=true;

            if(this.validate()){
                this.user.userName=this.firstName+" "+this.lastName;
                this.isLoading=true;
                try{
               await this.signup(this.user);
               router.push('/');
                }catch(e){
                    this.isValid=false;
                    this.user={};
                    this.firstName="";
                    this.lastName="";
                }
                this.isLoading=false;
            }
           
        }
    }
}
</script>

<style>
.atypon-logo{
        margin-bottom: -27px;
    display: flex;
    justify-content: center;
    margin-left: -8px;
}
.register-page{
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
.signup-box {
    width: 400px;
    position: absolute;
    transform: translate(-50%, -50%);
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
    margin: 20px 0 70px 0;
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

.button input {
    width: 90%;
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
.error{
    color: red;
    display: flex;
    justify-content: center;
}
</style>