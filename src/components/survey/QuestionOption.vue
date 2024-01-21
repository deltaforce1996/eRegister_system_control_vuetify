<template>
  <!-- <v-card> -->
  <!-- <v-card-title> -->

  <div>
    <v-hover>
      <template v-slot="{ isHovering, props }">
        <v-row
          v-bind="props"
          dense
          class="mt-2 mb-2 pa-5"
          style="background-color: white; border-radius: 10px; height: auto"
        >
          <v-col cols="5" class="mt-1">
            <h4>
              <span>คำถามที่</span> <span>{{ propsVar.index + 1 }}</span>
              <span> id</span> <span>{{ propsVar.id }}</span>
            </h4>
          </v-col>
          <v-col cols="4">
            <v-btn
              v-show="isHovering"
              class="ml-10 mt-n8 handle"
              variant="text"
              density="comfortable"
              icon="mdi mdi-dots-grid"
            ></v-btn>
          </v-col>
          <v-col cols="3">
            <v-select
              v-model="select"
              variant="outlined"
              density="compact"
              :items="items"
              item-title="text"
              item-value="text"
            >
              <template #selection="{ item }">
                <div style="display: flex; align-items: center">
                  <v-icon>{{ item.raw.icon }}</v-icon>
                  <span style="margin-left: 10px">{{ item.raw.text }}</span>
                </div>
              </template>
              <template v-slot:item="{ props, item }">
                <v-list-item v-bind="props">
                  <template v-slot:prepend>
                    <v-icon :icon="item.raw.icon"></v-icon>
                  </template>
                </v-list-item>
              </template>
            </v-select>
          </v-col>
          <v-col cols="12" class="mt-n5">
            <div>
              <ParagrahpNone
                :meta-data-paragrahp-none="propsVar.data.metaData"
                @on-update="handleFormUpdated"
                @on-remove="handleQuestRemove"
                v-if="select === 'Paragraph' && propsVar.type === 'None'"
              />
              <MultiChoiceNone
                :meta-data-multi-choice-none="propsVar.data.metaData"
                @on-update="handleFormUpdated"
                @on-remove="handleQuestRemove"
                v-if="select === 'Multichoice' && propsVar.type === 'None'"
              />
              <CheckboxNone
                :meta-data-checkbox-none="propsVar.data.metaData"
                @on-update="handleFormUpdated"
                @on-remove="handleQuestRemove"
                v-if="select === 'Checkbox' && propsVar.type === 'None'"
              />
              <DropdownNone
                :meta-data-dropdown-none="propsVar.data.metaData"
                @on-update="handleFormUpdated"
                @on-remove="handleQuestRemove"
                v-if="select === 'Dropdown' && propsVar.type === 'None'"
              />
              <UploadNone
                :meta-data-upload-none="propsVar.data.metaData"
                @on-update="handleFormUpdated"
                @on-remove="handleQuestRemove"
                v-if="select === 'Uploads' && propsVar.type === 'None'"
              />

              <ParagrahpScore
                :meta-data-paragrahp-score="propsVar.data.metaData"
                @on-update="handleFormUpdated"
                @on-remove="handleQuestRemove"
                v-if="select === 'Paragraph' && propsVar.type === 'Score'"
              />
              <MultiChoiceScore
                :meta-data-multi-choice-score="propsVar.data.metaData"
                @on-update="handleFormUpdated"
                @on-remove="handleQuestRemove"
                v-if="select === 'Multichoice' && propsVar.type === 'Score'"
              />
              <CheckboxScore
                :meta-data-checkbox-score="propsVar.data.metaData"
                @on-update="handleFormUpdated"
                @on-remove="handleQuestRemove"
                v-if="select === 'Checkbox' && propsVar.type === 'Score'"
              />
              <DropdownScore
                :meta-data-dropdown-score="propsVar.data.metaData"
                @on-update="handleFormUpdated"
                @on-remove="handleQuestRemove"
                v-if="select === 'Dropdown' && propsVar.type === 'Score'"
              />
              <UploadScore
                :meta-data-upload-score="propsVar.data.metaData"
                @on-update="handleFormUpdated"
                @on-remove="handleQuestRemove"
                v-if="select === 'Uploads' && propsVar.type === 'Score'"
              />

              <MultiChoiceAlign
                :meta-data-multi-choice-align="propsVar.data.metaData"
                @on-update="handleFormUpdated"
                @on-remove="handleQuestRemove"
                v-if="select === 'Multichoice' && propsVar.type === 'Align'"
              />
              <CheckboxAlign
                :meta-data-checkbox-align="propsVar.data.metaData"
                @on-update="handleFormUpdated"
                @on-remove="handleQuestRemove"
                v-if="select === 'Checkbox' && propsVar.type === 'Align'"
              />
              <DcropdownAlign
                :meta-data-dropdown-align="propsVar.data.metaData"
                @on-update="handleFormUpdated"
                @on-remove="handleQuestRemove"
                v-if="select === 'Dropdown' && propsVar.type === 'Align'"
              />
            </div>
          </v-col>
        </v-row>
        <!-- </v-card-title>
  </v-card> -->
      </template>
    </v-hover>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ParagrahpNone from "@/components/survey/forms/paragrahps/ParagrahpNone.vue";
