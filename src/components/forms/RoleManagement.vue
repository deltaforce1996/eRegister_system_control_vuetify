<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
          <v-row no-gutters dense>
            <v-col><h4>Name Rule</h4></v-col>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                v-model="form.name"
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
                v-model="form.description"
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
import { ref, reactive } from "vue";

const valid = ref(false);

const form = reactive({
  name: "",
  description: "",
});

const submitForm = () => {
  if (valid.value) {
    console.log(form);
  }
};
</script>
