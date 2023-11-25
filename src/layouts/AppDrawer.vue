<template>
  <v-navigation-drawer rail v-model="isOpen" permanent>
    <v-list dense color="secondary">
      <nav-item
        v-for="(item, index) in items"
        :key="index"
        :is-active="item.isActive"
        :icon="item.icon"
        :to="item.path"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
import NavItem from '../components/items/NavItem.vue';

const isOpen = ref(true);

const items = [
  { icon: 'mdi-view-dashboard', isActive: true, path: '' },
  { icon: 'mdi-account-box', isActive: false, path: '/UserManagement' },
  { icon: 'mdi-cog', isActive: false, path: '' },
];
</script>
