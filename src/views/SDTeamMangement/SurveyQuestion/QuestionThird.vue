<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <v-card-text>
      <ToolbarSurvey :step="4" />
    </v-card-text>
    <v-card-title class="text-center">
          <b>{{sectionsHeader.title}}</b>
    </v-card-title>
    <div class="text-center mt-5">
      <v-row>
        <v-col cols="8" class="d-flex">
          <h3>{{ convertNo(sections?.id) }}.{{ sections?.title }}</h3>
        </v-col>
        <v-col cols="4" class="d-flex justify-end">
          <v-btn color="secondary" variant="outlined" width="140" class="text-capitalize mr-2" rounded>
            <v-icon left>mdi-share</v-icon>
            ส่งต่อ
          </v-btn>
          <v-btn color="secondary" width="140" class="text-capitalize" rounded>
            <v-icon left>mdi-tag</v-icon>
            Save Darft
          </v-btn>
        </v-col>
      </v-row>

    </div>

    <div v-for="(item, index) in sections.data" :key="index">
        <div v-if="item?.data?.controlType === 'Paragraph'" class="mt-2">
          <v-card elevation="1">
            <v-card-title>
              {{index+1}}.{{ item?.data?.metaData?.question }}
              <span v-if="item?.data?.metaData?.isRequired" class="text-red">*</span>
            </v-card-title>
            <v-card-text>
              <v-text-field
                  v-model ="item.data.metaData.answer"
                  density="compact"
                  variant="outlined">
                </v-text-field>
            </v-card-text>
          </v-card>
        </div>
        <div v-else-if="item?.data?.controlType === 'Multichoice'" class="mt-2">
          <v-card elevation="1">
            <v-card-title>
              {{convertNo(index)}}.{{ item?.data?.metaData?.question }}
              <span v-if="item?.data?.metaData?.isRequired" class="text-red">*</span>
            </v-card-title>
            <v-card-text class="pt-8">
              <v-radio-group v-model="item.data.metaData.answer">
                  <div v-for="(choice, i) in item?.data?.metaData?.choices"  :key="i">
                      <v-radio v-if="choice.title === 'other'" :value="choice.specify" class="mt-n2">
                          <template v-slot:label>
                            <div v-if="choice.title === 'other'" class="pa-1" >
                              <div class="d-flex flex-row  align-center">
                              <span> {{choice.answer}}</span>
                                <v-text-field
                                  v-model="choice.specify"
                                    style="max-width: 500px; min-width: 300px;"
                                    class="mt-5 ml-5"
                                    density="compact"
                                    @input="item.data.metaData.answer = choice.specify"
                                    variant="outlined">
                                  </v-text-field>
                              </div>
                            </div>
                            <div v-else class="pa-1">{{choice.answer}}</div>
                          </template>
                    </v-radio>
                    <v-radio v-else
                        :label="choice.answer"
                        :value="choice.answer">
                    </v-radio>
                  </div>

              </v-radio-group>
            </v-card-text>
          </v-card>
        </div>
        <div v-else-if="item?.data?.controlType === 'Checkbox'" class="mt-2">
          <v-card elevation="1">
            <v-card-title>
              {{convertNo(index)}}.{{ item?.data?.metaData?.question }}
              <span v-if="item?.data?.metaData?.isRequired" class="text-red">*</span>
            </v-card-title>
            <v-card-text class="pt-8">
              <div  v-for="(choice, i) in item?.data?.metaData?.choices"  :key="i">
                <v-checkbox v-model="item.data.metaData.answer" :value="choice.specify"
                    v-if="choice.title === 'other'" class="mt-n10">
                    <template v-slot:label>
                            <div class="d-flex flex-row  align-center">
                            <span> {{choice.answer}}</span>
                              <v-text-field
                                  v-model="choice.specify"
                                  style="max-width: 500px; min-width: 300px;"
                                  class="mt-5 ml-5"
                                  density="compact"
                                  @input="onCheckboxOther(item.data.metaData.choices,item.data.metaData.answer,choice.specify)"
                                  variant="outlined">
                                </v-text-field>
                            </div>
                    </template>
                  </v-checkbox>
                <v-checkbox
                  v-if="choice.title === 'chioce'"
                  v-model="item.data.metaData.answer"
                  class="mt-n10"
                  :label="choice.answer"
                  :value="choice.answer"
                ></v-checkbox>
              </div>
            </v-card-text>
          </v-card>
        </div>
        <div v-else-if="item?.data?.controlType === 'Dropdown'" class="mt-2">
          <v-card elevation="1">
            <v-card-title>
              {{convertNo(index)}}.{{ item.data.metaData.question }}
              <span v-if="item.data.metaData.isRequired" class="text-red">*</span>
            </v-card-title>
            <v-card-text class="pt-8">
              <v-select
                  v-model="item.data.metaData.answer"
                  variant="outlined"
                  :items="item.data.metaData.choices"
                  item-title="answer"
                  item-value=""></v-select>
            </v-card-text>
          </v-card>
        </div>
        <div v-else-if="item?.data?.controlType === 'Uploads'" class="mt-2">
          <v-card elevation="1">
            <v-card-title>
              {{convertNo(index)}}.{{ item.data.metaData.question }}
              <span v-if="item.data.metaData.isRequired" class="text-red">*</span>
            </v-card-title>
            <v-card-text class="pt-8">
              <Choosefile
                  descritption=""
                  @input-file="item.data.metaData.files = $event"
                  :is-file="item.data.metaData.files"
              />
            </v-card-text>
          </v-card>
        </div>
        <div v-else>None</div>
    </div>
    <v-row dense class="mt-5">
      <v-col cols="12" class="d-flex justify-center">
        <v-btn color="secondary" width="140" variant="outlined" class="text-capitalize ma-1" rounded @click="handleSectionsProv">
          ย้อนกลับ
        </v-btn>
        <v-btn v-if="convertNo(sectionsIndex) ===   sectionsItems.length" color="secondary" width="140" class="text-capitalize ma-1" rounded @click="handleSendQuestion">
          ส่งแบบสอบถาม
        </v-btn>
        <v-btn v-else color="secondary" width="140" class="text-capitalize ma-1" rounded @click="handleNextConfirmCreated">
          ต่อไป
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import Choosefile from '@/components/forms/Choosefile'
import ToolbarSurvey from '@/components/items/ToolbarSurvey.vue'
import { ref, onBeforeMount } from 'vue';

