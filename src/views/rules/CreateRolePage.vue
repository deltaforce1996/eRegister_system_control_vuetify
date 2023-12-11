<template>
  <v-container fluid>
    <h3>User Management</h3>
    <v-row justify="center">
      <h3>{{ title }}</h3>
    </v-row>
    <v-row no-gutters dense>
      <role-management
        v-if="role_id"
        :role_name_p="role_name"
        :role_desc_p="role_desc"
        @on-update-role="on_updated_role"
      />
      <role-management v-if="!role_id" />
    </v-row>
    <v-row no-gutters justify="center">
      <h3>Permission Setting</h3>
    </v-row>
    <v-row no-gutters dense>
      <permission-management
      :headers="headers"
        :role_id="role_id"
        :desserts="desserts_module"
        @submit_form="submit_from_new_role"
        @on-delete-permission="on_delete_permision_item_in_db"
        @on-permission-change="on_permission_item_change"
      />
    </v-row>
    <v-footer color="transparent" style="margin-top: 120px">
      <v-row justify="center">
        <v-col cols="auto">
          <button-control
            color="black"
            text="ย้อนกลับ"
            width="100"
            @button-clicked="on_go_to_back"
          />
        </v-col>
        <v-col cols="auto">
          <button-control
            type="submit"
            @button-clicked="submit_from_new_role"
            color="secondary"
            text="ตกลง"
            width="100"
          />
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>

<script setup>
import RoleManagement from "../../components/forms/RoleManagement.vue";
import PermissionManagement from "@/components/forms/PermissionManagement.vue";
import ButtonControl from "@/components/controls/ButtonControl.vue";

import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const role_id = route.params.role_id;

import { useConfirmationDialog } from "@/components/dialogs/ConfirmationDialogService";
import { reactive } from "vue";
import { ref } from "vue";
const { showDialog } = useConfirmationDialog();

const roles_mock = {
  id: 1,
  name: "Manager",
  description: "Desc of manager access",
  is_active: false,
};

const permission_module_mock = {
  role_id: 1,
  module: [
    {
      id: 0,
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
      id: 1,
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
};

const action_all_mock = [
  { id: 0, name: "view", description: "" },
  { id: 1, name: "created", description: "" },
  { id: 2, name: "updated", description: "" },
  { id: 3, name: "deleted", description: "" },
  { id: 4, name: "other", description: "" },
];

const router = useRouter();

const desserts_module = reactive([]);
const title = ref("");
const role_name = ref("");
const role_desc = ref("");

onMounted(() => {
  if (role_id) {
    console.log("Fetch role by role id: " + role_id + " this is update form");
    title.value = "Update Role & Permission";
    role_name.value = roles_mock.name;
    role_desc.value = roles_mock.description;
    generate_desserts();
  } else {
    console.log("Without fetch role this is new form");
    title.value = "Create new Role & Permission";
  }
});

const headers = action_all_mock.map(action => ({
  title: action.name,
  key: action.name
}));

headers.unshift({ title: "Permission Module", key: "permission" });
headers.push({ title: "Action", key: "action" });

const generate_desserts = () => {
  permission_module_mock.module.forEach((item) => {
    let dessert = {
      permission: item.id,
    };
    action_all_mock.forEach((action) => {
      dessert[action.name] = item.action.some((obj) => obj.id === action.id);
    });
    desserts_module.push(dessert);
  });
};

const submit_from_new_role = async () => {
  if (!role_id) {
    const confirmed = await showDialog(
      "ยืนยันการบันทึก",
      'กรุณาตรวจสอบ\nคลิกปุ่ม"ตกลง"เพื่อดำเนินการ'
    );
    if (confirmed) {

      console.log("เพิ่มข้อมูล");
    } else {
      console.log("cancelled.");
    }
  } else {
    const confirmed = await showDialog(
      `บันทึกการเปลี่ยนแปลง\nRole & Permission`,
      'กรุณาตรวจสอบ\nคลิกปุ่ม"ตกลง"เพื่อดำเนินการ'
    );
    if (confirmed) {
      console.log("บันทึกการเปลี่ยนแปลง");
    } else {
      console.log("cancelled.");
    }
  }
};

const on_permission_item_change = (item_permission) => {
  console.log("on_permission_item_change: " + JSON.stringify(item_permission));
};

const on_delete_permision_item_in_db = (item_permission) => {
  console.log(
    "on_delete_permision_item_in_db: " + JSON.stringify(item_permission)
  );
};

const on_updated_role = (role) => {
  console.log("on_updated_role: ", role);
}

const on_go_to_back = () => {
  router.go(-1);
};

</script>
