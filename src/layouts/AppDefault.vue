<template>
  <v-app>
    <confirm-dialog />
    <default-bar />
    <default-drawer />
    <default-content />
  </v-app>
</template>

<script setup>
import DefaultBar from './AppBar.vue'
import DefaultContent from './AppContent.vue'
import DefaultDrawer from './AppDrawer.vue'
import ConfirmDialog from '@/components/dialogs/ConfirmDialog.vue';


</script>
