<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
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
      <v-btn rounded class="ma-2" color="black"  style="width: 100px;" @click="handleCancelClicked">
        <strong>ยกเลิก</strong>
      </v-btn>
      <v-btn rounded class="ma-2" color="secondary" style="width: 100px;">
        <strong>ตกลง</strong>
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { ref, reactive } from "vue";

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
//const p_item = reactive(props.item);

const valid = ref(false);
const form = reactive({
  email: "",
  userType: "",
  company: "",
  role: "",
  team: "",
  status: false,
});

const emit = defineEmits(["is-component"]);
function handleCancelClicked(){
  console.log('sss')
  const  component  = "xxx";
  const  payload  = "";
  emit("is-component",component,payload)
}
const submitForm = () => {
  if (valid.value) {
    console.log(form);
  }
};
</script>
