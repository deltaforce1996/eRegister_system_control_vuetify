<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <h2>Documents</h2>
    <v-tabs v-model="tab" color="secondary">
      <v-tab v-for="(tabs, index) in items" :key="index" class="text-capitalize">
        {{ tabs.title }}
      </v-tab>
    </v-tabs>
    <v-tabs-items>
      <v-tab-item>
        <v-card elevation="2" rounded="0" class="rounded-lg mt-3" v-for="i in 5" :key="i">
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
                <strong class="">: 2020-04-05 12:11</strong>
              </v-col>
              <v-col v-if="tab === 1" cols="3" align-self="center" class="pa-1">
                <v-btn class="me-2 text-none" color="secondary" to="/SDTeamDashboard/AttachFileSurvey" variant="outlined"
                  rounded>
                  Attach File Survey
                </v-btn>
                <v-btn class="me-2 text-none" color="secondary" variant="flat" rounded>
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
import { ref, onBeforeMount } from 'vue';

const tab = ref(null);
const items = ref([]);
const mock_data =   [
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


onBeforeMount(() => {
  items.value = [
    { title: 'RSP Policy', icon: 'mdi-account-outline' },
    { title: 'Survey', icon: 'mdi-link-variant' }
  ]

});

</script>

