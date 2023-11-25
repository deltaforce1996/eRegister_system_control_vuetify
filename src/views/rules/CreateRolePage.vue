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
      <permission-management />
    </v-row>
  </v-container>
</template>

<script setup>
import RoleManagement from "../../components/forms/RoleManagement.vue";
import PermissionManagement from "@/components/forms/PermissionManagement.vue";
</script>
