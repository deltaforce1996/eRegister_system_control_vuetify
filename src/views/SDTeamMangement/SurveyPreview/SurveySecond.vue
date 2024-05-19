<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
   <v-card-text>
      <ToolbarSurvey :step="3" />
    </v-card-text>
     <div class="mt-2">
        <v-card elevation="1" color="#FFF1F0">
          <v-card-title class="text-center text-secondary">
            {{items.nameQuestionnaire.title}}
          </v-card-title>
          <v-card-text class="text-secondary">
            {{ items.nameQuestionnaire.description }}
          </v-card-text>
        </v-card>
      </div>
    <div v-for="(item, index) in items.createQuestionnaire" :key="index">
      <div v-if="item?.data?.controlType === 'Paragraph'" class="mt-2">
        <v-card elevation="1">
          <v-card-title>
            {{index+1}}.{{ item?.data?.metaData?.question }}
            <span v-if="item?.data?.metaData?.isRequired" class="text-red">*</span>
          </v-card-title>
          <v-card-text>
            <v-text-field
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
            <v-radio-group>
                <v-radio  v-for="(choice, i) in item?.data?.metaData?.choices"  :key="i" :value="choice.answer" class="mt-n2">
                  <template v-slot:label>
                    <div v-if="choice.title === 'other'" class="pa-1" >
                      <div class="d-flex flex-row  align-center">
                       <span> {{choice.answer}}</span>
                        <v-text-field
                            style="max-width: 500px; min-width: 300px;"
                            class="mt-5 ml-5"
                            density="compact"
                            variant="outlined">
                          </v-text-field>
                      </div>
                    </div>
                    <div v-else class="pa-1">{{choice.answer}}</div>
                  </template>
                </v-radio>
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
            <v-checkbox  v-if="choice.title === 'other'" class="mt-n10">
                 <template v-slot:label>
                        <div class="d-flex flex-row  align-center">
                        <span> {{choice.answer}}</span>
                          <v-text-field
                              style="max-width: 500px; min-width: 300px;"
                              class="mt-5 ml-5"
                              density="compact"
                              variant="outlined">
                            </v-text-field>
                        </div>
                </template>
              </v-checkbox>
             <v-checkbox
              v-if="choice.title === 'chioce'"
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
            <v-select variant="outlined" :items="item.data.metaData.choices" item-title="answer"
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
            <Choosefile descritption="" />
          </v-card-text>
        </v-card>
      </div>
      <div v-else>None</div>

    </div>
    <v-row dense class="mt-5">
    <v-col cols="12" class="d-flex justify-center">
      <v-btn color="secondary" width="140" class="text-capitalize" rounded disabled @click="handleStarted">
          <v-icon left>mdi-tag</v-icon>
           เริ่ม
        </v-btn>
    </v-col>
  </v-row>
  </v-container>
</template>
<script setup>
import Choosefile from '@/components/forms/Choosefile'
import ToolbarSurvey from '@/components/items/ToolbarSurvey.vue'
import { ref, onBeforeMount } from 'vue';

const items = ref([]);
onBeforeMount(() => {
  const step2_surveys = sessionStorage.getItem("survey_preview");
  items.value = JSON.parse(step2_surveys);
});
const convertNo =(index) =>{
  return index +1
}

// const handleSaveDarft = () =>{

// }
// const handleSendNext = () =>{

// }

const handleStarted = () =>{

}

</script>
