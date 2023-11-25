<template>
  <v-row align="center" justify="end" no-gutters>
    <v-col cols="12" class="d-flex justify-end">
      <a>
        <p
          class="custom-font-size clickable-underline"
          @click="handleItemClick"
        >
          History logs
        </p>
      </a>
    </v-col>
  </v-row>
</template>

<script setup>
const emit = defineEmits(["link_clicked"]);

const handleItemClick = () => {
  emit("link_clicked");
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
