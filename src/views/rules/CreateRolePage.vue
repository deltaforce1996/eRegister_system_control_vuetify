<template>
  <v-container fluid>
    <v-row>
      <h2>User Management</h2>
    </v-row>
    <v-row justify="center">
      <h3>Create Rule</h3>
    </v-row>
    <v-row no-gutters dense>
      <role-management />
    </v-row>
    <v-row no-gutters justify="center">
      <h3>Permission Setting</h3>
    </v-row>
    <v-row no-gutters dense>
      <permission-management @submit_form="submit_from_new_role" />
    </v-row>
    <v-footer color="transparent" style="margin-top: 120px">
      <v-row justify="center">
        <v-col cols="auto">
          <button-control color="black" text="ย้อนกลับ" width="100" />
        </v-col>
        <v-col cols="auto">
          <button-control
            type="submit"
            @button-clicked="submit_from_new_role"
            color="secondary"
            text="ตกลง"
            width="100"
          />
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>

<script setup>
import RoleManagement from "../../components/forms/RoleManagement.vue";
import PermissionManagement from "@/components/forms/PermissionManagement.vue";
import ButtonControl from "@/components/controls/ButtonControl.vue";

import { useConfirmationDialog } from '@/components/dialogs/ConfirmationDialogService'

const { showDialog } = useConfirmationDialog();

const submit_from_new_role = async () => {
  const confirmed = await showDialog('Confirm Action','Are you sure you want to proceed?');
      if (confirmed) {
        console.log('Action confirmed!');
      } else {
        console.log('Action cancelled.');
      }
};
</script>
