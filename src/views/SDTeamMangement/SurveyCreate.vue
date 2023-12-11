<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>Mangement > Survey</h2>
    <div class="text-center mt-5">
      <v-stepper v-model="step" alt-labels elevation="0" bg-color="transparent">
        <v-stepper-header>
          <v-stepper-item value="1" color="secondary"
            class="text-secondary font-weight-medium">ชื่อแบบสอบถาม</v-stepper-item>
          <v-divider></v-divider>
          <v-stepper-item value="2" color="secondary"
            class="text-secondary font-weight-medium">คำถามเพิ่มเติม</v-stepper-item>
          <v-divider></v-divider>
          <v-stepper-item value="3" color="secondary"
            class="text-secondary font-weight-medium">สร้างแบบสอบถาม</v-stepper-item>
          <v-divider></v-divider>
          <v-stepper-item value="4" color="secondary"
            class="text-secondary font-weight-medium">สร้างเกณฑ์การประเมิน</v-stepper-item>
        </v-stepper-header>
      </v-stepper>
    </div>
  </div>
</template>
<script setup>
/*eslint-disable no-unused-vars  */
import { ref, onBeforeMount } from 'vue';

const step = 1;
onBeforeMount(() => {


});

</script>

