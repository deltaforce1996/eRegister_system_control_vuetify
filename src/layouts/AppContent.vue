<template>
  <v-main class="bg-color-custom">
    <router-view />
  </v-main>
</template>

<script setup>
  
</script>

<style>
.bg-color-custom {
  background-color: rgb(var(--v-theme-primary)); /* Replace with your desired color */
}
</style>