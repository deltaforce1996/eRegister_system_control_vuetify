<template>
  <v-row dense>
    <v-col cols="12">
      <v-text-field
        label="คะแนนรวมทั้งหมด"
        variant="outlined"
        readonly
        v-model="dataInput.totalScore"
        density="compact"
      ></v-text-field>
    </v-col>
    <v-col
      cols="12"
      v-for="(item, index) in dataInput.listOfScore"
      :key="index"
    >
      <UploadScore
        :metaDataUploadScore="item"
        :index="index"
        @on-update="handleUpdateScore"
        @on-remove="handleRemoveScoreById"
      />
    </v-col>
    <v-col cols="1">
      <v-btn
        prepend-icon="mdi mdi-plus-circle-outline"
        variant="outlined"
        block
        rounded
        color="secondary"
        class="ma-2 pa-2"
        @click="handleAddScoreCard"
        >เพิ่ม</v-btn
      >
    </v-col>
  </v-row>
</template>

<script setup>
import { reactive, watch } from "vue";
import UploadScore from "@/components/survey/forms/uploads-control/UploadScore.vue";

const dataInput = reactive({
  totalScore: 0,
  listOfScore: [],
});
const handleAddScoreCard = () => {
  dataInput.listOfScore.push({
    question: "",
    answer: "",
    isRequire: false,
    totalScore: "",
    files: [],
  });
};

watch(dataInput.listOfScore, (newValue) => {
  dataInput.totalScore = newValue.reduce(
    (sum, question) => Number(sum) + Number(question.totalScore) || 0,
    0
  );
});

const handleUpdateScore = (item) => {
  const { upload_file_score, index } = item;
  dataInput.listOfScore[index] = upload_file_score;
  console.log(JSON.stringify(dataInput));
};

const handleRemoveScoreById = (index) => {
  dataInput.listOfScore.splice(index, 1);
};
</script>
