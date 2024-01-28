<template>
  <v-container>
    <create-team-form v-if="!hasId" />
    <edit-team-form v-if="hasId" :item="itemTeam" />
  </v-container>
</template>

<script setup>
import CreateTeamForm from "@/components/forms/CreateTeamForm.vue";
import EditTeamForm from "@/components/forms/EditTeamForm.vue";

import { ref } from "vue";
import { onMounted } from "vue";
import { computed } from "vue";

import TeamService from "@/apis/TeamService";

import { useRoute } from "vue-router";

const route = useRoute();

const id = route.params.id;
const hasId = computed(() => !!id);
const itemTeam = ref({});

const process_array = (item) => {
  return {
    id: item?.id,
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
    is_active: item?.is_active,
  };
};

onMounted(async () => {
  if (hasId.value) {
    await onLoadedTeamVyId(id);
  }
});

const onLoadedTeamVyId = async (teamId) => {
  try {
    const response = await TeamService.getTeamById(teamId);
    if (response.data?.is_success) {
      itemTeam.value = process_array(response.data.data);
    }
  } catch (error) {
    //Failed
  }
};
</script>
