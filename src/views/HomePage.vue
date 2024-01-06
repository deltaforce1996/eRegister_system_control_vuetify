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
    <v-row
      ><v-col cols="auto">
        <ButtonControl
          color="black"
          text="Open Dialog"
          @button-clicked="on_open_log"
        /> </v-col
    ></v-row>

    <!-- <h3 style="margin-bottom: 15px">Drag drop compoenent</h3>
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
    </v-row> -->

    <!-- <h3 style="margin-bottom: 15px; margin-top: 15px">Scrom player</h3> -->
    <!-- <v-row> -->
    <!-- <iframe :src="courseURL"
       name="course"
       width="800"
       height="500"
       frameborder="0"></iframe> -->
    <!-- <ScormPlayer :path="`${courseURL}`"></ScormPlayer> -->
    <!-- <iframe
        ref="scormFrame"
        :src="courseURL"
        width="85%"
        height="700"
      ></iframe> -->
    <!-- </v-row> -->

    <v-row>
      <v-col cols="12">
        <v-form ref="form">
          <h3 style="margin-bottom: 15px; margin-top: 15px">
            Suvey Paragragps
          </h3>
          <v-row dense>
            <ParagrahpNone />
          </v-row>
          <v-row dense>
            <ParagrahpScore />
          </v-row>
          <h3 style="margin-bottom: 15px; margin-top: 15px">
            Suvey Multi choices
          </h3>
          <v-row dense>
            <MultiChoiceNone />
          </v-row>
          <v-row dense>
            <MultiChoiceScore />
          </v-row>
          <v-row dense>
            <MultiChoiceAlign />
          </v-row>
          <h3 style="margin-bottom: 15px; margin-top: 15px">Suvey Checkboxs</h3>
          <v-row>
            <CheckboxNone />
          </v-row>
          <v-row>
            <CheckboxScore />
          </v-row>
          <v-row>
            <CheckboxAlign />
          </v-row>
          <h3 style="margin-bottom: 15px; margin-top: 15px">Suvey Dropdawns</h3>
          <v-row>
            <DropdownNone />
          </v-row>
          <v-row>
            <DropdownScore />
          </v-row>
          <v-row>
            <DcropdownAlign />
          </v-row>
          <h3 style="margin-bottom: 15px; margin-top: 15px">Suvey Upload</h3>
          <v-row>
            <UploadNone />
          </v-row>
          <v-row>
            <UploadScore />
          </v-row>
        </v-form>
      </v-col>
    </v-row>

    <!-- <h3 style="margin-bottom: 15px; margin-top: 15px">Question card</h3>
    <v-row>
      <v-col cols="12">
        <v-form ref="form">
          <QuestionOption type="None" id="0" />
        </v-form>
      </v-col>
    </v-row> -->

    <h3 style="margin-bottom: 15px; margin-top: 15px">
      List Drag & Drop Question card
    </h3>
    <!-- <v-select
      label="Select"
      :items="['None', 'Score', 'Align']"
      variant="solo"
      v-model="typeQuestionCard"
    ></v-select> -->
    <draggable v-model="cardsDragDrop" tag="ul" handle=".handle" item-key="id">
      <template v-slot:item="{ element, index }">
        <v-row>
          <!-- <v-col cols="12" sm="6" md="4">
            <v-card :color="element.color" dark>
              <v-card-title>
                {{ element.title }}
                <v-btn small class="handle">☰</v-btn>
              </v-card-title>
              <v-card-text>{{ element.text }}</v-card-text>
            </v-card>
          </v-col> -->
          <v-col cols="12">
            <v-form ref="form">
              <QuestionOption
                :type="element.typeQuestionCard"
                :id="element.id.toString()"
                :index="Number(index)"
                :data="element.data"
                @on-update="handleQuestionUpdate"
                @on-remove="handleQuestionRemove"
              />
            </v-form>
          </v-col>
        </v-row>
      </template>
    </draggable>
    <v-btn @click="submitForm">Submit</v-btn>
  </v-container>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import { ref, watch, onMounted, onBeforeMount, onBeforeUnmount } from "vue";
