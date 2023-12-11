<template>
  <v-container fluid>
    <v-row no-gutters justify="end">
      <button-control
        icon="mdi mdi-plus"
        text="Create Team"
      />
    </v-row>
    <master-table
      :headers="headers"
      :items="items"
      @handle-item-clicked="handle_item_clicked"
      @handle-go-to-history="handle_history"
    />
  </v-container>
</template>

<script setup>
import { ref } from "vue";

import MasterTable from "@/components/tables/MasterTable.vue";
import ButtonControl from "@/components/controls/ButtonControl.vue";

const headers = ref([
  { text: "ID", value: "id", width: 1 },
  { text: "Business Unit", value: "business_unit", width: 2 },
  { text: "Company", value: "company", width: 1 },
  { text: "Name TH", value: "name_th", width: 3 },
  { text: "Status", value: "status", width: 1 },
  { text: "Action", value: "action", width: 2 },
  { text: "", value: "history", width: 2 },
]);

const items = ref([
  {
    id: 1,
    business_unit: "Business",
    company: "Company",
    name_th: "ชื่อขนามสกุลไทย",
    status: true,
    action: [
      { color: "secondary", icon: "mdi mdi-pencil", text: "", action: "edit" },
      { color: "black", icon: "mdi mdi-trash-can", text: "", action: "delete" },
    ],
    history: "history_log",
  },
  {
    id: 2,
    business_unit: "Business",
    company: "Company",
    name_th: "ชื่อขนามสกุลไทย",
    status: false,
    action: [
      { color: "secondary", icon: "mdi mdi-pencil", text: "", action: "edit" },
      { color: "black", icon: "mdi mdi-trash-can", text: "", action: "delete" },
    ],
    history: "history_log",
  },
]);

const handle_item_clicked = (event) => {
  console.log(event);
};

const handle_history = (index) => {
  console.log("history: ", index);
};
</script>
