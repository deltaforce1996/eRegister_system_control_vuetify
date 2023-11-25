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
        :to="item.path"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
import NavItem from "../components/items/NavItem.vue";

const isOpen = ref(true);
const activeItemId = ref(0);

const setActiveItem = (clickedItem) => {
  console.log(JSON.stringify(activeItemId))
  activeItemId.value = clickedItem.id;
};

const items = [
  { id: 0, icon: "mdi-view-dashboard", isActive: false, path: "/" },
  { id: 1, icon: "mdi-account-box", isActive: false, path: "/UserManagement" },
  { id: 2, icon: "mdi-cog", isActive: false, path: "/ListRolesPage" },
];
</script>
