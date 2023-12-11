<template>
    <v-card class="elevation-1">
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-row no-gutters dense>
            <v-col>
              <h4>Email</h4>
            </v-col>
            <v-col cols="12">
              <v-text-field variant="outlined" v-model="form.email" placeholder="Email"
                :rules="[(v) => !!v || 'email is required']" density="compact"></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters dense>
            <v-col>
              <h4>User type</h4>
            </v-col>
            <v-col cols="12">
              <v-select
                variant="outlined"
                density="compact"
                :disabled="loading.memberType"
                :loading="loading.memberType"
                :items="items.memberType"
                item-title="name"
                item-value="id"
              ></v-select>
              <!-- <v-text-field variant="outlined" v-model="form.userType" placeholder="User Type"
                :rules="[(v) => !!v || 'User Type is required']" required density="compact"></v-text-field> -->
            </v-col>
          </v-row>
          <v-row no-gutters dense>
            <v-col>
              <h4>Company</h4>
            </v-col>
            <v-col cols="12">
              <v-select
                variant="outlined"
                density="compact"
                :disabled="loading.comapny"
                :loading="loading.comapny"
                :items="items.comapny"
                item-title="name_th"
                item-value="id"
              ></v-select>
              <!-- <v-text-field variant="outlined" v-model="form.company" placeholder="company"
                :rules="[(v) => !!v || 'Comapny is required']" required density="compact"></v-text-field> -->
            </v-col>
          </v-row>
          <v-row no-gutters dense>
            <v-col>
              <h4>Role</h4>
            </v-col>
            <v-col cols="12">
              <v-select
                variant="outlined"
                density="compact"
                :disabled="loading.role"
                :loading="loading.role"
                :items="items.role"
                item-title="name"
                item-value="id"
              ></v-select>
              <!-- <v-text-field variant="outlined" v-model="form.role" placeholder="role"
                :rules="[(v) => !!v || 'Role is required']" required density="compact"></v-text-field> -->
            </v-col>
          </v-row>
          <v-row no-gutters dense>
            <v-col>
              <h4>Team</h4>
            </v-col>
            <v-col cols="12">
              <v-text-field variant="outlined" v-model="form.team" placeholder="Team"
                :rules="[(v) => !!v || 'Team is required']" required density="compact"></v-text-field>
            </v-col>
          </v-row>
          <v-row v-if="p_index > -1" no-gutters dense>
            <v-col>
              <h4>Status</h4>
            </v-col>
            <v-col cols="12">
              <v-checkbox v-model="form.status"></v-checkbox>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
    <div class="text-center mt-5">
      <v-btn rounded class="ma-2" color="black"  style="width: 100px;" @click="dismiss">
        <strong>ยกเลิก</strong>
      </v-btn>
      <v-btn rounded class="ma-2" color="secondary" style="width: 100px;" @click="submit">
        <strong>ตกลง</strong>
      </v-btn>
    </div>
</template>

<script setup>
import memberTypeService from '@/apis/MemberTypeService';
import roleService from '@/apis/RoleService';
import compnayService from '@/apis/CompnayService';
import { ref, reactive, onMounted  } from "vue";
import { useConfirmationDialog } from '@/components/dialogs/ConfirmationDialogService'
import { useErrorHandlingDialog } from '@/components/dialogs/ExceptionHandleDialogService'

const emit = defineEmits(["is-title","is-view"]);
const { throwExceptionMessage } = useErrorHandlingDialog();
const { showDialog } = useConfirmationDialog();

const props = defineProps({
  index: {
    type: Number,
    default: -1,
  },
  item: {
    type: Object,
    default: () => {}
  },
});

const p_index = reactive(props.index);
const valid = ref(false);
const loading =ref({
  submit :false,
  role:false,
  comapny :false,
  memberType:false,
})
const items =ref({
  role:[],
  comapny :[],
  memberType:[],
})
const form = reactive({
  email: "",
  userType: "",
  company: "",
  role: "",
  team: "",
  status: false,
});

onMounted (() => {
    if (props.index  == -1) {
      emit('is-title', "Add User");
    } else {
      console.log(props.index);
      emit('is-title', "Edit User");
    }
    handleLoadAllMemberType();
    handleLoadAllCompany();
    handleLoadAllRole();
});

const handleLoadAllMemberType = async() =>{
  try {
      loading.value.memberType = true;
      const response = await memberTypeService.getMemberTypeAll();
      if (response.data?.is_success) {
        items.value.memberType = response.data.data
      }
    } catch (e) {
      if (e.response) {
        const val = e.response.data
        throwExceptionMessage(val.message, val?.data.error);
        return;
      }
      throwExceptionMessage("unknown", e.message);
    } finally {
      loading.value.memberType = false;
    }
}
const handleLoadAllCompany = async () =>{
  try {
      loading.value.comapny = true;
      const response = await compnayService.getCompanyAll();
      if (response.data?.is_success) {
        items.value.comapny = response.data.data
      }
    } catch (e) {
      if (e.response) {
        const val = e.response.data
        throwExceptionMessage(val.message, val?.data.error);
        return;
      }
      throwExceptionMessage("unknown", e.message);
    } finally {
      loading.value.comapny = false;
    }
}
const handleLoadAllRole = async () =>{
  try {
      loading.value.role = true;
      const response = await roleService.getRoleAll();
      if (response.data?.is_success) {
        items.value.role = response.data.data
      }
    } catch (e) {
      if (e.response) {
        const val = e.response.data
        throwExceptionMessage(val.message, val?.data.error);
        return;
      }
      throwExceptionMessage("unknown", e.message);
    } finally {
      loading.value.role = false;
    }
}


const dismiss=()=>{
    emit("is-view",'user-main')
}
const submit = async (e) => {
  e.preventDefault()
  const confirmed = await showDialog('Confirm Action','Are you sure you want to proceed?');
      if (confirmed) {
        console.log('Action confirmed!');
      } else {
        console.log('Action cancelled.');
      }
  // if (valid.value) {
  //   console.log(form);
  // }
};

// const submit_from_new_role = async () => {
//   const confirmed = await showDialog('Confirm Action','Are you sure you want to proceed?');
//       if (confirmed) {
//         console.log('Action confirmed!');
//       } else {
//         console.log('Action cancelled.');
//       }
// };
</script>
