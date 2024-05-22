<template>
  <v-container>
   <v-card-text>
      <ToolbarSurvey
      :step="stepper.index"
      :is-done="stepper.prevCompleted"
      @prev="stepperPrev"
      @next="stepperNext"
      />
    </v-card-text>
    <v-row dense class="mt-5">
    <v-col cols="auto" class="d-flex justify-center">
      <v-btn color="secondary" width="140" class="text-capitalize" rounded @click="next">
          <v-icon left>mdi-tag</v-icon>
          ส่งต่อ
        </v-btn>
    </v-col>
    <v-col cols="auto" class="d-flex justify-center">
      <v-btn color="secondary" width="140" class="text-capitalize" rounded @click="now">
          <v-icon left>mdi-tag</v-icon>
            ทำเลย
        </v-btn>
    </v-col>
    <v-col cols="auto" class="d-flex justify-center">
      <v-btn color="secondary" width="140" class="text-capitalize" rounded @click="later">
          <v-icon left>mdi-tag</v-icon>
           ทำภายหลัง
        </v-btn>
    </v-col>
  </v-row>
  </v-container>
</template>
<script setup>

// import RspService from '@/apis/RspService';
import ToolbarSurvey from '@/components/items/ToolbarSurvey.vue'
import { ref, onBeforeMount } from 'vue';

import { useRouter } from "vue-router";
const router = useRouter();

const stepper = ref({
  index : 2,
  prevCompleted : true
});
const state = ref(null);
const bp_number = ref(null);
const rsp_survey_id = ref(null);

onBeforeMount(() => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const done =   urlParams.get('prev_completed')

  stepper.value.completed =  (done === 'completed') ? true :false;
  state.value = urlParams.get('state')
  bp_number.value = urlParams.get('bp_number')
  rsp_survey_id.value = urlParams.get('rsp_survey_id');
});

const  stepperPrev = () => {
  console.log('prev')
}
const  stepperNext = ()=>  {
  console.log("next")
  router.push("/SDTeamMangement/Survey/Questionnaire/1?prev_completed=completed&state=created&bp_number=11&&rsp_survey_id=11");
}

const next = ()=>{}
const now = ()=>{
  router.push("/SDTeamMangement/Survey/Document/2?prev_completed=completed&state=created&bp_number=11&&rsp_survey_id=11");
}
const later = ()=>{

}

</script>

