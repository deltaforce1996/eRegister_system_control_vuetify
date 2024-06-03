<template>
  <!-- permanent -->
  <v-navigation-drawer rail v-model="isOpen" expand-on-hover>
    <v-list dense color="secondary">
      <nav-item v-for="(item, index) in items" :key="index" :go-to="item.path" :is-active="isActive(item.path)"
        :icon="item.icon" :id="item.id" :title="item.title"></nav-item>
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
  {
    id: 1,
    title:'Home',
    icon: "mdi mdi-information",
    isActive: false,
    path: "/"
  },
  {
    id: 2,
    title:'User Management',
    icon: "mdi mdi-account-cog",
    isActive: false,
    path: "/UserManagement"
  },
  {
    id: 3,
    title:'Role Management',
    icon: "mdi mdi-account-lock",
    isActive: false,
    path: "/ListRolesPage"
  },
  {
    id: 4,
    title: "SD team mangement",
    icon: "mdi mdi-clipboard-list",
    isActive: false,
    path: "/SDTeamMangement/SDActiveMangement"
  },
  {
    id: 8,
    title:'SD team dashboard',
    icon: "mdi mdi-help-circle",
    isActive: false,
    path: "/SDTeamDashboard/TrackingSDActivite"
  },
  {
    id: 8,
    title:'Master Data',
    icon: "mdi mdi-help-circle",
    isActive: false,
    path: "/MasterDataManagement"
  }
  // {
  //   id: 5,
  //   title:'CreditScore',
  //   icon: "mdi mdi-widgets",
  //   isActive: false,
  //   path: "/CreditScorePage"
  // }
  // { id: 5, icon: "mdi mdi-text-search-variant", isActive: false, path: "/SDTeamDashboard/TrackingSDActivite" },
  // { id: 6, icon: "mdi mdi-chart-timeline-variant", isActive: false, path: "/" },
  // { id: 7, icon: "mdi mdi-account-group", isActive: false, path: "/" },
  // { id: 8, icon: "mdi mdi-help-circle", isActive: false, path: "/" },
];

</script>
