<template>
  <!-- <v-card> -->
  <!-- <v-card-title> -->
  <v-row
    dense
    class="mt-2 mb-2 pa-5"
    style="background-color: white; border-radius: 10px; height: auto"
  >
    <v-col cols="9" class="mt-1">
      <h4>คำถามที่ 1</h4>
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
      <ParagrahpNone
        @on-update="handleFormUpdated"
        @on-remove="handleQuestRemove"
        v-if="select === 'Paragraph' && props.type === 'None'"
      />
      <MultiChoiceNone
        @on-update="handleFormUpdated"
        @on-remove="handleQuestRemove"
        v-if="select === 'Multichoice' && props.type === 'None'"
      />
      <CheckboxNone
        @on-update="handleFormUpdated"
        @on-remove="handleQuestRemove"
        v-if="select === 'Checkbox' && props.type === 'None'"
      />
      <DropdownNone
        @on-update="handleFormUpdated"
        @on-remove="handleQuestRemove"
        v-if="select === 'Dropdown' && props.type === 'None'"
      />
      <UploadNone
        @on-update="handleFormUpdated"
        @on-remove="handleQuestRemove"
        v-if="select === 'Uploads' && props.type === 'None'"
      />

      <ParagrahpScore
        @on-update="handleFormUpdated"
        @on-remove="handleQuestRemove"
        v-if="select === 'Paragraph' && props.type === 'Score'"
      />
      <MultiChoiceScore
        @on-update="handleFormUpdated"
        @on-remove="handleQuestRemove"
        v-if="select === 'Multichoice' && props.type === 'Score'"
      />
      <CheckboxScore
        @on-update="handleFormUpdated"
        @on-remove="handleQuestRemove"
        v-if="select === 'Checkbox' && props.type === 'Score'"
      />
      <DropdownScore
        @on-update="handleFormUpdated"
        @on-remove="handleQuestRemove"
        v-if="select === 'Dropdown' && props.type === 'Score'"
      />
      <UploadScore
        @on-update="handleFormUpdated"
        @on-remove="handleQuestRemove"
        v-if="select === 'Uploads' && props.type === 'Score'"
      />

      <MultiChoiceAlign
        @on-update="handleFormUpdated"
        @on-remove="handleQuestRemove"
        v-if="select === 'Multichoice' && props.type === 'Align'"
      />
      <CheckboxAlign
        @on-update="handleFormUpdated"
        @on-remove="handleQuestRemove"
        v-if="select === 'Checkbox' && props.type === 'Align'"
      />
      <DcropdownAlign
        @on-update="handleFormUpdated"
        @on-remove="handleQuestRemove"
        v-if="select === 'Dropdown' && props.type === 'Align'"
      />
    </v-col>
  </v-row>
  <!-- </v-card-title>
  </v-card> -->
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

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "Align", // None, Score, Align
  },
});

const emit = defineEmits(["on-update", "on-remove"]);

const items = [
  { text: "Paragraph", icon: "mdi-format-paragraph" },
  { text: "Multichoice", icon: "mdi-format-list-bulleted" },
  { text: "Checkbox", icon: "mdi-checkbox-marked" },
  { text: "Dropdown", icon: "mdi-menu-down" },
  { text: "Uploads", icon: "mdi-cloud-upload" },
];

const handleFormUpdated = (item) => {
  console.log(JSON.stringify(item));
  emit('on-update', props.id)
};

const handleQuestRemove = () =>{
  console.log('Remove quest at : ', props.id)
  emit('on-remove', props.id)
}
const select = ref(items[0].text);
</script>
