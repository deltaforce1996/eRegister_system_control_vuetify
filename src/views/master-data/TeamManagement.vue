<template>
  <v-container>
    <create-team-form v-if="!hasId" />
    <edit-team-form v-if="hasId" :item="itemTeam" />
  </v-container>
</template>

<script setup>
import CreateTeamForm from "@/components/forms/CreateTeamForm.vue";
import EditTeamForm from "@/components/forms/EditTeamForm.vue";
import { reactive } from "vue";
import { onMounted } from "vue";
import { computed } from "vue";

import { useRoute } from "vue-router";

const route = useRoute();

const id = route.params.id;
const hasId = computed(() => !!id);
let itemTeam = reactive({});

const data_api_get_all_team_mock = {
  id: 0,
  company: {
    id: 1,
    company_code: "0006",
    name_th: "Thai name",
    name_en: "English name",
    taxpayer_id_number: "Taxpayer ID number of the company",
    business_unit: {
      id: 1,
      name_th: "business unit",
      name_en: "business unit",
      purchasing_organization: "Purchasing organization code",
    },
    address_th: "Address of the company in Thai",
    address_en: "Address of the company in English",
    is_active: "The company active status (0 is inactive, 1 is active)",
    created_at: "Created date time (format: yyyy-MM-ddTHH:mm:ss)",
    created_user_id: "User ID who created",
    updated_at: "Last updated date time (format: yyyy-MM-ddTHH:mm:ss)",
    updated_user_id: "User ID who is last updated (required)",
  },
  name_th: "name_th",
  name_en: "name_en",
  is_active: 1,
  created_at: "2023-02-01 11:00:00",
  created_user_id: 1,
  updated_at: "2023-02-01 11:00:00",
  updated_user_id: 1,
};

const process_array = (item) => {
  return {
    id: 1,
    business_unit: item?.company?.business_unit?.name_th,
    business_unit_id: item?.company?.business_unit?.id,
    company: item?.company?.name_en,
    company_id: item?.company?.id,
    name_th: item?.name_th,
    name_en: item?.name_en,
    status: true,
    action: [
      { color: "secondary", icon: "mdi mdi-pencil", text: "", action: "edit" },
      { color: "black", icon: "mdi mdi-trash-can", text: "", action: "delete" },
    ],
    history: "history_log",
    is_active: item?.is_active
  };
};

itemTeam = process_array(data_api_get_all_team_mock);
onMounted(() => {
  if (hasId.value) {
    console.log("Call team by id");
  }
});
</script>
