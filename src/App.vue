<template>
  <main-header/>
  <router-view/>
</template>
<script>
import { mapGetters } from 'vuex'
import MainHeader from '../src/components/MainHeader.vue'
export default {
  components:{
    MainHeader
  },
  computed:{
    ...mapGetters([
        'isAuthenticated'
    ])
}
}
</script>
<style>
@import url('./assets/css/style.css');
@import url('./assets/css/bootstrap.min.css');

</style>
