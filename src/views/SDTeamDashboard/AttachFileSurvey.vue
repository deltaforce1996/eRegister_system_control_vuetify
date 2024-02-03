<template>
  <v-container>
    <h2>Attach file survey</h2>
    <v-card elevation="2" rounded="0" class="rounded-lg mt-3 pa-2">
        <v-row no-gutters dense justify="space-around"  v-for="(i,index) in 5" :key="index">
          <v-col cols="1" align-self="center" class="pa-1">
            <v-chip color="secondary">
              PDF
            </v-chip>
          </v-col>
          <v-col cols="4" align-self="center" class="pa-1">
            <strong>นโยบายการจัดซื้อจัดจ้างอย่างรับผิดชอบ</strong>
          </v-col>
          <v-col cols="1" align-self="center" class="pa-1">
            <strong>3.5 MB</strong>
          </v-col>
          <v-col cols="5" align-self="center" class="pa-1">
            <v-list-item lines="one">
              <v-list-item-title class="font-weight-black text-secondary">test@gmail.com</v-list-item-title>
              <v-list-item-subtitle class="font-weight-medium ">2020-04-05 12:11</v-list-item-subtitle>
              <template v-slot:prepend>
                <v-avatar color="#E8D5F9">
                  <span class="font-weight-black" style="color: #7D31B9;">SP</span>
                </v-avatar>
              </template>
            </v-list-item>
          </v-col>
          <v-col cols="1" align-self="center">
            <v-btn color="" variant="outlined" rounded>
              <v-icon left>mdi-tray-arrow-down</v-icon>
              Download
            </v-btn>
          </v-col>
          <v-col cols="12" align-self="center">
            <v-divider></v-divider>
          </v-col>
        </v-row>
    </v-card>
  </v-container>
</template>
<script setup>
/*eslint-disable no-unused-vars  */
import { ref, onBeforeMount } from 'vue';

onBeforeMount(() => {


});

</script>