import { useErrorHandlingDialog } from '@/components/dialogs/ExceptionHandleDialogService'
const { handlingErrorsMessage } = useErrorHandlingDialog();

import { useConfirmationDialog } from '@/components/dialogs/ConfirmationDialogService'
const { showDialog } = useConfirmationDialog();

import { useAlertDialogDialog } from "@/components/dialogs/AlertSuccessDialogService";
const { showAlert } = useAlertDialogDialog();

const sectionsHeader = ref({
    title:"",
    description:"",
});
const sectionsCount = ref(0);
const sectionsIndex = ref(0)
const sections = ref([]);
const sectionsItems = ref([]);

const state = ref(null);
const bp_number = ref(null);
const rsp_survey_id = ref(null);

onBeforeMount(() => {
  const survey_preview_third = sessionStorage.getItem("survey_preview_third");
  const parse = JSON.parse(survey_preview_third)
  console.log(parse)
  sectionsHeader.value = parse.nameQuestionnaire;
  sectionsItems.value = parse.createQuestionnaire;
  sectionsCount.value =   sectionsItems.value.length;
  sectionsIndex.value = 0;
  sections.value =   sectionsItems.value[sectionsIndex.value]
  console.log(sections.value.data)


  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  state.value = urlParams.get('state')
  bp_number.value = urlParams.get('bp_number')
  rsp_survey_id.value = urlParams.get('rsp_survey_id')
});
const convertNo = (index) => {
  return Number(index) + 1
}
const onCheckboxOther = (choices,answer,value) =>{
  if(answer.length === 0){
    answer[0] = value;
   return;
  }
  const checked  =  Array.from(choices, (x) => x.title ==='other' ?   x.specify : x.answer)
  for (let i = 0; i < answer.length; i++) {
    const find = checked.find((element) => element === answer[i]);
    if(!find) {
      answer[i] = value;
      return;
    }
  }
  answer.push(value) ;
}

