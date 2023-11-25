<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-data-table-virtual
    :headers="props.headers"
    :items="props.desserts"
    item-value="name"
    hide-default-footer
  >
    <template v-slot:item.view="{ item }">
      <v-checkbox color="secondary" v-model="item.view"></v-checkbox>
    </template>
    <template v-slot:item.created="{ item }">
      <v-checkbox color="secondary" v-model="item.created"></v-checkbox>
    </template>
    <template v-slot:item.updated="{ item }">
      <v-checkbox color="secondary" v-model="item.updated"></v-checkbox>
    </template>
    <template v-slot:item.deleted="{ item }">
      <v-checkbox color="secondary" v-model="item.deleted"></v-checkbox>
    </template>
  </v-data-table-virtual>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  headers: {
    type: Array,
    default: () => [],
  },
  desserts: {
    type: Array,
    default: () => [],
  },
});
</script>
