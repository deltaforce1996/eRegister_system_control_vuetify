<template>
  <v-container>
    <h2>SD Active Mangement</h2>
    <div class="mt-5">
      <v-list-item v-for="(i, index) in item" :key="index" class="elevation-5 pa-5 mt-2" :to="i.path">
        <template v-slot:prepend>
          <v-icon :icon="i.icon" color="secondary" size="40"></v-icon>
        </template>
        <v-list-item-title class="font-weight-medium">{{ i.title }}</v-list-item-title>
      </v-list-item>
    </div>
  </v-container>
</template>
<script setup>
/*eslint-disable no-unused-vars  */
import { ref, onBeforeMount } from 'vue';


const item = ref([])

onBeforeMount(() => {
  item.value = [
    {
      icon: "mdi-shield-check",
      title: "RSP Policy",
      path: "/SDTeamMangement/RspPolicy"
    },
    {
      icon: "mdi-list-box",
      title: "Survey",
      path: "/SDTeamMangement/Survey"
    },
    {
      icon: "mdi-laptop-account",
      title: "Traning",
      path: "/SDTeamMangement/Traning"
    }
  ]

});

</script>

