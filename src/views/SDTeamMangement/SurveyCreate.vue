<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>Mangement > Survey</h2>
    <v-container>
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


      <div>
        <v-card class="elevation-1">
          <v-card-text>
            <v-form ref="form">
              <v-row no-gutters dense>
                <v-col>
                  <h4>ชื่อแบบสอบถาม</h4>
                </v-col>
                <v-col cols="12">
                  <v-text-field variant="outlined" placeholder="ชื่อแบบสอบถาม" density="compact"></v-text-field>
                </v-col>
              </v-row>
              <v-row no-gutters dense>
                <v-col>
                  <h4>คำอธิบาย</h4>
                </v-col>
                <v-col cols="12">
                  <v-textarea variant="outlined" placeholder="คำอธิบาย"></v-textarea>
                </v-col>
              </v-row>

            </v-form>
          </v-card-text>
        </v-card>
        <div class="text-center mt-5">
          <v-btn rounded class="ma-2" color="secondary" style="width: 100px;" @click="submit">
            <strong>ต่อไป</strong>
          </v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script setup>
/*eslint-disable no-unused-vars  */
import { ref, onBeforeMount } from 'vue';

const step = 1;
onBeforeMount(() => {


});

</script>

