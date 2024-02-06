<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <h2>Mangement > Survey</h2>
    <!-- <v-stepper
      v-model="stepper"
      alt-labels
      elevation="0"
      bg-color="transparent"
    >
      <v-stepper-header>
        <v-stepper-item
          value="1"
          color="secondary"
          class="text-secondary font-weight-medium"
          >ชื่อแบบสอบถาม</v-stepper-item
        >
        <v-divider></v-divider>
        <v-stepper-item
          value="2"
          color="secondary"
          class="text-secondary font-weight-medium"
          >คำถามเพิ่มเติม</v-stepper-item
        >
        <v-divider></v-divider>
        <v-stepper-item
          value="3"
          color="secondary"
          class="text-secondary font-weight-medium"
          >สร้างแบบสอบถาม</v-stepper-item
        >
        <v-divider></v-divider>
        <v-stepper-item
          value="4"
          color="secondary"
          class="text-secondary font-weight-medium"
          >สร้างเกณฑ์การประเมิน</v-stepper-item
        >
      </v-stepper-header>
    </v-stepper> -->
    <v-col color="12" style="margin-left: 150px; margin-top: 0px">
      <StepperControl
        :currentStepNumber="stepper"
        :titles="[
          'ชื่อแบบสอบถาม',
          'คำถามเพิ่มเติม',
          'สร้างแบบสอบถาม',
          'สร้างเกณฑ์การประเมิน',
        ]"
      />
    </v-col>
    <v-col cols="1">
      <v-btn color="secondary" block class="text-capitalize" rounded>
        <v-icon left>mdi-tag</v-icon>
        Save Darft
      </v-btn>
    </v-col>
    <div v-show="stepper === 1">
      <v-row justify="end" class="mt-2 mb-2"> </v-row>
      <v-card class="elevation-1">
        <v-card-text>
          <v-form ref="form">
            <v-row no-gutters dense>
              <v-col>
                <h4>ชื่อแบบสอบถาม</h4>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  variant="outlined"
                  placeholder="ชื่อแบบสอบถาม"
                  density="compact"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row no-gutters dense>
              <v-col>
                <h4>คำอธิบาย</h4>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  variant="outlined"
                  placeholder="คำอธิบาย"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
    <div v-show="stepper === 2">
      <v-form ref="suveyOtherQuestion">
        <SuveyOtherQuestion />
      </v-form>
    </div>
    <div v-show="stepper === 3">
      <SurveyQuestion ref="suveyQuestion" />
    </div>
    <div v-show="stepper === 4">
      <v-form ref="suveyScoreMgmt">
        <SuveyScoreManament />
      </v-form>
    </div>
    <div class="text-center mt-5">
      <v-btn
        rounded
        variant="outlined"
        class="ma-2"
        color="secondary"
        style="width: 100px"
        @click="back"
      >
        <strong>ย้อนกลับ</strong>
      </v-btn>
      <v-btn
        rounded
        class="ma-2"
        color="secondary"
        style="width: 100px"
        @click="next"
      >
        <strong>ต่อไป</strong>
      </v-btn>
    </div>
  </v-container>
</template>
<script setup>
import StepperControl from "@/components/controls/StepperControl.vue";
import SurveyQuestion from "@/views/SDTeamMangement/Survey/SurveyQuestion.vue";
import SuveyOtherQuestion from "@/views/SDTeamMangement/Survey/SuveyOtherQuestion.vue";
import SuveyScoreManament from "@/views/SDTeamMangement/Survey/SuveyScoreManament.vue";
import { ref } from "vue";

const stepper = ref(1);

const suveyOtherQuestion = ref();
const suveyQuestion = ref();
const suveyScoreMgmt = ref();

const next = () => {
  if (stepper.value < 4) stepper.value++;
};

const back = () => {
  if (stepper.value > 1) stepper.value--;
};
</script>
