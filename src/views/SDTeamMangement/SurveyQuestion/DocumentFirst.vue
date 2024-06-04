<template>
  <v-container style="padding: auto">
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
          <v-col cols="5">
            <h2>Responsible sourcing policy</h2>
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
          <v-col cols="7" class="d-flex align-center">
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
import RspService from "@/apis/RspService";
import ToolbarSurvey from "@/components/items/ToolbarSurvey.vue";
import { ref, onBeforeMount, onMounted } from "vue";

import { useErrorHandlingDialog } from "@/components/dialogs/ExceptionHandleDialogService";
const { handlingErrorsMessage } = useErrorHandlingDialog();

import { useRouter } from "vue-router";
const router = useRouter();

const stepper = ref({
  index: 2,
  prevCompleted: true,
});
const state = ref(null);
const bp_number = ref(null);
const rsp_survey_id = ref(null);
const activated_laoding = ref(true);

onBeforeMount(() => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const done = urlParams.get("prev_completed");

  stepper.value.completed = done === "completed" ? true : false;
  state.value = urlParams.get("state");
  bp_number.value = urlParams.get("bp_number");
  rsp_survey_id.value = urlParams.get("rsp_survey_id");
});

onMounted(async () => {
  await getRspPolicyState();
  await getRspPolicyResults(bp_number.value, rsp_survey_id.value);
});

const getRspPolicyState = async () => {
  try {
    activated_laoding.value = true;
    const response = await RspService.getRspPolicyState("active");
    if (response.data?.is_success) {
      if (response.data?.data && response.data.data.length > 0)
        sessionStorage.setItem("file_url", response.data.data[0]?.file_url);
    }
  } catch (e) {
    if (e.response) {
      const val = e.response.data;
      handlingErrorsMessage(val.message, val?.data?.error);
      return;
    }
    handlingErrorsMessage("unknown", e.message);
  } finally {
    activated_laoding.value = false;
  }
};

const getRspPolicyResults = async (bp_number, rsp_policy_id) => {
  try {
    activated_laoding.value = true;
    const response = await RspService.getRspPolicyResults(
      bp_number,
      rsp_policy_id
    );
    if (response.data?.is_success) {
      if(response.data.data && response.data.data.length > 0) {
        now();
      }else{
        now();
      }
    }
  } catch (e) {
    if (e.response) {
      const val = e.response.data;
      handlingErrorsMessage(val.message, val?.data?.error);
      return;
    }
    handlingErrorsMessage("unknown", e.message);
  } finally {
    activated_laoding.value = false;
  }
};

const stepperPrev = () => {
  console.log("prev");
};
const stepperNext = () => {
  console.log("next");
  router.push(
    `/SDTeamMangement/Survey/Questionnaire/1?prev_completed=completed&state=created&bp_number=${bp_number.value}&&rsp_survey_id=${rsp_survey_id.value}`
  );
};

const next = () => {};
const now = () => {
  router.push(
    `/SDTeamMangement/Survey/Document/2?prev_completed=completed&state=created&bp_number=${bp_number.value}&&rsp_survey_id=${rsp_survey_id.value}`
  );
};
const later = () => {};
</script>
