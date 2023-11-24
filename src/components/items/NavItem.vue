<template>
    <v-list-item :class="{ 'active-item': isActive }" @click="handleItemClick">
      <template v-slot:prepend>
          <v-icon :color="isActive ? 'secondary' : undefined">{{ icon }}</v-icon>
        </template>
    </v-list-item>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const { isActive, icon } = defineProps(['isActive', 'icon']);
  // const emit = defineEmits();
  
  const handleItemClick = () => {
    if (!isActive.value) {
      // emit('activate-item');
    }
  };
  </script>
  
  <style scoped>
  .active-item {
    border-left: 3px solid rgb(var(--v-theme-secondary));
  }

  .active-item-icon{
    background: rgb(var(--v-theme-secondary))
  }
  </style>
  