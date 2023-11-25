<template>
  <v-expansion-panel>
    <v-expansion-panel-title>
      <v-row no-gutters dense justify="space-around">
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
    <v-expansion-panel-text>
      <v-row>
        <permission-table :headers="subHeaders" :desserts="subDesserts" :is-read-only="true" />
      </v-row>
      <v-row align="center" justify-end>
       <history-control @link_clicked="onItemLogClicked"/>
      </v-row>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script setup>
import ButtonControl from "../controls/ButtonControl.vue";
import PermissionTable from "../../components/tables/PermissionTable.vue";
import HistoryControl from "../../components/controls/HistoryControl.vue"
import { defineProps, computed } from "vue";

const emit = defineEmits(["edited-clicked", "history_clicked"]);

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
});

const computedPermission = computed(() => {
  return props.permission || "None";
});

const computedDescription = computed(() => {
  return props.description || "None";
});

const onItemEditClicked = () => {
  emit("edited-clicked", props.id);
};

const onItemLogClicked = () => {
    emit("history_clicked", props.id)
}
</script>