const formatAnswers = async () =>{
      const question =  sections.value.data;
      const  answers = []
      for (let i = 0; i < question.length; i++) {
        switch(question[i].data.controlType){
          case 'Paragraph' :
          answers.push({
            question_id: question[i].id,
            answer: question[i].data.metaData.answer
          })
          break;
          case 'Multichoice' :
          answers.push({
            question_id: question[i].id,
            answer: question[i].data.metaData.answer
          })
          break;
          case 'Checkbox' : {
              const checkboxs =   question[i].data.metaData.answer;
              if(checkboxs.length === 0){
                answers.push({
                      question_id: question[i].id,
                      answer: null
                })
              }else{
                checkboxs.forEach(item => {
                answers.push({
                        question_id: question[i].id,
                        answer: item
                    })
                });
              }
          }
          break;
          case 'Dropdown' :
            answers.push({
              question_id: question[i].id,
              answer: question[i].data.metaData.answer
            })
          break;
          case 'Uploads' :{
            const file =  question[i].data.metaData.files;
            answers.push({
                question_id: question[i].id,
                answer: (file) ? await getBase64(file) : null,
            })
          }
          break;
        }
      }
    return answers;

}
const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
};

const handleNextConfirmCreated = async () => {
    const confirmed = await showDialog('ยืนยันการการส่งแบบสอบถาม', 'กรุณาตรวจสอบคลิกปุ่ม "ตกลง" เพื่อดำเนินการ');
    if (confirmed) {
        const answersFormat = await formatAnswers();
        switch(state.value){
          case  "created" :
          handleCreatedSurveyAnswer(answersFormat)
          break;
          case  "updated" :
          handleUpdatedSurveyAnswer(answersFormat)
          break;
    }
  }
}

// eslint-disable-next-line no-unused-vars
const handleCreatedSurveyAnswer = async (answers) => {
  try {
    console.log("created")
    handleUpdatedSurveyResult()
  }
  catch (e) {
      if (e.response) {
        const val = e.response.data
        handlingErrorsMessage(val.message, val?.data.error);
        return;
      }
      handlingErrorsMessage("unknown", e.message);
    }
};
// eslint-disable-next-line no-unused-vars
const handleUpdatedSurveyAnswer = async (answers) => {
  try {
    console.log("updated")
    handleUpdatedSurveyResult();
  }
  catch (e) {
      if (e.response) {
        const val = e.response.data
        handlingErrorsMessage(val.message, val?.data.error);
        return;
      }
      handlingErrorsMessage("unknown", e.message);
    }
};

// eslint-disable-next-line no-unused-vars
const handleUpdatedSurveyResult = async () => {
  const payload = {
      bp_number: bp_number.value,
      rsp_survey_id: rsp_survey_id.value,
      rsp_activity_status_id: 1,
      inprogress_section_id: 1,
    }
    console.log(payload)
    handleSectionsNext()

  // try {
  //   // eslint-disable-next-line no-unused-vars
  //   const response = await RspService.updateRspSurveyResult();
  // }
  // catch (e) {
  //     if (e.response) {
  //       const val = e.response.data
  //       handlingErrorsMessage(val.message, val?.data.error);
  //       return;
  //     }
  //     handlingErrorsMessage("unknown", e.message);
  //   }
};



const handleSectionsProv =()=>{
  if(sectionsIndex.value  > 0){
   sectionsIndex.value = sectionsIndex.value  - 1 ;
   sections.value =   sectionsItems.value[sectionsIndex.value]
  }
}
// eslint-disable-next-line no-unused-vars
const handleSectionsNext =()=>{
  if(sectionsIndex.value <   sectionsItems.value.length){
   sectionsIndex.value = sectionsIndex.value  + 1 ;
   sections.value =   sectionsItems.value[sectionsIndex.value]
  }
}
const handleSendQuestion = async () =>{
  const confirmed = await showDialog("ยืนยันการส่งแบบสอบถาม",'กรุณาตรวจสอบ\nคลิกปุ่ม"ตกลง"เพื่อดำเนินการ');
  if (confirmed) {
    // window.alert("Cancel");
    handleAlertSuccessfully();
  } else {
    window.alert("Cancel");
  }
}

const handleAlertSuccessfully = async () => {
  const confirmed = await showAlert(
    "ส่งแบบสอบถามเรียบร้อย",
    "ขอบคุณที่ให้ความร่วมมือในการทำแบบสอบถามคุณสามารถทราบคะแนนในหน้าถัดไป"
  );
  if (confirmed) {
    // router.push('/SDTeamMangement/RspPolicies');
  }
};
</script>
