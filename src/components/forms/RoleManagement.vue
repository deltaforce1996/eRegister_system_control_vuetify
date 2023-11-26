<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-form ref="form" @submit.prevent="submit">
          <v-row no-gutters dense>
            <v-col><h4>Name Rule</h4></v-col>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                v-model="role_name"
                placeholder="กรอกชื่อ role"
                :rules="[(v) => !!v || 'Name role is required']"
                density="compact"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters dense>
            <v-col><h4>Description</h4></v-col>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                v-model="role_desc"
                placeholder="กรอกรายละเอียด role"
                :rules="[(v) => !!v || 'Description is required']"
                required
                density="compact"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";


const role_name = ref("");
const role_desc = ref("");
const emit = defineEmits(['submit_form']);

const submit = () => {
  emit("submit_form", { role_name: role_name.value, role_desc: role_desc.value });
};
</script>
