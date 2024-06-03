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
        <v-btn
          color="secondary"
          width="140"
          class="text-capitalize"
          rounded
          @click="next"
        >
          <v-icon left>mdi-tag</v-icon>
          ส่งต่อ
        </v-btn>
      </v-col>
      <v-col cols="auto" class="d-flex justify-center">
        <v-btn
          color="secondary"
          width="140"
          class="text-capitalize"
          rounded
          @click="now"
        >
          <v-icon left>mdi-tag</v-icon>
          ทำเลย
        </v-btn>
      </v-col>
      <v-col cols="auto" class="d-flex justify-center">
        <v-btn
          color="secondary"
          width="140"
          class="text-capitalize"
          rounded
          @click="later"
        >
          <v-icon left>mdi-tag</v-icon>
          ทำภายหลัง
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
// import RspService from '@/apis/RspService';
import ToolbarSurvey from "@/components/items/ToolbarSurvey.vue";
// import TestQuestion2 from "@/assets/form2.json";
import TestQuestion3 from "@/assets/form3.json";
// eslint-disable-next-line no-unused-vars
import { ref, onBeforeMount } from "vue";
import ApiQuestionaire from "@/assets/question_api_data.json";

import { useRouter } from "vue-router";
import mapperSurvay from "@/utils/mapperSurvay";
const router = useRouter();

const stepper = ref({
  index: 3,
  prevCompleted: true,
});

// const state = ref(null);
// const bp_number = ref(null);
// const rsp_survey_id = ref(null);

onBeforeMount(() => {
  // const queryString = window.location.search;
  // const urlParams = new URLSearchParams(queryString);
  // state.value = urlParams.get('state')
  // bp_number.value = urlParams.get('bp_number')
  // rsp_survey_id.value = urlParams.get('rsp_survey_id')
  // setInfo();
});

const stepperPrev = () => {
  console.log("prev");
  router.push(
    "/SDTeamMangement/Survey/Document/1?prev_completed=completed&state=created&bp_number=01707129375000&&rsp_survey_id=4"
  );
};
const stepperNext = () => {
  console.log("next");
};

const next = () => {};
const now = () => {
  setInfo();
  router.push(
    "/SDTeamMangement/Survey/Questionnaire/2?prev_completed=completed&state=created&bp_number=01707129375000&&rsp_survey_id=4"
  );
};
const later = () => {};
const setInfo = () => {
  const { mySurvayStructureTwo, mySurvayStructureThree } =
    mapperSurvay.MapperSurvay(ApiQuestionaire.data);
  sessionStorage.setItem(
    "questionnaire2",
    JSON.stringify(mySurvayStructureTwo)
  );
  // console.log(JSON.stringify(mySurvayStructureThree))
  sessionStorage.setItem(
    "questionnaire3",
    JSON.stringify(mySurvayStructureThree)
  );
};
</script>
