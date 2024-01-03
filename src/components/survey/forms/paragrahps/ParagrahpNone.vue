<template>
  <v-row style="background-color: white; border-radius: 10px;" dense align="center" class="mt-2">
    <v-col cols="10">
      <v-text-field
        placeholder="กรุณากรอกคำถาม"
        variant="outlined"
        v-model="metaData.question"
        density="compact"
      ></v-text-field>
    </v-col>
    <v-col cols="10">
      <v-text-field
        variant="outlined"
        v-model="metaData.answer"
        placeholder="คำตอบ"
        density="compact"
      ></v-text-field>
    </v-col>
    <v-divider></v-divider>
    <v-col cols="6" class="d-flex justify-start">
      <v-checkbox
        v-model="metaData.isRequire"
        class="pa-0 ma-0"
        label="Require"
      ></v-checkbox>
    </v-col>
    <v-col cols="6" class="d-flex justify-end">
      <v-btn prepend-icon="mdi mdi-delete-outline" variant="outlined" rounded>
        Delete
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, watch, defineEmits } from "vue";
const metaData = ref({
  question: "",
  answer: "",
  isRequire: false,
});
const emit = defineEmits(["on-update"]);
watch(metaData.value, (newValue) => {
  emit("on-update", { paragraph_none: newValue });
  console.log(JSON.stringify({ paragraph_none: newValue }));
});
</script>


