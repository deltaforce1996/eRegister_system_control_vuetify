<template>
  <v-app-bar :elevation="2" rounded>
    <v-app-bar-title>
      <v-btn icon="mdi mdi-menu"></v-btn>
      ERegister System
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn>
        <v-badge :content="14" color="secondary">
          <v-icon size="x-large">mdi mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-btn icon="mdi mdi-cog"></v-btn>
      <v-btn icon="mdi mdi-account"></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
//
</script>
