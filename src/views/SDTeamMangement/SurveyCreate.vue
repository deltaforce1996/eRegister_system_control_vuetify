<!-- eslint-disable vue/multi-word-component-names -->
<template>
<v-container>
    <h2>Mangement > Survey</h2>
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
        <v-row justify="end" class="mt-2 mb-2">
      <v-col cols="1">
        <v-btn  color="secondary" block class="text-capitalize" rounded>
          <v-icon left>mdi-tag</v-icon>
          Save Darft
        </v-btn>
      </v-col>
    </v-row>
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
</template>
<script setup>
/*eslint-disable no-unused-vars  */
import { ref, onBeforeMount } from 'vue';

const step = 1;
onBeforeMount(() => {


});

</script>

