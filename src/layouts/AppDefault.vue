<template>
  <v-app>
    <confirm-dialog />
    <exception-handle-dialog/>
    <template-dialog />
    <alert-success-dialog />
    <failed-dialog />
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
import TemplateDialog from '@/components/dialogs/TemplateDialog.vue';
import ExceptionHandleDialog from '@/components/dialogs/ExceptionHandleDialog.vue';
import AlertSuccessDialog from '@/components/dialogs/AlertSuccessDialog.vue'
import FailedDialog from '@/components/dialogs/FailedDialog.vue';


</script>
