<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-row>
          <v-col>
            <permission-table
              :headers="herders_table"
              :desserts="items_permission"
              :is-read-only="false"
              @on-item-change="on_permission_change"
            />
          </v-col>
        </v-row>
        <v-row>
          <button-control
            style="margin: 6px"
            color="primary"
            icon="mdi mdi-plus"
            text="Add Module"
            @button-clicked="on_clicked_add_module"
          />
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import PermissionTable from "../tables/PermissionTable.vue";
import ButtonControl from "../controls/ButtonControl.vue";
import { reactive } from "vue";

const props = defineProps({
  desserts: {
    type: Array,
    default: () => [],
  },
  role_id: {
    type: Number,
    default: -1,
  },
});

const items_permission = reactive(props.desserts);

const herders_table = [
  { title: "Permission Module", key: "permission" },
  { title: "View", key: "view" },
  { title: "Create", key: "created" },
  { title: "Update", key: "updated" },
  { title: "Delete", key: "deleted" },
];

const on_clicked_add_module = () => {
  items_permission.push({
    permission: "Colorado",
    view: false,
    created: false,
    updated: false,
    deleted: false,
  });
  console.log("on_clicked_add_module " + props.role_id);
};

const on_permission_change = (new_items_permission) => {
  console.log("on_permission_change " + JSON.stringify(new_items_permission));
};
</script>
