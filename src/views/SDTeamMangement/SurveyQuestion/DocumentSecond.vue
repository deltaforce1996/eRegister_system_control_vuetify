<!-- eslint-disable vue/multi-word-component-names -->

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
    <v-card-text>
      <div v-if="done" class="d-flex flex-row-reverse mb-5">
        <v-btn
          class="me-2 text-none"
          color="secondary"
          prepend-icon="mdi-download"
          variant="flat"
          height="40"
          rounded
          @click="handleDowload"
        >
          Download
        </v-btn>
        <v-btn
          class="me-2 text-none"
          color="secondary"
          prepend-icon="mdi-reply-outline"
          variant="outlined"
          height="40"
          rounded
          @click="handleShareActivity"
        >
          ส่งต่อ
        </v-btn>
      </div>
      <div v-else class="d-flex flex-row-reverse mb-5">
        <v-btn
          class="me-2 text-none"
          color="secondary"
          prepend-icon="mdi-reply-outline"
          variant="outlined"
          height="40"
          rounded
          @click="handleShareActivity"
        >
          ส่งต่อ
        </v-btn>
      </div>
      <PDF :src="fileBase64"></PDF>
    </v-card-text>
    <v-bottom-navigation
      :active="!done"
      v-show="!done"
      height="180"
      bg-color="rgba(0, 0, 0, 0.8)"
    >
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="auto" class="d-flex align-center">
            <b class="text-white text-subtitle-1">ชื่อข้าพเจ้า</b>
          </v-col>
          <v-col cols="auto" class="d-flex align-center mt-5">
            <v-radio-group v-model="prefixName" inline>
              <v-radio
                label="นาย"
                value="นาย"
                class="text-white text-subtitle-1"
              ></v-radio>
              <v-radio
                label="นาง"
                value="นาง"
                class="text-white text-subtitle-1"
              ></v-radio>
              <v-radio
                label="นางสาว"
                value="นางสาว"
                class="text-white text-subtitle-1"
              ></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="auto" class="d-flex align-center mt-5">
            <v-text-field
              style="width: 300px"
              density="compact"
              bg-color="white"
              variant="outlined"
            >
            </v-text-field>
          </v-col>
          <v-col cols="auto" class="d-flex align-center">
            <b class="text-white text-subtitle-1">นามสกุล</b>
          </v-col>
          <v-col cols="auto" class="d-flex align-center mt-5">
            <v-text-field
              style="width: 300px"
              density="compact"
              bg-color="white"
              variant="outlined"
            >
            </v-text-field>
          </v-col>
          <v-col cols="auto" class="d-flex align-center">
            <b class="text-white text-subtitle-1"
              >รับทราบและจะดำเนินการตามที่ระบุ</b
            >
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="auto" class="d-flex align-center">
            <v-btn
              class="text-capitalize"
              @click="handleConfirm"
              rounded
              style="background-color: #ed1c24"
              height="35"
            >
              <span class="text-white text-subtitle-1"> รับทราบ</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-bottom-navigation>
  </v-container>
</template>
<script setup>
import PDF from "pdf-vue3";
//import pdf from 'vue-pdf'
//import file from "@/assets/base64.json";
import { Base64 } from 'js-base64'
import { saveAs } from 'file-saver'
import ToolbarSurvey from "@/components/items/ToolbarSurvey.vue";
import { useConfirmationDialog } from "@/components/dialogs/ConfirmationDialogService";

import { useRouter } from "vue-router";
const router = useRouter();

const { showDialog } = useConfirmationDialog();
import { ref, onBeforeMount, onMounted } from "vue";

const { showShareActivityDialog } = useShareActivityDialog();

const done = ref(false);
const prefixName = ref(null);
const fileBase64 = ref(null);

import axios from "axios";
import { useShareActivityDialog } from "@/components/dialogs/ShareActivityDialogService";

const stepper = ref({
  index: 2,
  prevCompleted: true,
});
const state = ref(null);
const bp_number = ref(null);
// const rsp_survey_id = ref(null);
// const isHide = ref(false);

onBeforeMount(() => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const doneParam = urlParams.get("prev_completed");
  stepper.value.completed = doneParam === "completed" ? true : false;
  done.value = stepper.value.completed;
  state.value = urlParams.get("state");
  bp_number.value = urlParams.get("bp_number");
  // rsp_survey_id.value = urlParams.get("rsp_survey_id");
  // if (urlParams.get("isHide") == 1) isHide.value = true;
});

onMounted(() => {
  getUrlArraybuffer();
});

const getUrlArraybuffer = async () => {
  const response = await axios({
    method: "get",
    responseType: "arraybuffer",
    url: sessionStorage.getItem("file_url"), // /*"https://uwaterloo.ca/onbase/sites/ca.onbase/files/uploads/files/sampleunsecuredpdf.pdf"*/,
  });
  // sessionStorage.getItem("file_url")
  sessionStorage.removeItem("file_url");
  var base64 = arrayBufferToBase64(response.data);
  fileBase64.value = base64;
};


const arrayBufferToBase64 = (buffer) => {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  bytes.forEach((item) => {
    binary += String.fromCharCode(item);
  });
  return window.btoa(binary);
};
const handleShareActivity = async () => {
  const result = await showShareActivityDialog(bp_number.value);
  if (result && result.email) {
    // call api share activity
    console.log(result);
  }
};
const handleDowload = ()=>{
    const { value } = fileBase64
    const decode = Base64.toUint8Array(value)
    const blob = new Blob([decode], { type: 'pdf' })
   saveAs(blob, bp_number.value+".pdf")
}
const stepperPrev = () => {
  console.log("prev");
};
const stepperNext = () => {
  console.log("next");
  router.push(
    `/SDTeamMangement/Survey/Questionnaire/1?prev_completed=completed&state=created&bp_number=${bp_number.value}`
  );
};
const handleConfirm = async () => {
  const confirmed = await showDialog(
    "ยืนยันรับทราบเอกสาร?",
    'กรุณาตรวจสอบคลิกปุ่ม "ตกลง" เพื่อดำเนินการ'
  );
  if (confirmed) {
    console.log("Confirm");
    router.push(
      `/SDTeamMangement/Survey/Questionnaire/1?prev_completed=completed&state=created&bp_number=${bp_number.value}`
    );
  }
};
</script>
