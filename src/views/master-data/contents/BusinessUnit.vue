<template>
  <v-container fluid>
    <master-table
      :headers="headers"
      :items="items"
      @handle-item-clicked="handle_item_clicked"
      @handle-go-to-history="handle_history"
    />
  </v-container>
</template>

<script setup>
import MasterTable from "@/components/tables/MasterTable.vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const headers = reactive([
  { text: "ID", value: "id", width: 1 },
  { text: "Name TH", value: "name_th", width: 4 },
  { text: "Name EN", value: "name_en", width: 4 },
  { text: "Action", value: "action", width: 1 },
  { text: "", value: "history", width: 2 },
]);

const input = [
  {
    id: 1,
    name_th: "ชื่อที่ไทย",
    name_en: "Thai Name",
    purchasing_organization: "10002",
  },
];

const process_array = (inputArray) => {
  return inputArray.map((item) => ({
    id: item.id,
    name_th: item.name_th,
    name_en: item.name_en,
    action: [
      {
        color: "#F0F0F0",
        icon: "mdi mdi-eye-circle",
        text: "",
        action: "view",
      },
    ],
    history: "history_log",
  }));
};

let items = reactive([]);
items = process_array(input);

const handle_item_clicked = (event) => {
  const action = event.split(",");
  if (action[1] && action[1] === "view") {
    router.push({ name: "BusinessUnitDetail", params: { id: items[0].id } });
  }
};

const handle_history = (index) => {
  console.log("history: ", index);
  router.push({ name: "HistoryTeamPage" });
};
</script>
