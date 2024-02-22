<template>
  <router-view />
</template>
<style lang="scss">
  @import "../src/styles/main.scss";
</style>
<script setup>
import { onBeforeMount } from 'vue';
import  sessionUtils  from '@/utils/sessionUtils'

onBeforeMount(() => {
  sessionUtils.sessionTemp();
  var session = sessionUtils.getSession();
  console.log(session)
});
</script>
