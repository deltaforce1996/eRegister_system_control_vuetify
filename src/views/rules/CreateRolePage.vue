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
      />
      <role-management v-if="!role_id" />
    </v-row>
    <v-row no-gutters justify="center">
      <h3>Permission Setting</h3>
    </v-row>
    <v-row no-gutters dense>
      <permission-management
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
          <button-control color="black" text="ย้อนกลับ" width="100" />
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
import { useRoute } from "vue-router";

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
};

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

const generate_desserts = () => {
  permission_module_mock.module.forEach((item) => {
    desserts_module.push({
      permission: item.name_th,
      view: item.action.some((obj) => obj.id === 2),
      created: item.action.some((obj) => obj.id === 1),
      updated: item.action.some((obj) => obj.id === 3),
      deleted: item.action.some((obj) => obj.id === 4),
    });
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
</script>
