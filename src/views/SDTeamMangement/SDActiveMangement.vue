<template>
 <v-container>
    <h2>SD Active Mangement</h2>
    <div class="mt-5">
      <v-list-item class="elevation-5 pa-5" color="white" to="/SDTeamMangement/RspPolicy">
        <template v-slot:prepend>
          <v-icon icon="mdi-plus" color="secondary" size="40"></v-icon>
        </template>
        <v-list-item-title>RSP Policy</v-list-item-title>
      </v-list-item>
      <v-list-item class="elevation-5 pa-5 mt-2" color="white" to="/SDTeamMangement/Survey">
        <template v-slot:prepend>
          <v-icon icon="mdi-plus" color="secondary" size="40"></v-icon>
        </template>
        <v-list-item-title>Survey</v-list-item-title>
      </v-list-item>
      <v-list-item class="elevation-5 pa-5 mt-2" color="white" to="/SDTeamMangement/Traning">
        <template v-slot:prepend>
          <v-icon icon="mdi-plus" color="secondary" size="40"></v-icon>
        </template>
        <v-list-item-title>Traning</v-list-item-title>
      </v-list-item>
    </div>
  </v-container>
</template>
<script setup>
/*eslint-disable no-unused-vars  */
import { ref, onBeforeMount } from 'vue';


onBeforeMount(() => {


});

</script>

