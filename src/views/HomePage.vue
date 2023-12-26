<template>
  <v-container fluid>
    <h3 style="margin-bottom: 15px">Example Component</h3>
    <v-row>
      <v-col cols="auto">
        <ButtonControl color="red" text="Example" />
      </v-col>
      <v-col cols="auto">
        <HistoryControl />
      </v-col>
      <v-col cols="auto">
        <PaginationControl />
      </v-col>
    </v-row>
    <h3 style="margin-bottom: 15px">Example DataTable</h3>
    <v-row>
      <v-col cols="12">
        <HistoryTable />
      </v-col>
      <v-col cols="12">
        <MasterTable />
      </v-col>
      <v-col cols="12">
        <PermissionTable :headers="herders_table" :desserts="desserts" />
      </v-col>
    </v-row>
    <h3 style="margin-bottom: 15px; margin-top: 15px">Dialog Component</h3>
    <v-row
      ><v-col cols="auto"
        ><ButtonControl
          color="black"
          text="Open Dialog"
          @button-clicked="on_open_log"
        /> </v-col
    ></v-row>
    <v-row
      ><v-col cols="auto"
        ><ButtonControl
          color="black"
          text="Open Alert"
          @button-clicked="on_open_alert"
        /> </v-col
    ></v-row>
    <v-row>
      <v-col cols="12">
        <CreditOption />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import ButtonControl from "@/components/controls/ButtonControl.vue";
import HistoryControl from "@/components/controls/HistoryControl.vue";
import PaginationControl from "@/components/controls/PaginationControl.vue";
import HistoryTable from "@/components/tables/HistoryTable.vue";
import MasterTable from "@/components/tables/MasterTable.vue";
import PermissionTable from "@/components/tables/PermissionTable.vue";
import CreditOption from "@/components/survey/CreditOption.vue";

import { useConfirmationDialog } from "@/components/dialogs/ConfirmationDialogService";
const { showDialog } = useConfirmationDialog();

import { useAlertDialogDialog} from "@/components/dialogs/AlertSuccessDialogService"
const { showAlert } = useAlertDialogDialog();

const herders_table = [
  { title: "Permission Module", key: "permission" },
  { title: "View", key: "view" },
  { title: "Create", key: "created" },
  { title: "Update", key: "updated" },
  { title: "Delete", key: "deleted" },
];

const desserts = [
  {
    permission: "Permission",
    view: true,
    created: false,
    updated: true,
    deleted: true,
  },
];

const on_open_log = async () => {
  const confirmed = await showDialog(
    "ยืนยันการบันทึก",
    'กรุณาตรวจสอบ\nคลิกปุ่ม"ตกลง"เพื่อดำเนินการ'
  );
  if (confirmed) {
    window.alert("Accept");
  } else {
    window.alert("Cancel");
  }
};

const on_open_alert = async () => {
  const confirmed = await showAlert(
    "เผยแพร่สำเร็จแล้ว",
    'คุณสามารถตรวจสอบรายการได้'
  );
  if (confirmed) {
    window.alert("Accept");
  }
};
</script>
