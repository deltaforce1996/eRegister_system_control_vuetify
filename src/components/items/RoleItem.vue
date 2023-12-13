<template>
  <v-expansion-panel class="mt-1">
    <v-expansion-panel-title :color="isExpandView ? 'secondary_active' : ''">
      <v-row no-gutters dense>
        <v-col cols="3" align-self="center">
          <p>{{ computedPermission }}</p>
        </v-col>
        <v-col cols="5" align-self="center">
          <p>{{ computedDescription }}</p>
        </v-col>
        <v-col cols="2" align-self="center">
          <v-chip :color="props.isActive ? 'green' : 'gray'" label>
            <v-badge
              dot
              inline
              :color="props.isActive ? 'green' : 'gray'"
            ></v-badge>
            <p>{{ props.isActive ? "Active" : "Inactive" }}</p>
          </v-chip>
        </v-col>
        <v-col cols="1" align-self="center">
          <button-control text="แก้ไข" @button-clicked="onItemEditClicked" />
        </v-col>
      </v-row>
    </v-expansion-panel-title>
    <v-expansion-panel-text :class="{ 'active-expand-bg': isExpandView }">
      <v-row no-gutters dense>
        <v-col cols="12">
        <permission-table
          :headers="subHeaders"
          :desserts="subDesserts"
          :is-read-only="true"
        />
      </v-col>
      <v-col>
        <v-card style="border-radius: 0px;">
            <history-control @link-clicked="onItemLogClicked" class="pr-5 pb-2 pt-1" />
          </v-card>
      </v-col>
      </v-row>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script setup>
import { defineProps, computed } from "vue";

import ButtonControl from "../controls/ButtonControl.vue";
import PermissionTable from "../../components/tables/PermissionTable.vue";
import HistoryControl from "../../components/controls/HistoryControl.vue";

const emit = defineEmits(["edited-clicked", "history-clicked"]);

const props = defineProps({
  permission: {
    type: String,
    default: "None",
  },
  description: {
    type: String,
    default: "None",
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  id: {
    type: Number,
    default: -1,
  },
  subHeaders: {
    type: Array,
    default: () => [],
  },
  subDesserts: {
    type: Array,
    default: () => [],
  },
  isExpandView: {
    type: Boolean,
    default: false,
  },
});

const computedPermission = computed(() => {
  return props.permission || "None";
});

const computedDescription = computed(() => {
  return props.description || "None";
});

const computedRoleId = computed(() => {
  return props.id
});

const onItemEditClicked = () => {
  emit("edited-clicked", computedRoleId.value);
};

const onItemLogClicked = () => {
  emit("history-clicked", computedRoleId.value);
};
</script>

<style>
.active-expand-bg {
  background: rgb(var(--v-theme-secondary_active));
}
</style>
