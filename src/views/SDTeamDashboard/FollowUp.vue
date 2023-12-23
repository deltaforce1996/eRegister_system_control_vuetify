<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <div class="text-center mt-5">
      <h2>FollowUp</h2>
    </div>
    <v-card class="mx-auto mt-10 elevation-1">
      <v-card-item class="pa-8">
        <div class="font-weight-bold">ต้องการติดตามข้อมูล SD Activites แบบใด</div>
        <v-radio-group>
          <v-radio class="font-weight-medium" label="Contact Owner ติดตามให้" value="one"></v-radio>
          <v-radio class="font-weight-medium" label="ส่งอีเมลติดตามให้ vendor โดยตรง" value="two"></v-radio>
        </v-radio-group>
      </v-card-item>
    </v-card>
    <v-card class="mx-auto mt-3 elevation-1">
      <v-card-item class="pa-8">
        <div class="font-weight-bold">ข้อความเพิ่มเติม</div>
        <v-textarea variant="solo-filled"></v-textarea>
      </v-card-item>
    </v-card>
  </v-container>
</template>
<script setup>
/*eslint-disable no-unused-vars  */
import { ref, onBeforeMount } from 'vue';

onBeforeMount(() => {


});

</script>

