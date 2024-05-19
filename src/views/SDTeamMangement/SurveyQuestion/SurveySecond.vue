<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
   <v-card-text>
      <ToolbarSurvey :step="3" />
    </v-card-text>
     <div class="mt-2">
        <v-card elevation="1" color="#FFF1F0">
          <v-card-title class="text-center text-secondary">
            {{sections.nameQuestionnaire.title}}
          </v-card-title>
          <v-card-text class="text-secondary">
            {{ sections.nameQuestionnaire.description }}
          </v-card-text>
        </v-card>
      </div>
    <div v-for="(item, index) in sections.createQuestionnaire" :key="index">
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
      <v-btn color="secondary" width="140" class="text-capitalize" rounded @click="handleConfirmCreated">
          <v-icon left>mdi-tag</v-icon>
           เริ่ม
        </v-btn>
    </v-col>
  </v-row>
  </v-container>
</template>
<script setup>
import Choosefile from '@/components/forms/Choosefile'
// import RspService from '@/apis/RspService';
import ToolbarSurvey from '@/components/items/ToolbarSurvey.vue'
import { useErrorHandlingDialog } from '@/components/dialogs/ExceptionHandleDialogService'
import { useConfirmationDialog } from '@/components/dialogs/ConfirmationDialogService'
import { ref, onBeforeMount } from 'vue';


const { handlingErrorsMessage } = useErrorHandlingDialog();
const { showDialog } = useConfirmationDialog();

const sections = ref([]);
const state = ref(null);
const bp_number = ref(null);
const rsp_survey_id = ref(null);


onBeforeMount(() => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  state.value = urlParams.get('state')
  bp_number.value = urlParams.get('bp_number')
  rsp_survey_id.value = urlParams.get('rsp_survey_id')



  const formQuestion = sessionStorage.getItem("survey_preview");
  sections.value = JSON.parse(formQuestion);

});
const convertNo =(index) =>{
  return index +1
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
      const question =sections.value.createQuestionnaire;
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

const handleConfirmCreated = async () => {
  try {
    const confirmed = await showDialog('ยืนยันการการส่งแบบสอบถาม', 'กรุณาตรวจสอบคลิกปุ่ม "ตกลง" เพื่อดำเนินการ');
    if (confirmed) {
        // eslint-disable-next-line no-unused-vars
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
</script>

