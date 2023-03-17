<template>
    <div>
        <div v-if="isBanker">
            <BankerPage v-if="getLoanComponentIndex==1" />
            <GeneralInfoPage v-if="getLoanComponentIndex==2" />
        </div>
        <div v-else>
            <EmploymentDetailsPage v-if="getLoanComponentIndex==1" />
            <ReferencesPage v-if="getLoanComponentIndex==2" />
            <ContactInformationPage v-if="getLoanComponentIndex==3" />
            <GeneralInfoPage v-if="getLoanComponentIndex==4" />
        </div>
    </div>
</template>

<script>
import ReferencesPage from "./non-banker/ReferencesPage.vue"
import EmploymentDetailsPage from "./non-banker/EmploymentDetailsPage.vue"
import ContactInformationPage from "./non-banker/ContactInformationPage.vue"
import BankerPage from "./banker/BankerPage.vue"
import GeneralInfoPage from "./GeneralInfoPage.vue"

import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  components:{
    ReferencesPage,EmploymentDetailsPage,ContactInformationPage,BankerPage,GeneralInfoPage
  },
  computed: {
    ...mapGetters([
      'getLoanComponentIndex',
      'isBanker'
    ])
  },
  methods:{
        ...mapActions([
        'nextIndex',
        'previousIndex'
        ]),
      
      }
}
</script>

<style>

</style>