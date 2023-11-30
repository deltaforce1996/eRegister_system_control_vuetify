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
              <v-text-field variant="outlined" v-model="form.userType" placeholder="User Type"
                :rules="[(v) => !!v || 'User Type is required']" required density="compact"></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters dense>
            <v-col>
              <h4>Company</h4>
            </v-col>
            <v-col cols="12">
              <v-text-field variant="outlined" v-model="form.company" placeholder="company"
                :rules="[(v) => !!v || 'Comapny is required']" required density="compact"></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters dense>
            <v-col>
              <h4>Role</h4>
            </v-col>
            <v-col cols="12">
              <v-text-field variant="outlined" v-model="form.role" placeholder="role"
                :rules="[(v) => !!v || 'Role is required']" required density="compact"></v-text-field>
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
import { ref, reactive, onMounted  } from "vue";
import { useConfirmationDialog } from '@/components/dialogs/ConfirmationDialogService'

const emit = defineEmits(["is-title","is-view"]);
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
});


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
