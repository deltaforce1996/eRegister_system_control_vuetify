<template>
    <v-list-item :class="{ 'active-item': isActive }" @click="handleItemClick(id)">
      <template v-slot:prepend>
          <v-icon :color="isActive ? 'secondary' : undefined">{{ icon }}</v-icon>
        </template>
    </v-list-item>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const { isActive, icon, id } = defineProps(['isActive', 'icon', 'id']);

  const emit = defineEmits(['activate-item']);
  
  const handleItemClick = (item) => {
    if (!isActive.value) {
      emit('activate-item', item);
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
  