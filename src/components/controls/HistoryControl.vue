<template>
  <v-row  no-gutters>
    <v-col cols="12" class="d-flex justify-end pr-5 pb-2 pt-1">
      <a>
        <p
          class="custom-font-size clickable-underline"
          @click="handleItemClick"
        >
          History Logs
        </p>
      </a>
    </v-col>
  </v-row>
</template>

<script setup>
const emit = defineEmits(["link-clicked"]);

const handleItemClick = () => {
  emit("link-clicked");
};
</script>

<style>
.custom-font-size {
  font-size: 12px;
}

.clickable-underline {
  text-decoration: underline;
  cursor: pointer;
}
</style>
