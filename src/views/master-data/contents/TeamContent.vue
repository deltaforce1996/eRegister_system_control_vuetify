<template>
  <v-container fluid>
    <v-row no-gutters justify="end">
      <button-control
        icon="mdi mdi-plus"
        text="Create Team"
        @button-clicked="on_go_to_create"
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
import MasterTable from "@/components/tables/MasterTable.vue";
import ButtonControl from "@/components/controls/ButtonControl.vue";
import { useRouter } from "vue-router";
import { reactive } from "vue";
import { useConfirmationDialog } from "@/components/dialogs/ConfirmationDialogService";
const { showDialog } = useConfirmationDialog();

const router = useRouter();

const headers = reactive([
  { text: "ID", value: "id", width: 1 },
  { text: "Business Unit", value: "business_unit", width: 2 },
  { text: "Company", value: "company", width: 2 },
  { text: "Name TH", value: "name_th", width: 3 },
  { text: "Status", value: "status", width: 1 },
  { text: "Action", value: "action", width: 2 },
  { text: "", value: "history", width: 1 },
]);

let items = reactive([]);

const data_api_get_all_team_mock = [
  {
    id: 0,
    company: {
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
    name_th: "name_th",
    name_en: "name_en",
    is_active: 1,
    created_at: "2023-02-01 11:00:00",
    created_user_id: 1,
    updated_at: "2023-02-01 11:00:00",
    updated_user_id: 1,
  },
];

const process_array = (inputArray) => {
  return inputArray.map((item) => ({
    id: 1,
    business_unit: item?.company?.business_unit?.name_th,
    business_unit_id: item?.company?.business_unit?.id,
    company: item?.company?.name_en,
    company_id: item?.company?.id,
    name_th: item?.name_th,
    name_en: item?.name_en,
    status: true,
    action: [
      { color: "secondary", icon: "mdi mdi-pencil", text: "", action: "edit" },
      { color: "black", icon: "mdi mdi-trash-can", text: "", action: "delete" },
    ],
    history: "history_log",
  }));
};

items = process_array(data_api_get_all_team_mock);

const on_go_to_create = () => {
  router.push({ name: "TeamManagement" });
};

const handle_item_clicked = async (event) => {
  const result = event.split(",");
  if (result.length > 0 && result[1] === "edit") {
    router.push({ name: "TeamManagement", params: { id: result[0] } });
  }

  if (result.length > 0 && result[1] === "delete") {
    const is_ok = await showDialog(
      "ยืนยันการลบ Team ?",
      "กรุณาตรวจสอบคุณไม่สามารถกลับมาแก้ไขได้\nคลิกปุ่มตกลง เพื่อดำเนินการ"
    );
    if (is_ok) {
      console.log("Call api delete: ", result[0]);
    }
  }
};

const handle_history = (index) => {
  console.log("history: ", index);
  router.push({ name: "HistoryTeamPage" });
};
</script>
