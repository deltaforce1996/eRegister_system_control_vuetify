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
            <v-card class="mx-auto mt-1" max-width="344">
                <v-btn variant="text" color="deep-purple-accent-4">
                  move {{ element.title }}
                </v-btn>
              <component :is="element.content" />
            </v-card>
          </div>
        </template>
      </draggable>
    </v-row>

    <h3 style="margin-bottom: 15px;margin-top: 15px">Scrom player</h3>
    <v-row>
      <!-- <iframe :src="courseURL"
       name="course"
       width="800"
       height="500"
       frameborder="0"></iframe> -->
       <ScormPlayer
          :path="`${courseURL}`"
    ></ScormPlayer>
       <iframe ref="scormFrame" :src="courseURL" width="100%" height="600"></iframe>
    </v-row>
  </v-container>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import { ref, watch, onMounted, onBeforeMount,onBeforeUnmount } from 'vue';
// import  scormplayer from 'vue-scorm-player'
// import { SCORM } from 'pipwerks-scorm-api-wrapper'
// import { SCORM } from 'pipwerks-scorm-api-wrapper';
import draggable from 'vuedraggable';
import ButtonControl from "@/components/controls/ButtonControl.vue";
import HistoryControl from "@/components/controls/HistoryControl.vue";
import PaginationControl from "@/components/controls/PaginationControl.vue";
import HistoryTable from "@/components/tables/HistoryTable.vue";
import MasterTable from "@/components/tables/MasterTable.vue";
import PermissionTable from "@/components/tables/PermissionTable.vue";

import { SCORM } from 'pipwerks-scorm-api-wrapper';

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

const courseURL = ref(null);

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
onMounted(() => {

  SCORM.init();
  courseURL.value = '/src/assets/scom/story.html'

});
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
