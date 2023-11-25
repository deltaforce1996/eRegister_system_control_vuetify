<template>
  <v-container fluid>
    <v-row no-gutters>
      <h2>Role & Permission</h2>
    </v-row>
    <v-row no-gutters justify="end">
      <button-control icon="mdi mdi-plus" text="Create Rule" />
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <v-card
          color="secondary"
          height="30"
          style="padding-top: 5px; padding-left: 15px"
        >
          <v-row align="center" justify="space-between">
            <v-col cols="3">
              <div>
                <h5>Role Name</h5>
              </div>
            </v-col>
            <v-col cols="5">
              <h5>Decscription</h5>
            </v-col>
            <v-col>
              <h5>Status</h5>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-expansion-panels>
        <role-item
          v-for="role in roles_mock"
          :key="role.id"
          :permission="role.name"
          :description="role.description"
          :is-active="role.is_active"
          :sub-headers="herders_table"
          :sub-desserts="generate_desserts(role.id)"
          :id="role.id"
          @edited-clicked="on_clicked_edit"
          @history_clicked="on_clicked_history"
        />
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script setup>
import ButtonControl from "../../components/controls/ButtonControl.vue";
import RoleItem from "../../components/items/RoleItem.vue";

const roles_mock = [
  {
    id: 0,
    name: "Admin",
    description: "Desc of admin access",
    is_active: true,
  },
  {
    id: 1,
    name: "Manager",
    description: "Desc of manager access",
    is_active: false,
  },
];

const permission_module_mock = [
  {
    role_id: 1,
    module: [
      {
        id: 1,
        name_th: "รายการพาร์ทเนอร์",
        name_en: "Business partner list",
        description: null,
        action: [
          {
            id: 1,
            name: "add",
            description: null,
          },
          {
            id: 2,
            name: "get",
            description: null,
          },
        ],
      },
      {
        id: 2,
        name_th: "สร้างใบสมัครใหม่",
        name_en: "Create new register form",
        description: null,
        action: [
          {
            id: 1,
            name: "add",
            description: null,
          },
        ],
      },
    ],
  },
];

const herders_table = [
  { title: "Permission Module", key: "permission" },
  { title: "View", key: "view" },
  { title: "Create", key: "created" },
  { title: "Update", key: "updated" },
  { title: "Delete", key: "deleted" },
];

const generate_desserts = (role_id) => {
  let desserts = [];
  const find_role_id = permission_module_mock.find(
    (el) => (el.role_id = role_id)
  );
  if (find_role_id)
    find_role_id.module.forEach((item) => {
      desserts.push({
        permission: item.name_th,
        view: item.action.some((obj) => obj.id === 2),
        created: item.action.some((obj) => obj.id === 1),
        updated: item.action.some((obj) => obj.id === 3),
        deleted: item.action.some((obj) => obj.id === 4),
      });
    });

  return desserts;
};

const on_clicked_edit = (role_id) => {
  console.log(role_id)
}

const on_clicked_history = (role_id) => {
  console.log(role_id)
}
</script>
