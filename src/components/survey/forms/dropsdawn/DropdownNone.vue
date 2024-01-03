<template>
  <v-row
    style="background-color: white; border-radius: 10px"
    dense
    align="center"
    class="mt-2"
  >
    <v-col cols="10">
      <v-text-field
        placeholder="กรุณากรอกคำถาม"
        variant="outlined"
        v-model="metaData.question"
        density="compact"
      ></v-text-field>
    </v-col>
    <v-col class="ml-2" cols="12" v-for="(item, index) in metaData.answers" :key="index">
      <v-row dense>
        <v-col cols="10">
          <div>
            <v-text-field
              class="centered-placeholder"
              placeholder="ตัวเลือก"
              variant="outlined"
              v-model="item.answer"
              density="compact"
            >
              <template v-slot:append>
                <v-icon @click="onIconClick(index)" color="red">
                  mdi mdi-close-circle
                </v-icon>
              </template>
            </v-text-field>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="d-flex">
      <a>
        <p class="clickable-underline" @click="addChoice()">เพิ่มตัวเลือก</p>
      </a>
    </v-col>
    <v-divider></v-divider>
    <v-col cols="6" class="d-flex justify-start">
      <v-checkbox
        v-model="metaData.isRequired"
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
  isRequired: false,
  answers: [],
});

const addChoice = () => {
  metaData.value.answers.push({ answer: "" });
};

const onIconClick = (index) => {
  metaData.value.answers.splice(index, 1);
};

const emit = defineEmits(["on-update"]);
watch(metaData.value, (newValue) => {
  emit("on-update", { dropdown_none: newValue });
  console.log(JSON.stringify({ dropdown_none: newValue }));
});
</script>

<style>
.custom-red {
  color: red;
}
.custom-grey {
  color: grey;
}

.clickable-underline {
  text-decoration: underline;
  cursor: pointer;
}
</style>