// import  scormplayer from 'vue-scorm-player'
// import { SCORM } from 'pipwerks-scorm-api-wrapper'
// import { SCORM } from 'pipwerks-scorm-api-wrapper';
import draggable from "vuedraggable";
import ButtonControl from "@/components/controls/ButtonControl.vue";
import HistoryControl from "@/components/controls/HistoryControl.vue";
import PaginationControl from "@/components/controls/PaginationControl.vue";
import HistoryTable from "@/components/tables/HistoryTable.vue";
import MasterTable from "@/components/tables/MasterTable.vue";
import PermissionTable from "@/components/tables/PermissionTable.vue";
import CreditOption from "@/components/survey/CreditOption.vue";
import QuestionOption from "@/components/survey/QuestionOption.vue";

import ParagrahpNone from "@/components/survey/forms/paragrahps/ParagrahpNone.vue";
import ParagrahpScore from "@/components/survey/forms/paragrahps/ParagrahpScore.vue";

import MultiChoiceNone from "@/components/survey/forms/multi-choice/MultiChoiceNone.vue";
import MultiChoiceScore from "@/components/survey/forms/multi-choice/MultiChoiceScore.vue";
import MultiChoiceAlign from "@/components/survey/forms/multi-choice/MultiChoiceAlign.vue";

import CheckboxNone from "@/components/survey/forms/checkboxs/CheckboxNone.vue";
import CheckboxScore from "@/components/survey/forms/checkboxs/CheckboxScore.vue";
import CheckboxAlign from "@/components/survey/forms/checkboxs/CheckboxAlign.vue";

import DropdownNone from "@/components/survey/forms/dropsdawn/DropdownNone.vue";
import DropdownScore from "@/components/survey/forms/dropsdawn/DropdownScore.vue";
import DcropdownAlign from "@/components/survey/forms/dropsdawn/DcropdownAlign.vue";

import UploadNone from "@/components/survey/forms/uploads-control/UploadNone.vue";
import UploadScore from "@/components/survey/forms/uploads-control/UploadScore.vue";

// import { SCORM } from "pipwerks-scorm-api-wrapper";

// import Home1 from "@/views/Home1.vue";
// import Home2 from "@/views/Home2.vue";
// import Home3 from "@/views/Home3.vue";

import { useConfirmationDialog } from "@/components/dialogs/ConfirmationDialogService";
const { showDialog } = useConfirmationDialog();

import { useAlertDialogDialog } from "@/components/dialogs/AlertSuccessDialogService";
const { showAlert } = useAlertDialogDialog();
// const dragDrop = ref([
//   { title: "Home1", content: Home1 },
//   { title: "Home2", content: Home2 },
//   { title: "Home3", content: Home3 },
// ]);

const cardsDragDrop = ref([
  {
    id: "1",
    typeQuestionCard: "None",
    data: {
      controlType: "Paragraph",
      metaData: {
        question: "gvgukgug",
        answer: "",
        isRequire: true,
      },
    },
  },
  {
    id: "2",
    typeQuestionCard: "None",
    data: {
      controlType: "Multichoice",
      metaData: {
        question: "ข้อใดถูกที่สุด",
        isRequired: false,
        answers: [
          {
            title: "chioce",
            isChecked: false,
            answer: "ตัวเลือกที่ 1",
          },
          {
            title: "chioce",
            isChecked: false,
            answer: "ตัวเลือกที่ 2",
          },
          {
            title: "other",
            isChecked: false,
            answer: "ตัวเลือกอื่นๆ",
          },
        ],
      },
    },
  },
]);

// const typeQuestionCard = ref("None");

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

const form = ref(null);

const submitForm = () => {
  if (form.value.validate()) {
    // ทำการส่งข้อมูลของฟอร์มหากผ่านการตรวจสอบความถูกต้อง
    // สามารถทำการนำทางหรือจัดการข้อมูลต่อได้ที่นี่
  }
};

onMounted(() => {
  //   SCORM.init();
  //   courseURL.value =
  //     "https://8e07-1-46-134-176.ngrok-free.app//mod/scorm/player.php?a=5&currentorg=Frasers_property_-_ESG_Made_Simple_ORG&scoid=10&sesskey=miFNTCFFQs&display=popup&mode=normal";
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

const on_open_alert = async () => {
  const confirmed = await showAlert(
    "เผยแพร่สำเร็จแล้ว",
    "คุณสามารถตรวจสอบรายการได้"
  );
  if (confirmed) {
    window.alert("Accept");
  }
};

const handleQuestionUpdate = (item) => {
  console.log(JSON.stringify(item));
};

const handleQuestionRemove = (id) => {
  const indexOfById = cardsDragDrop.value.findIndex((el) => el.id == id);
  if (indexOfById > -1) cardsDragDrop.value.splice(indexOfById, 1);
};
</script>
