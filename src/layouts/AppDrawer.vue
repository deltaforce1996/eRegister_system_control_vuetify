<template>
  <v-navigation-drawer rail v-model="isOpen" permanent>
    <v-list dense color="secondary">
      <nav-item
        v-for="(item, index) in items"
        :key="index"
        :is-active="item.id === activeItemId"
        :icon="item.icon"
        :id="item.id"
        @activate-item="setActiveItem(item)"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
import NavItem from '../components/items/NavItem.vue';

const isOpen = ref(true);

let items = [
  { id: 0, icon: 'mdi-view-dashboard' },
  { id: 1, icon: 'mdi-account-box' },
  { id: 2, icon: 'mdi-cog' },
];

const activeItemId = ref(0);

const setActiveItem = (clickedItem) => {
  activeItemId.value = clickedItem.id;
};
</script>
