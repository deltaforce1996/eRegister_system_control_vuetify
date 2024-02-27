<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <v-card-text>
      <v-row class="elevation-3 mt-5" style="background-color: white;">
        <v-col class="pa-3" cols="3" align="center">
          <v-icon icon="mdi-check-circle" color="green"></v-icon>
          ข้อมูลคู่ค้า
        </v-col>
        <v-divider vertical></v-divider>
        <v-col class="pa-3" cols="3" align="center">
          <v-icon icon="mdi-check-circle" color="green"></v-icon>
          นโยบาล RSP
        </v-col>
        <v-divider vertical></v-divider>
        <v-col class="pa-3" cols="3" align="center"
          style=" border-bottom: 3px solid red;  background-color: rgba(255, 0, 0, 0.05);">
          <v-icon icon="mdi-list-box" color="red"></v-icon>
          <span class="text-red">แบบสำรวจ</span>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col class="pa-3" cols="3" align="center">
          <v-icon icon="mdi-laptop-account" color="grey"></v-icon>
          <span class="text-grey">การเรียนรู้</span>
        </v-col>
      </v-row>
    </v-card-text>
    <div class="text-center mt-5">
      <v-col cols="12" class="d-flex justify-end">
        <v-btn color="secondary" variant="outlined" width="140" class="text-capitalize mr-2" rounded>
          <v-icon left>mdi-share</v-icon>
          ส่งต่อ
        </v-btn>
        <v-btn color="secondary" width="140" class="text-capitalize" rounded>
          <v-icon left>mdi-tag</v-icon>
          Save Darft
        </v-btn>
      </v-col>
    </div>
    <div v-for="(item, index) in items" :key="index">
      <div v-if="item?.data?.controlType === 'Paragraph'" class="mt-2">
        <v-card elevation="1" color="#FFF1F0">
          <v-card-title class="text-center text-secondary">
            {{ item.data.metaData.paragraph_none.question }}
            <span v-if="item.data.metaData.paragraph_none.isRequired" class="text-red">*</span>
          </v-card-title>
          <v-card-text class="text-secondary">
            {{ item.data.metaData.paragraph_none.answer }}
          </v-card-text>
        </v-card>
      </div>
      <div v-else-if="item?.data?.controlType === 'Multichoice'" class="mt-2">
        <v-card elevation="1">
          <v-card-title>
            {{ item.data.metaData.multi_chioce_none.question }}

            <span v-if="item.data.metaData.multi_chioce_none.isRequired" class="text-red">*</span>
          </v-card-title>
          <v-card-text class="pt-8">
            <v-checkbox v-for="(answer, i) in item.data.metaData.multi_chioce_none.answers" :key="i" class="mt-n11"
              :label="answer.answer" :value="answer.answer"></v-checkbox>
          </v-card-text>
        </v-card>
      </div>
      <div v-else-if="item?.data?.controlType === 'Checkbox'" class="mt-2">
        <v-card elevation="1">
          <v-card-title>
            {{ item.data.metaData.check_box_none.question }}
            <span v-if="item.data.metaData.check_box_none.isRequired" class="text-red">*</span>
          </v-card-title>
          <v-card-text class="pt-8">
            <v-radio-group>
              <v-radio v-for="(answer, i) in item.data.metaData.check_box_none.answers" :key="i" :label="answer.answer"
                :value="answer.answer"></v-radio>
            </v-radio-group>
          </v-card-text>
        </v-card>
      </div>
      <div v-else-if="item?.data?.controlType === 'Dropdown'" class="mt-2">
        <v-card elevation="1">
          <v-card-title>
            {{ item.data.metaData.dropdown_none.question }}
            <span v-if="item.data.metaData.dropdown_none.isRequired" class="text-red">*</span>
          </v-card-title>
          <v-card-text class="pt-8">
            <v-select variant="outlined" :items="item.data.metaData.dropdown_none.answers" item-title="answer"
              item-value=""></v-select>
          </v-card-text>
        </v-card>
      </div>
      <div v-else-if="item?.data?.controlType === 'Uploads'" class="mt-2">
        <v-card elevation="1">
          <v-card-title>
            {{ item.data.metaData.upload_file_none.question }}
            <span v-if="item.data.metaData.upload_file_none.isRequired" class="text-red">*</span>
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
      <v-btn color="secondary" width="140" class="text-capitalize" rounded>
          <v-icon left>mdi-tag</v-icon>
           เริ่ม
        </v-btn>
    </v-col>
  </v-row>
  </v-container>
</template>
<script setup>
import Choosefile from '@/components/forms/Choosefile'
import { ref, onBeforeMount } from 'vue';

const items = ref([]);
onBeforeMount(() => {
  const step2_surveys = sessionStorage.getItem("survey_preview");
  items.value = JSON.parse(step2_surveys);
});

</script>
