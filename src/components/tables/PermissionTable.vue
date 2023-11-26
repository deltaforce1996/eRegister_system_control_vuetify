<!-- eslint-disable vue/valid-v-slot -->

<template>
  <v-data-table-virtual
    :headers="props.headers"
    :items="props.desserts"
    item-value="name"
    hide-default-footer
    density="compact"
  >
    <template v-slot:item.permission="{ item }" v-if="!isReadOnly">
      <v-row no-gutters align="center" justify="center">
        <v-col cols="12">
          <v-select
            density="compact"
            v-model="item.permission"
            :items="item_selection"
            variant="solo"
          ></v-select>
        </v-col>
      </v-row>
    </template>
    <template v-slot:item.view="{ item }">
      <v-checkbox
        density="compact"
        color="secondary"
        v-model="item.view"
        :readonly="isReadOnly"
      ></v-checkbox>
    </template>
    <template v-slot:item.created="{ item }">
      <v-checkbox
        density="compact"
        color="secondary"
        v-model="item.created"
        :readonly="isReadOnly"
      ></v-checkbox>
    </template>
    <template v-slot:item.updated="{ item }">
      <v-checkbox
        density="compact"
        color="secondary"
        v-model="item.updated"
        :readonly="isReadOnly"
      ></v-checkbox>
    </template>
    <template v-slot:item.deleted="{ item }">
      <v-checkbox
        density="compact"
        color="secondary"
        v-model="item.deleted"
        :readonly="isReadOnly"
      ></v-checkbox>
    </template>
  </v-data-table-virtual>
</template>

<script setup>
import { defineProps, watch, ref } from "vue";

const props = defineProps({
  headers: {
    type: Array,
    default: () => [],
  },
  desserts: {
    type: Array,
    default: () => [],
  },
  isReadOnly: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["on-item-change"]);
const dessertsRef = ref(props.desserts);

watch(
  dessertsRef.value,
  (newDesserts) => {
    emit("on-item-change", newDesserts);
  },
  { deep: true }
);

const item_selection = [
  "California",
  "Colorado",
  "Florida",
  "Georgia",
  "Texas",
  "Wyoming",
];
</script>
