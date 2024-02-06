<template>
  <v-row dense>
    <v-col cols="12">
      <GroupQuestionOption />
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <v-btn
        prepend-icon="mdi mdi-plus-circle-outline"
        variant="outlined"
        rounded
        class="ma-2 pa-2"
        @click="handleAddQuestion"
        >เพิ่มคำถาม</v-btn
      >
    </v-col>
  </v-row>
</template>

<script setup>
import GroupQuestionOption from "@/components/survey/GroupQuestionOption.vue";
const handleAddQuestion = () => {};
</script>
