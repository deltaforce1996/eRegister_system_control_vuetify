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
  { text: "CCode", value: "company_code", width: 1 },
  { text: "Name TH", value: "name_th", width: 5 },
  { text: "Action", value: "action", width: 1 },
  { text: "", value: "history", width: 2 },
]);

const input = [
  {
    id: 51,
    company_code: "5003",
    name_th: "บริษัท มัส บี จำกัด",
    name_en: "MUST BE Co., Ltd.",
    taxpayer_id_number: "0105565131781",
    address_th: "62 ถนนรัชดาภิเษก แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110",
    address_en:
      "62 Ratchadapisek Road, Klongtoey Sub-District, Klongtoey District, Bangkok 10110",
    business_unit: {
      id: 4,
      name_th: "FPHT & Others",
      name_en: "FPHT & Others",
      purchasing_organization: "FPHT",
      corporation: {
        id: 1,
        name_th: "เฟรเซอร์ส พร็อพเพอร์ตี้ (ประเทศไทย)",
        name_en: "Frasers Property Thailand",
      },
    },
  },
  {
    id: 50,
    company_code: "5002",
    name_th:
      "บริษัท เฟรเซอร์ส พร็อพเพอร์ตี้ คอร์เปอร์เรท เซอร์วิสเซส (ประเทศไทย) จำกัด",
    name_en: "Frasers Property Corporate Services (Thailand) Co.,Ltd.",
    taxpayer_id_number: "0105564174495",
    address_th:
      "944 มิตรทาวน์ ออฟฟิศ ทาวเวอร์ ชั้นที่ 20 ถนนพระราม 4 แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330",
    address_en:
      "20th Floor, Mitrtown Office Tower, 944 Rama 4 Road, Wangmai, Pathumwan, Bangkok 10330",
    business_unit: {
      id: 4,
      name_th: "FPHT & Others",
      name_en: "FPHT & Others",
      purchasing_organization: "FPHT",
      corporation: {
        id: 1,
        name_th: "เฟรเซอร์ส พร็อพเพอร์ตี้ (ประเทศไทย)",
        name_en: "Frasers Property Thailand",
      },
    },
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
