<template>
  <v-app>
    <confirm-dialog />
    <exception-handle-dialog />
    <share-activity-dialog />
    <template-dialog />
    <alert-success-dialog />
    <failed-dialog />
    <default-bar />
    <default-drawer />
    <default-content />
  </v-app>
</template>

<script setup>
import DefaultBar from "./AppBar.vue";
import DefaultContent from "./AppContent.vue";
import DefaultDrawer from "./AppDrawer.vue";
import ConfirmDialog from "@/components/dialogs/ConfirmDialog.vue";
import TemplateDialog from "@/components/dialogs/TemplateDialog.vue";
import ExceptionHandleDialog from "@/components/dialogs/ExceptionHandleDialog.vue";
import AlertSuccessDialog from "@/components/dialogs/AlertSuccessDialog.vue";
import FailedDialog from "@/components/dialogs/FailedDialog.vue";
import ShareActivityDialog from "@/components/dialogs/ShareActivityDialog.vue";
// import { onMounted } from "vue";
// import { useShareActivityDialog } from "@/components/dialogs/ShareActivityDialogService";

// const { showShareActivityDialog } = useShareActivityDialog()

// onMounted(async() => {
//   const result = await showShareActivityDialog();
//   if(result) console.log(result);
// })
</script>
