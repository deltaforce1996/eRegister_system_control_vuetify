<template>
  <v-container fluid>
    <h3>Role & Permission</h3>
    <v-row dense>
      <v-col cols="12">
        <v-card color="secondary">
          <v-card-item>
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
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-expansion-panels v-model="is_item_expan">
        <role-item
          v-for="(role, index) in roles_mock"
          :style="
            index === is_item_expan
              ? 'border: 2px solid red; margin-top: 2px;'
              : ''
          "
          :key="role.id"
          :is-expand-view="index === is_item_expan"
          :permission="role.name"
          :description="role.description"
          :is-active="role.is_active"
          :sub-headers="headers"
          :sub-desserts="generate_desserts(role.id)"
          :id="role.id"
          @edited-clicked="on_clicked_edit"
          @history-clicked="on_clicked_history"
        />
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

import RoleItem from "../../components/items/RoleItem.vue";

const router = useRouter();

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
            id: 0,
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

const action_all_mock = [
  { id: 0, name: "view", description: "" },
  { id: 1, name: "created", description: "" },
  { id: 2, name: "updated", description: "" },
  { id: 3, name: "deleted", description: "" },
  { id: 4, name: "other", description: "" },
];

const headers = action_all_mock.map((action) => ({
  title: action.name,
  key: action.name,
}));
headers.unshift({ title: "Permission Module", key: "permission" });

const is_item_expan = ref(null);

watch(is_item_expan, (newValue, oldValue) => {
  console.log(
    `The value of is_item_expan changed from ${oldValue} to ${newValue}`
  );
});

const generate_desserts = (role_id) => {
  const desserts_module = [];
  const find_role_id = permission_module_mock.find(
    (el) => el.role_id === role_id
  );
  if (find_role_id)
    find_role_id.module.forEach((item) => {
      let dessert = {
        permission: item.name_th,
      };
      action_all_mock.forEach((action) => {
        dessert[action.name] = item.action.some((obj) => obj.id === action.id);
      });
      desserts_module.push(dessert);
    });
  return desserts_module;
};

const on_clicked_edit = (role_id) => {
  router.push({ name: "CreateRolePage", params: { role_id: role_id } });
};

const on_clicked_history = (role_id) => {
  console.log(role_id);
  router.push("/HistoryRolePage");
};
</script>
