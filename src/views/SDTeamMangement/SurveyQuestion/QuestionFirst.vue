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
    <v-card>
      <v-card-item class="ml-15">
        <v-row dense class="mt-5">
          <v-col cols="6">
            <h2>Vender sustainability assessment survey</h2>
            <h3>นโยบายการจัดซื้อจัดจ้างอย่างรับผิดชอบ</h3>
            <br />
            <h5>บริษัท เฟรเซฮร์ พร๊อพเพอร์ตี้ ขอสื่อสารนโยบายจัดซื้อจัดจ้าง</h5>
            <h5>
              อย่างรับผิดชอบ
              ซึ่งได้จัดทำขึ้นและยึดถือเป็นความยั่งยืนในการกิจกรรม
            </h5>
            <h5>
              ดำเนิน ต่อผู้มีส่วนเกี่ยวข้องต่างขององค์กร อันรวมถึงคู่ค้า ผู้ขาย
            </h5>
            <h5>
              และผู้รับเหมาช่วงของเรา
              ซึ่งได้ทางเรามีความคาดหวังที่จะขยายความยั่งยืน
            </h5>
            <h5>ในการดำเนินงานนี้ ไปยังคู่ของเราต่อไป</h5>
            <br />
            <h5>
              ทางเราจึงขอให้ท่านรับทราบและศึกษานโยบายการจัดจ้างอย่างรับผิดชอบนี้
            </h5>
            <h5 style="color: red">
              สามารถส่งต่อ Email หรือ Link ให้ผู้ร่วมงานอื่นรับผิดชอบได้
            </h5>
            <br />
            <br />
          </v-col>
          <v-col cols="6" class="d-flex align-center">
            <img
              src="../../../assets/logo.png"
              aspect-ratio="16/9"
              cover
              width="300"
              height="200"
            />
          </v-col>
        </v-row>
        <v-row dense class="mt-5">
          <v-col cols="auto" class="d-flex justify-center">
            <v-btn
              color="secondary"
              width="140"
              class="text-capitalize"
              variant="outlined"
              rounded
              @click="next"
            >
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
              ทำเลย
            </v-btn>
          </v-col>
          <v-col cols="12" class="d-flex justify-end">
            <v-btn
              width="140"
              class="text-capitalize"
              rounded
              variant="text"
              @click="later"
            >
              ทำภายหลัง >>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card>
  </v-container>
</template>
<script setup>
// import RspService from '@/apis/RspService';
import ToolbarSurvey from "@/components/items/ToolbarSurvey.vue";
// import TestQuestion2 from "@/assets/form2.json";
// import TestQuestion3 from "@/assets/form3.json";
import { ref, onBeforeMount, onMounted } from "vue";
// import ApiQuestionaire from "@/assets/question_api_data.json";

import { useErrorHandlingDialog } from "@/components/dialogs/ExceptionHandleDialogService";
const { handlingErrorsMessage } = useErrorHandlingDialog();

const { showShareActivityDialog } = useShareActivityDialog();

import { useRouter } from "vue-router";
import mapperSurvay from "@/utils/mapperSurvay";
import RspService from "@/apis/RspService";
import { useShareActivityDialog } from "@/components/dialogs/ShareActivityDialogService";
const router = useRouter();

const stepper = ref({
  index: 3,
  prevCompleted: true,
});

const state = ref(null);
const bp_number = ref(null);
const rsp_survey_id = ref(null);

const questionnaireData = ref(null);
const rspSurvayActive = ref(null);
const answerQuestionnaireData = ref(null);
const rspActivityStatusId = ref(null);
const inprogressSectionId = ref(null);

onBeforeMount(() => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  state.value = urlParams.get("state");
  bp_number.value = urlParams.get("bp_number");
  // rsp_survey_id.value = urlParams.get("rsp_survey_id");
});

onMounted(async () => {
  await getRspSurveysActive();
  await getRspSurveyResults();
});

const getRspSurveysActive = async () => {
  try {
    const response = await RspService.getRspSurveysActive();
    if (response.data?.is_success) {
      if (response.data?.data && response.data.data.length > 0) {
        rspSurvayActive.value = response.data.data[0];
        rsp_survey_id.value = response.data.data[0].id;
      }
    }
  } catch (e) {
    if (e.response) {
      const val = e.response.data;
      handlingErrorsMessage(val.message, val?.data?.error);
      return;
    }
    handlingErrorsMessage("unknown", e.message);
  }
};

