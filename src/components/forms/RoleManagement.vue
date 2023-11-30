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
                v-model="track_role_name"
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
                v-model="track_role_desc"
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
import { computed } from "vue";

const emit = defineEmits(["submit_form"]);

const props = defineProps({
  role_name_p: {
    type: String,
    default: null,
  },
  role_desc_p: {
    type: String,
    default: null,
  },
});

const track_role_name = computed(() => {
  return props.role_name_p;
});

const track_role_desc = computed(() => {
  return props.role_desc_p;
});

const submit = () => {
  emit("submit_form", {
    role_name: track_role_name,
    role_desc: track_role_desc,
  });
};
</script>