import MultiChoiceNone from "@/components/survey/forms/multi-choice/MultiChoiceNone.vue";
import CheckboxNone from "@/components/survey/forms/checkboxs/CheckboxNone.vue";
import DropdownNone from "@/components/survey/forms/dropsdawn/DropdownNone.vue";
import UploadNone from "@/components/survey/forms/uploads-control/UploadNone.vue";

import ParagrahpScore from "@/components/survey/forms/paragrahps/ParagrahpScore.vue";
import MultiChoiceScore from "@/components/survey/forms/multi-choice/MultiChoiceScore.vue";
import CheckboxScore from "@/components/survey/forms/checkboxs/CheckboxScore.vue";
import DropdownScore from "@/components/survey/forms/dropsdawn/DropdownScore.vue";
import UploadScore from "@/components/survey/forms/uploads-control/UploadScore.vue";

import MultiChoiceAlign from "@/components/survey/forms/multi-choice/MultiChoiceAlign.vue";
import CheckboxAlign from "@/components/survey/forms/checkboxs/CheckboxAlign.vue";
import DcropdownAlign from "@/components/survey/forms/dropsdawn/DcropdownAlign.vue";
import { watch } from "vue";

const propsVar = defineProps({
  id: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    default: "Align", // None, Score, Align
  },
  data: {
    type: Object,
    default: () => {
      return {
        controlType: "Paragraph", //Paragraph, Multichoice, Checkbox, Dropdown, Uploads
        metaData: () => {},
      };
    },
  },
  countQuestion: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["on-update", "on-remove"]);
const dataForm = ref({ index: propsVar.index + 1, control: propsVar.data })

const items = [
  { text: "Paragraph", icon: "mdi-format-paragraph" },
  { text: "Multichoice", icon: "mdi-format-list-bulleted" },
  { text: "Checkbox", icon: "mdi-checkbox-marked" },
  { text: "Dropdown", icon: "mdi-menu-down" },
  { text: "Uploads", icon: "mdi-cloud-upload" },
];

watch(dataForm.value, (newValue) => {
  // console.log(JSON.stringify(newValue));
  dataForm.value = newValue
  emit("on-update", newValue);
})

watch(propsVar, (newValue) => {
  dataForm.value.index = newValue.index + 1
})

const handleFormUpdated = (item) => {
  dataForm.value = { index: propsVar.index + 1, control: item };
};

const handleQuestRemove = () => {
  console.log("Remove quest at : ", propsVar.id);
  emit("on-remove", propsVar.id);
};
const select = ref(propsVar.data.controlType);
</script>
