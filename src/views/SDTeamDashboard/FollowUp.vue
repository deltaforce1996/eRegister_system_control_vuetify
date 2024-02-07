<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <div class="text-center mt-5">
      <h2>FollowUp</h2>
    </div>
    <v-card class="mx-auto mt-10 elevation-1">
      <v-card-item class="pa-8" v-if="isVendors">
        <div class="font-weight-bold">ต้องการติดตามข้อมูล SD Activites แบบใด</div>

        <v-radio-group v-model="selected">
          <v-radio class="font-weight-medium" label="Contact Owner ติดตามให้" value="1"></v-radio>
          <v-radio class="font-weight-medium" label="ส่งอีเมลติดตามให้ vendor โดยตรง" value="0"></v-radio>
        </v-radio-group>
      </v-card-item>
      <v-card-item class="pa-8" v-else>
        <div class="font-weight-bold">ต้องการติดตามข้อมูล SD Activites แบบใด</div>

        <v-radio-group v-model="selected">
          <v-radio class="font-weight-medium" label="Contact Owner ติดตามให้" value="1"></v-radio>
          <v-text-field v-model="email_owner" class="pl-10" variant="outlined" placeholder="Contact Owner ติดตามให้"
            density="compact"></v-text-field>
          <v-radio class="font-weight-medium" label="ส่งอีเมลติดตามให้ vendor โดยตรง" value="0"></v-radio>
          <v-text-field v-model="email_vendor" class="pl-10" variant="outlined"
            placeholder="ส่งอีเมลติดตามให้ vendor โดยตรง" density="compact"></v-text-field>
        </v-radio-group>


      </v-card-item>
    </v-card>
    <v-card class="mx-auto mt-3 elevation-1">
      <v-card-item class="pa-8">
        <div class="font-weight-bold">ข้อความเพิ่มเติม</div>
        <v-textarea v-model="additional_message" variant="solo-filled"></v-textarea>
      </v-card-item>
    </v-card>
    <div class="text-center mt-10">
      <v-btn rounded class="ma-2" :disabled="laoding_sent" color="black" to="/SDTeamDashboard/TrackingSDActivite" style="width: 100px;">
        <strong>ยกเลิก</strong>
      </v-btn>
      <v-btn rounded class="ma-2" :loading="laoding_sent" @click="handleSend" color="secondary" style="width: 100px;">
        <strong>ส่ง</strong>
      </v-btn>
    </div>
  </v-container>
</template>
<script setup>
/*eslint-disable no-unused-vars  */
import { ref, onBeforeMount, watch } from 'vue';
import RspService from '@/apis/RspService';
import { useRouter } from 'vue-router';
import { useErrorHandlingDialog } from '@/components/dialogs/ExceptionHandleDialogService'
const { handlingErrorsMessage } = useErrorHandlingDialog();
const router = useRouter();

const isVendors = ref(true);
const selected = ref('1');
const bp_number = ref(null);
const email_owner = ref(null);
const email_vendor = ref(null);
const additional_message = ref(null);
const laoding_sent = ref(false);

// watch(() => selected, (newValue) => {
//   console.log(newValue);
// });
onBeforeMount(() => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const _bp_number = urlParams.get('bp_number')
  const _email = urlParams.get('email');
  bp_number.value = _bp_number;
  email_owner.value = _email;
  email_vendor.value = _email;
  isVendors.value = (_bp_number === null && _email === null)
});


const handleSend = async () => {
  try {
    laoding_sent.value =true;
    if (isVendors.value) {
      const sessionData = sessionStorage.getItem("bp_numbers");
      const bpNumber_array = JSON.parse(sessionData);
      const response = await RspService.sendFollowUpVendors(bpNumber_array, selected.value, additional_message.value)
      const { is_success } = response.data;
      if (is_success) {
        router.push('/SDTeamDashboard/TrackingSDActivite');
      }
    } else {
      const email = (selected.value === "1") ? email_owner.value : email_vendor.value;
      const response = await RspService.sendFollowUpVendor(bp_number.value, selected.value, email, additional_message.value)
      const { is_success } = response.data;
      if (is_success) {
        router.push('/SDTeamDashboard/TrackingSDActivite');
      }
    }

  } catch (e) {
    if (e.response) {
      const val = e.response.data
      handlingErrorsMessage(val.message, val?.data.error);
      return;
    }
    handlingErrorsMessage("unknown", e.message);
  }finally{
    laoding_sent.value =false;
  }

}


</script>

