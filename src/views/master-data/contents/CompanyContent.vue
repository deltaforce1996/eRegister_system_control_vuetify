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
  { text: "Business Unit", value: "business_unit", width: 2 },
  { text: "Company Code", value: "company_code", width: 2 },
  { text: "Name TH", value: "name_th", width: 4 },
  { text: "Action", value: "action", width: 1 },
  { text: "", value: "history", width: 2 },
]);

const input = [
  {
    id: 1,
    company_code: "0006",
    name_th: "Thai name",
    name_en: "English name",
    taxpayer_id_number: "Taxpayer ID number of the company",
    business_unit: {
      id: "ID of the business unit",
      name_th: "business unit",
      name_en: "business unit",
      purchasing_organization: "Purchasing organization code",
    },
    address_th: "Address of the company in Thai",
    address_en: "Address of the company in English",
    is_active: "The company active status (0 is inactive, 1 is active)",
    created_at: "Created date time (format: yyyy-MM-ddTHH:mm:ss)",
    created_user_id: "User ID who created",
    updated_at: "Last updated date time (format: yyyy-MM-ddTHH:mm:ss)",
    updated_user_id: "User ID who is last updated (required)",
  },
];

let items = reactive([]);

const process_array = (inputArray) => {
  return inputArray.map((item) => ({
    id: item.id,
    business_unit: item.business_unit.name_en,
    company_code: item.company_code,
    name_th: item.name_th,
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

items = process_array(input);

const handle_item_clicked = (event) => {
  const action = event.split(",");
  if (action[1] && action[1] === "view") {
    router.push({ name: "CompanyDetail", params: { id: items[0].id } });
  }
};

const handle_history = (index) => {
  console.log("history: ", index);
  router.push({ name: "HistoryTeamPage" });
};
</script>
