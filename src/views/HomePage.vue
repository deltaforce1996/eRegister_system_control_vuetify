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
    <v-row><v-col cols="auto">
        <ButtonControl color="black" text="Open Dialog" @button-clicked="on_open_log" />
      </v-col></v-row>
    <h3 style="margin-bottom: 15px">Drag drop compoenent</h3>
    <v-row>
    <draggable v-model="dragDrop" item-key="id">
        <template #item="{ element }">
            <div>
              <v-card class="mx-auto" max-width="344">
                <v-card-actions>
                  <v-btn variant="text" color="deep-purple-accent-4">
                      move {{ element.title }}
                    </v-btn>
                </v-card-actions>
                <component :is="element.content" />
              </v-card>
            </div>
          </template>
      </draggable>
  </v-row>
  </v-container>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import { ref, watch, onMounted } from 'vue';
import draggable from 'vuedraggable';
import ButtonControl from "@/components/controls/ButtonControl.vue";
import HistoryControl from "@/components/controls/HistoryControl.vue";
import PaginationControl from "@/components/controls/PaginationControl.vue";
import HistoryTable from "@/components/tables/HistoryTable.vue";
import MasterTable from "@/components/tables/MasterTable.vue";
import PermissionTable from "@/components/tables/PermissionTable.vue";

import Home1 from "@/views/Home1.vue";
import Home2 from "@/views/Home2.vue";
import Home3 from "@/views/Home3.vue";


import { useConfirmationDialog } from "@/components/dialogs/ConfirmationDialogService";
const { showDialog } = useConfirmationDialog();

const dragDrop = ref([
          { title: 'Home1', content: Home1 },
          { title: 'Home2', content: Home2 },
          { title: 'Home3', content: Home3 },
      ])


// const drag_drop = [
//   { title: 'Home1', content: Home1 },
//   { title: 'Home2', content: Home2 },
//   { title: 'Home3', content: Home3 },


// ]


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
</script>
