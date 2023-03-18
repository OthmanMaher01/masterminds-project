<template>
  <div class="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src="../assets/images/mu.png" alt="Image">
                    <div class="carousel-caption">
                        <div class="container">
                            <div class="row justify-content-start">
                                <div class="col-lg-8">
                                    <h1 class="display-3 mb-4 animated slideInDown">Let's get started and find the perfect loan for you</h1>
                                    <!-- HAMZA NOTICE ME SENPAI -->
                                    <div class="d-flex justify-content-evenly">
                                    <router-link to="/loan" class="btn btn-primary py-3 px-5 animated slideInDown " @click="toBanker">Bank User</router-link>
                                    <router-link to="/loan" class="btn btn-outline-primary py-3 px-5 animated slideInDown " @click="toNonBanker" >New To Bank</router-link>

                               
                                    </div>
                                    
                                     </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            isLoading:false,
             isValid:true,
            user:{
                email:'',
                password:'',
            }
        }
    },
    methods:{
         ...mapActions([
            'resetIndex',
            'setIsBanker'
         ]),
        toBanker(){
            this.resetIndex();
            this.setIsBanker(true);
        },
        toNonBanker(){
            this.resetIndex();
            this.setIsBanker(false);
        }
    }

}
</script>

<style>
@import url('../assets/css/style.css');
@import url('../assets/css/bootstrap.min.css');
@import url('../assets/css/animate.css');
@import url('../assets/css/animate.min.css');
</style>