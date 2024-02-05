<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <h2>Documents</h2>

    <v-row>
      <v-col :cols="tab === 1 ? 12 : 10">
        <v-tabs v-model="tab" color="secondary">
          <v-tab v-for="(tabs, index) in menus" :key="index" class="text-capitalize">
            {{ tabs.title }}
          </v-tab>
        </v-tabs>
      </v-col>
      <v-col v-if="tab != 1"  cols="2">
        <v-btn class="me-2 text-none"
        block
        color="secondary"
        variant="flat"
        rounded
        @click="getExportRspPolicyByVendor()">
        <v-icon left class="mr-3">mdi-text-box-check</v-icon>
          Export report
        </v-btn>
      </v-col>
    </v-row>
    <v-tabs-items>
      <v-tab-item>
        <v-card elevation="2" rounded="0" class="rounded-lg mt-3" v-for="(i, index) in items" :key="index">
          <v-card-item class="ma-0">
            <v-row no-gutters dense justify="space-around">
              <v-col cols="1" align-self="center" class="pa-1">
                <v-icon color="secondary" size="40" class="ml-3 mr-3">mdi-text-box-check</v-icon>
              </v-col>
              <v-col cols="4" align-self="center" class="pa-1">
                <strong>นโยบายการจัดซื้อจัดจ้างอย่างรับผิดชอบ</strong>
                <strong class="text-grey">(V.4)</strong>
              </v-col>
              <v-divider vertical class="ma-2"></v-divider>
              <v-col :cols="tab === 1 ? 3 : 6" align-self="center" class="pa-1">
                <strong>Complated by</strong>
                <br />
                <strong class="text-secondary">test@gmail.com</strong>
                <strong class="">: {{ dateUtils.parseDdMmYyWithTimeAndSeconds(i.created_at) }}</strong>
              </v-col>
              <v-col v-if="tab === 1" cols="3" align-self="center" class="pa-1">
                <v-btn class="me-2 text-none" color="secondary"
                  :to="`/SDTeamDashboard/AttachFileSurvey?bp_number=${1}&rsp_suvery_id=${1}`" variant="outlined" rounded>
                  Attach File Survey
                </v-btn>
                <v-btn class="me-2 text-none" color="secondary" variant="flat" rounded
                  @click="getExportRspSurveyByVendor(i.id)">
                  Export Results
                </v-btn>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>
<script setup>
/*eslint-disable no-unused-vars  */
import { ref, onBeforeMount, onMounted, watch } from 'vue';
import rspService from '@/apis/RspService';
import exportService from '@/apis/ExportService';
import dateUtils from '@/utils/dateUtils';
import { useErrorHandlingDialog } from '@/components/dialogs/ExceptionHandleDialogService'
const { handlingErrorsMessage } = useErrorHandlingDialog();

const tab = ref(null);
const menus = ref([]);
const items = ref([]);
const loading = ref(false);
const bp_number = ref(null);
const mock_data = [
  {
    "id": 1,
    "bp_number": "BP12345",
    "rsp_survey_id": 101,
    "rsp_activity_status": {
      "id": 1,
      "name": "completed"
    },
    "inprogress_section_id": 3,
    "progress_percentage": 100,
    "evaluation": {
      "id": 201,
      "rsp_survey_id": 101,
      "name": "Performance Evaluation",
      "minimum_score_criteria": 70,
      "description": "Evaluation of RSP performance",
      "image_url": "https://example.com/performance_image.jpg"
    },
    "score": 85,
    "is_aligned": 1,
    "created_at": "2023-11-10T14:20:12",
    "created_user_id": 789,
    "updated_at": "2023-11-12T10:15:30",
    "updated_user_id": 567,
    "completed_at": "2023-11-12T10:30:45",
    "completed_user_id": 123
  },
  {
    "id": 2,
    "bp_number": "BP67890",
    "rsp_survey_id": 102,
    "rsp_activity_status": {
      "id": 2,
      "name": "inprogress"
    },
    "inprogress_section_id": 2,
    "progress_percentage": 50,
    "evaluation": {
      "id": 202,
      "rsp_survey_id": 102,
      "name": "Quality Evaluation",
      "minimum_score_criteria": 80,
      "description": "Evaluation of RSP quality",
      "image_url": "https://example.com/quality_image.jpg"
    },
    "score": 75,
    "is_aligned": 0,
    "created_at": "2023-11-11T09:45:30",
    "created_user_id": 567,
    "updated_at": "2023-11-13T14:40:20",
    "updated_user_id": 789,
    "completed_at": null,
    "completed_user_id": null
  }
]
watch(tab, (newValue) => {
  switch (newValue) {
    case 0:
      getRspPolicyResults(bp_number.value);
      break;

    case 1:
      getRspSurveyResults(bp_number.value);
      break;

  }
});
onBeforeMount(() => {
  menus.value = [
    { title: 'RSP Policy', icon: 'mdi-account-outline' },
    { title: 'Survey', icon: 'mdi-link-variant' }
  ]
});
onMounted(() => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  bp_number.value = urlParams.get('bp_number');

  getRspPolicyResults(bp_number.value);
});

const getRspPolicyResults = async (bp_number) => {
  try {
    loading.value = true;
    const response = await rspService.getRspPolicyResults(bp_number);
    if (response.data?.is_success) {
      items.value = response.data?.data
    }
  } catch (e) {
    if (e.response) {
      const val = e.response.data
      handlingErrorsMessage(val.message, val?.data.error);
      return;
    }
    handlingErrorsMessage("unknown", e.message);
  } finally {
    loading.value = false;
  }
}
const getRspSurveyResults = async (bp_number) => {
  try {
    loading.value = true;
    const response = await rspService.getRspSurveyResults(bp_number);
    if (response.data?.is_success) {
      items.value = response.data?.data
    }
  } catch (e) {
    if (e.response) {
      const val = e.response.data
      handlingErrorsMessage(val.message, val?.data.error);
      return;
    }
    handlingErrorsMessage("unknown", e.message);
  } finally {
    loading.value = false;
  }
}

const getExportRspPolicyByVendor = async () => {
  try {
    const response = await rspService.getExportRspPolicyByVendor(bp_number.value);
    if (response.data?.is_success) {
      const file_url = response.data?.data?.file_url
      await exportService.exportBase64(`policy-${bp_number.value}`, 'PDF', file_url);
    }
  } catch (e) {
    if (e.response) {
      const val = e.response.data
      handlingErrorsMessage(val.message, val?.data.error);
      return;
    }
    handlingErrorsMessage("unknown", e.message);
  }
}
const getExportRspSurveyByVendor = async (rsp_survey_id) => {
  try {
    const response = await rspService.getExportRspSurveyByVendor(rsp_survey_id);
    if (response.data?.is_success) {
      const file_url = response.data?.data?.file_url
      await exportService.exportBase64(`survey-${rsp_survey_id}`, 'PDF', file_url);
    }
  } catch (e) {
    if (e.response) {
      const val = e.response.data
      handlingErrorsMessage(val.message, val?.data.error);
      return;
    }
    handlingErrorsMessage("unknown", e.message);
  }
}
// const handleExportFile =async (name,type,url)=>{
//   try {
//      await exportService.exportBase64(name,type,url);
//   } catch (e) {

//     handlingErrorsMessage("unknown", e.message);
//   }
// }

</script>

