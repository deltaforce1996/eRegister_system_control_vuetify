<template>
  <v-navigation-drawer rail v-model="isOpen" permanent>
    <v-list dense color="secondary">
      <nav-item
        v-for="(item, index) in items"
        :key="index"
        :go-to="item.path"
        :is-active="isActive(item.path)"
        :icon="item.icon"
        :id="item.id"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import NavItem from "../components/items/NavItem.vue";

const isOpen = ref(true);
const route = useRoute();

const isActive = (path) => {
  return route.path === path;
};

const items = [
  { id: 1, icon: "mdi mdi-information", path: "/" },
  { id: 2, icon: "mdi mdi-account-cog", path: "/UserManagement" },
  { id: 3, icon: "mdi mdi-account-lock", path: "/ListRolesPage" },
  { id: 4, icon: "mdi mdi-clipboard-list", path: "/2" },
  { id: 5, icon: "mdi mdi-text-search-variant", path: "/3" },
  { id: 6, icon: "mdi mdi-chart-timeline-variant", path: "/4" },
  { id: 7, icon: "mdi mdi-account-group", path: "/5" },
  { id: 8, icon: "mdi mdi-help-circle", path: "/MasterDataManagement" },
];

</script>
