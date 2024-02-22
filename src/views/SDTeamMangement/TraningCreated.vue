<template>
  <v-container>
    <h2>Mangement > Traning</h2>
    <div class="mt-5">
      <v-card class="elevation-1">
        <v-card-text>
          <div>
            <strong>ชื่อเรื่อง</strong>
            <v-text-field v-model="name" variant="outlined" placeholder="ชื่อกรอกชื่อเรื่อง" density="compact"></v-text-field>
          </div>
          <div>
            <strong>Link SCORM</strong>
            <v-text-field v-model="link" variant="outlined" placeholder="กรอก Link SCORM" density="compact"></v-text-field>
          </div>
          <div>
            <strong>Role</strong>
              <v-select
                  v-model="roleId"
                  density="compact"
                  variant="outlined"
                  placeholder="Role"
                  item-title="name"
                  :items="selected_roles"
                  item-value="id" />
          </div>
          <v-radio-group v-model="radios">
          <template v-slot:label>
            <div><strong>Active กิจกรรมนี้เมื่อใด</strong></div>
          </template>

          <v-radio value="now">
            <template v-slot:label>
              <div  class="pa-0"><strong class="text-black">Active ตอนนี้</strong></div>
            </template>
          </v-radio>

          <v-radio value="selected" class="pa-0">
            <template v-slot:label>
              <div style="width: 500px;">
              <v-row dense align="left">
              <v-col cols="3" align-self="center">
                <strong class="text-black">Active วันที่ </strong>
              </v-col>
              <v-col cols="9" align-self="center">
                <DatePickerControl
                :disabled="radios === 'now'"
                :date="createdTime"
                @date="createdTime = $event" />
              </v-col>
              </v-row>
              </div>
            </template>
          </v-radio>
        </v-radio-group>
        </v-card-text>
      </v-card>
      <div class="text-center mt-5">
        <v-btn rounded class="ma-2"
        to="/SDTeamMangement/Traning"
        color="black" style="width: 100px;">
          <strong>ยกเลิก</strong>
        </v-btn>
        <v-btn rounded class="ma-2" color="secondary" style="width: 100px;" @click="handleAccept">
          <strong>ตกลง</strong>
        </v-btn>
      </div>
    </div>
  </v-container>
</template>
<script setup>
// eslint-disable-next-line no-unused-vars
import { ref,onBeforeMount,computed,onMounted } from "vue";
import roleService from '@/apis/RoleService';
import { useConfirmationDialog } from '@/components/dialogs/ConfirmationDialogService'
import { useAlertDialogDialog } from "@/components/dialogs/AlertSuccessDialogService";
import { useErrorHandlingDialog } from '@/components/dialogs/ExceptionHandleDialogService'
import DatePickerControl from '@/components/controls/DatePickerControl.vue'
const { handlingErrorsMessage } = useErrorHandlingDialog();

const { showDialog } = useConfirmationDialog();
const { showAlert } = useAlertDialogDialog();



const selected_roles = ref([]);
const name = ref(null);
const link = ref(null);
const roleId = ref(null);
const createdTime = ref(null);
const radios = ref(null);
// const emit = defineEmits(["visible"]);
// const props = defineProps({
//   visible: {
//     type: Boolean,
//     default: false,
//   },
// });
// const date = ref(null);
// const file = ref(null);
// const dialog = computed({
//   get() { return props.visible },
//   set(value) { emit("visible", value) },
// });

// const handleOnChangeFile = async (val) => {
//   file.value = val;
// }
onBeforeMount(() => {
  // const queryString = window.location.search;
  //const urlParams = new URLSearchParams(queryString);
  // const _bp_number = urlParams.get('bp_number')
  // const _email = urlParams.get('email');
  // bp_number.value = _bp_number;
  // email_owner.value = _email;
  // email_vendor.value = _email;
  // isVendors.value = (_bp_number === null && _email === null)
});
onMounted(async () => {
  getRoles();

});

const getRoles = async () => {
  try {
    const response = await roleService.getRoleAll();
    if (response.data?.is_success) {
      selected_roles.value = response.data.data
    }
  } catch (e) {
    if (e.response) {
      const val = e.response.data
      handlingErrorsMessage(val.message, val?.data.error);
      return;
    }
    handlingErrorsMessage("unknown", e.message);
  }
}
// eslint-disable-next-line no-unused-vars
const on_open_alert = async () => {
  const confirmed = await showAlert(
    "เผยแพร่สำเร็จแล้ว",
    "คุณสามารถตรวจสอบรายการได้"
  );
  if (confirmed) {
    window.alert("Accept");
  }
};
const handleAccept = async () =>{

  const confirmed = await showDialog('ยืนยัน Active ตอนนี้','กรุณาตรวจสอบคลิกปุ่ม "ตกลง" เพื่อดำเนินการ');
      if (confirmed) {
        console.log('Action confirmed!');
      } else {
        console.log('Action cancelled.');
      }
}

</script>

