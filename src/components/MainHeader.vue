<template>
 <!-- Favicon -->
    <link href="img/favicon.ico" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700&family=Open+Sans:wght@400;500&display=swap" rel="stylesheet">  

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">
    <!-- Spinner Start -->
    <!-- <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;"></div>
    </div> -->
    <!-- Spinner End -->


    <!-- Navbar Start -->
    <div class="container-fluid static-top px-0 wow fadeIn" data-wow-delay="0.1s" :class="{'bg-white':!isAuthenticated}" style="postion:absolute">
        <nav class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <router-link to="/" href="index.html" class="navbar-brand ms-4 ms-lg-0">
                <!-- <h1 class="display-5 text-primary m-0">Tamweelk</h1> -->
                <img src="../assets/images/tmlogo.png" alt="" style="width:126px">
            </router-link>
            <!-- <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button> -->
            <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                <!-- <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="index.html" class="nav-item nav-link active">Home</a>
                    <a href="about.html" class="nav-item nav-link">About</a>
                    <a href="service.html" class="nav-item nav-link" v-if="isAuthenticated">Services</a>
    
                 
                    <a href="contact.html" class="nav-item nav-link">Contact</a>
                                        <a href="service.html" class="nav-item nav-link" v-if="!isAuthenticated">Login</a>
                            <a href="service.html" class="nav-item nav-link" v-if="!isAuthenticated">Signup</a>
                       <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" v-if="isAuthenticated">Pages</a>
                        <div class="dropdown-menu border-light m-0">
                            <a href="project.html" class="dropdown-item">Projects</a>
                            <a href="feature.html" class="dropdown-item">Features</a>
                            <a href="team.html" class="dropdown-item">Team Member</a>
                            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                            <a href="404.html" class="dropdown-item">404 Page</a>
                        </div>
                    </div>
                </div> -->
                <div class="d-none d-lg-flex ms-2">
                    <a class="btn btn-light btn-md-square rounded-circle ms-3" href="">
                        <small class="fab fa-facebook-f text-primary"></small>
                    </a>
                    <a class="btn btn-light btn-md-square rounded-circle ms-3" href="">
                        <small class="fab fa-twitter text-primary"></small>
                    </a>
                    <a class="btn btn-light btn-md-square rounded-circle ms-3" href="">
                        <small class="fab fa-linkedin-in text-primary"></small>
                    </a>
                     <button class="btn btn-light btn-md-square rounded-circle ms-3" href="" v-if="isAuthenticated" @click="toProfile">
                        <large class="bi bi-person-circle text-primary"></large>
                    </button>
                     <button class="btn btn-light btn-md-square rounded-circle ms-3" href="" v-if="isAuthenticated" @click="logout">
                        <large class="bi bi-box-arrow-right text-primary"></large>
                    </button>
                </div>
            </div>
        </nav>
    </div>
    <!-- Navbar End -->

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
 computed:{
    ...mapGetters([
        'isAuthenticated'
    ])
},
    methods:{
        ...mapActions([
                  'logout',
                  'toProfile'
        ])
    }
}
</script>

<style>
@import url('../assets/css/style.css');
@import url('../assets/css/bootstrap.min.css');
@import url('../assets/css/animate.css');
@import url('../assets/css/animate.min.css');

</style>