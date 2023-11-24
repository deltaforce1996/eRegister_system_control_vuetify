<template>
    <v-navigation-drawer rail v-model="isOpen" permanent>
      <v-list dense color="secondary">
        <nav-item
          v-for="(item, index) in items"
          :key="index"
          :is-active="item.isActive"
          :icon="item.icon"
        />
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import NavItem from '../components/items/NavItem.vue';
  
  const isOpen = ref(true);
  
  const items = [
    { icon: 'mdi-view-dashboard', isActive: true },
    { icon: 'mdi-account-box', isActive: false },
    { icon: 'mdi-cog', isActive: false },
  ];
  </script>
  