const getRspSurveyResults = async () => {
  try {
    const response = await RspService.getRspSurveyResults(
      bp_number.value,
      rsp_survey_id.value
    );
    if (response.data?.is_success) {
      if (response.data?.data && response.data.data.length > 0) {
        rspActivityStatusId.value =
          response.data.data[0].rsp_activity_status.id;
        inprogressSectionId.value = response.data.data[0].inprogress_section_id;
        if (response.data.data[0].rsp_activity_status.id != 3) {
          // Got to Question
        }
      }
    }
  } catch (e) {
    if (e.response) {
      const val = e.response.data;
      handlingErrorsMessage(val.message, val?.data?.error);
      return;
    }
    handlingErrorsMessage("unknown", e.message);
  }
};

const getRspQuestionnaire = async () => {
  try {
    const response = await RspService.getRspSurveyQuestionaire(
      rsp_survey_id.value
    );
    if (response.data?.is_success) {
      questionnaireData.value = response.data.data;
    }
  } catch (e) {
    if (e.response) {
      const val = e.response.data;
      handlingErrorsMessage(val.message, val?.data?.error);
      return;
    }
    handlingErrorsMessage("unknown", e.message);
  }
};

const createRspActivitySkippedLog = async () => {
  try {
    await RspService.createRspActivityLog(bp_number.value, 2, true);
    router.push(
      `/SDTeamMangement/Survey/Tranning/1?prev_completed=completed&state=created&bp_number=${bp_number.value}&rsp_survey_id=${rsp_survey_id.value}`
    );
  } catch (e) {
    if (e.response) {
      const val = e.response.data;
      handlingErrorsMessage(val.message, val?.data?.error);
      return;
    }
    handlingErrorsMessage("unknown", e.message);
  }
};

const createRspActivityLog = async () => {
  try {
    await RspService.createRspActivityLog(bp_number.value, 2, false);
  } catch (e) {
    if (e.response) {
      const val = e.response.data;
      handlingErrorsMessage(val.message, val?.data?.error);
      return;
    }
    handlingErrorsMessage("unknown", e.message);
  }
};

const createRspSurveyResult = async () => {
  try {
    const response = await RspService.createRspSurveyResult(
      bp_number.value,
      rsp_survey_id.value
    );
    if (response.data?.is_success) {
      questionnaireData.value = response.data.data;
    }
  } catch (e) {
    if (e.response) {
      const val = e.response.data;
      handlingErrorsMessage(val.message, val?.data?.error);
      return;
    }
    handlingErrorsMessage("unknown", e.message);
  }
};

const getRspSurveyAnswers = async () => {
  try {
    const response = await RspService.getRspSurveyAnswers(
      bp_number.value,
      rsp_survey_id.value
    );
    if (response.data?.is_success) {
      answerQuestionnaireData.value = response.data.data;
    }
  } catch (e) {
    if (e.response) {
      const val = e.response.data;
      handlingErrorsMessage(val.message, val?.data?.error);
      return;
    }
    handlingErrorsMessage("unknown", e.message);
  }
};

const stepperPrev = () => {
  console.log("prev");
  router.push(
    `/SDTeamMangement/Survey/Document/1?prev_completed=completed&state=${state.value}&bp_number=${bp_number.value}`
  );
};

const stepperNext = () => {
  console.log("next");
  router.push(
    `/SDTeamMangement/Survey/Tranning/1?prev_completed=completed&state=created&bp_number=${bp_number.value}`
  );
};

const next = async () => {
  const result = await showShareActivityDialog(bp_number.value);
  if (result && result.email) {
    // call api share activity
    console.log(result);
  }
};

const now = async () => {
  await createRspActivityLog();
  if (rspSurvayActive.value != 2) {
    await createRspSurveyResult();
    await getRspQuestionnaire();
  } else {
    await getRspQuestionnaire();
    await getRspSurveyAnswers();
  }
  setInfo();
  router.push(
    `/SDTeamMangement/Survey/Questionnaire/2?prev_completed=completed&state=${state.value}&bp_number=${bp_number.value}&rsp_survey_id=${rsp_survey_id.value}`
  );
};

const later = async () => {
  await createRspActivitySkippedLog();
};

const setInfo = () => {
  const { mySurvayStructureTwo, mySurvayStructureThree } =
    mapperSurvay.MapperSurvay(
      questionnaireData.value,
      rspSurvayActive.value,
      rspActivityStatusId.value,
      inprogressSectionId.value
    );
  sessionStorage.setItem(
    "questionnaire2",
    JSON.stringify(mySurvayStructureTwo)
  );

  sessionStorage.setItem(
    "questionnaire3",
    JSON.stringify(mySurvayStructureThree)
  );
};
</script>
