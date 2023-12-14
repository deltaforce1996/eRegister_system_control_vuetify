<template>
  <div>
    <v-card class="mx-auto mt-10 elevation-1">
      <v-card-item class="pa-8">
        <v-row dense>
          <v-col cols="10">
            <v-text-field v-model="name" density="compact" variant="outlined" rounded base-color="#F7F7F6"
              bg-color="#F7F7F6" placeholder="ค้นหา ชื่อบริษัท ,Contact owner" prepend-inner-icon="mdi-magnify"
              single-line hide-details></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-btn class="me-2 text-none" color="secondary" prepend-icon="mdi-magnify" variant="flat" height="40" rounded
              :loading="loading.tables" @click="handleGetUserFiltering()" block>
              ค้นหา
            </v-btn>
          </v-col>
        </v-row>
        <v-row align-center>
          <v-col cols="2">
            <v-select v-model="selectedMemberType" density="compact" variant="outlined" :loading="loading.memberType" :disabled="loading.memberType"
              placeholder="User Type" :items="items.memberType"  item-title="name" item-value="id">
              <template v-slot:append-inner>
                <v-badge color="#5BB9DF" content="0" inline text-color="#FFFFFF"></v-badge>
              </template>
            </v-select>
          </v-col>
          <v-col cols="2">
            <v-select v-model="selectedRole" density="compact" :loading="loading.roles" :disabled="loading.roles" variant="outlined"
              placeholder="Roles" :items="items.roles" item-title="name" item-value="id">
              <template v-slot:append-inner>
                <v-badge color="#FF7E40" content="6" inline text-color="#FFFFFF"></v-badge>
              </template>
            </v-select>
          </v-col>
          <v-col cols="2">
            <v-select v-model="selectedStatus" density="compact" :loading="loading.status" :disabled="loading.status" variant="outlined"
              placeholder="Status" :items="items.status" return-object>
              <template v-slot:append-inner>
                <v-badge color="#99235F" content="6" inline text-color="#FFFFFF"></v-badge>
              </template>
            </v-select>
          </v-col>
          <v-col cols="12">
            <v-chip closable variant="outlined" color="secondary" class="ma-1" density="compact">
              Chip
            </v-chip>
            <v-chip closable variant="outlined" color="secondary" class="ma-1" density="compact">
              Chip
            </v-chip>
            <v-chip closable variant="outlined" color="secondary" class="ma-1" density="compact">
              Chip
            </v-chip>
          </v-col>
        </v-row>
        <v-divider class="mt-5 mb-5"></v-divider>
        <v-btn variant="text"> ล้าง Filter </v-btn>
      </v-card-item>
    </v-card>
    <v-row justify="end" class="mt-2 mb-2">
      <v-col cols="1">
        <v-btn variant="outlined" block :loading="loading.tables" class="text-capitalize" @click="handleAddUserEvent">
          <v-icon left>mdi-plus</v-icon>
          Add Users
        </v-btn>
      </v-col>
    </v-row>
    <UserTable class="mt-1" :items="items.tables" :loading="loading.tables" @action-edit="handleEditUserEvent" />
    <PaginationControl class="mt-3" :value="filter.offset" @value="handlePaginationEvent" />
  </div>
</template>
<script setup>
// eslint-disable-next-line no-unused-vars
import { ref,watch,onMounted } from 'vue';
import memberTypeService from '@/apis/MemberTypeService';
import roleService from '@/apis/RoleService';
import UserService from '@/apis/UserService';
import PaginationControl from '@/components/controls/PaginationControl'
import UserTable from '@/components/tables/UserTable.vue'

import { useErrorHandlingDialog } from '@/components/dialogs/ExceptionHandleDialogService'
const { throwExceptionMessage } = useErrorHandlingDialog();

const emit = defineEmits(["is-title", 'is-view']);
const items = ref({
  memberType: [],
  roles: [],
  status: [],
  tables: []
});
const loading = ref({
  memberType: false,
  roles: false,
  status: false,
  tables: false
});
const selectedMemberType = ref(null);
const selectedRole = ref(null);
const selectedStatus = ref(null);
const filter = ref({
  offset: 1,
  limit: 10,
  sortBy: ""
});


watch(() => selectedMemberType.value, (val) => {
   console.log(val);
});
watch(() => selectedRole.value, (val) => {
   console.log(val);
});
watch(() => selectedStatus.value, (val) => {
   console.log(val);
});

onMounted(() => {
  emit('is-title', "");
  handleLoadAllMemberType();
  handleLoadAllRole();
  handleGetUserFiltering();

});

const handleLoadAllMemberType = async () => {
  try {
    loading.value.memberType = true;
    const response = await memberTypeService.getMemberTypeAll();
    if (response.data?.is_success) {
      items.value.memberType = response.data.data
    }
  } catch (e) {
    if (e.response) {
      const val = e.response.data
      throwExceptionMessage(val.message, val?.data.error);
      return;
    }
    throwExceptionMessage("unknown", e.message);
  } finally {
    loading.value.memberType = false;
  }
}

const handleLoadAllRole = async () => {
  try {
    loading.value.roles = true;
    const response = await roleService.getRoleAll();
    if (response.data?.is_success) {
      items.value.roles = response.data.data
    }
  } catch (e) {
    if (e.response) {
      const val = e.response.data
      throwExceptionMessage(val.message, val?.data.error);
      return;
    }
    throwExceptionMessage("unknown", e.message);
  } finally {
    loading.value.roles = false;
  }
}

const handleGetUserFiltering = async () => {
  try {
    loading.value.tables = true;
    items.value.tables = [];
    const response = await UserService.getUserAll(filter.value.offset, filter.value.limit, filter.value.sortBy);
    items.value.tables = response.data?.data
  } catch (e) {
    if (e.response) {
      const val = e.response.data
      throwExceptionMessage(val.message, val?.data.error);
      return;
    }
    throwExceptionMessage("unknown", e.message);
  } finally {
    loading.value.tables = false;
  }
}
const handlePaginationEvent = (offset) => {
  filter.value.offset = offset;
}


const handleAddUserEvent = () => {
  const component = "user-add";
  const payload = "";
  emit("is-view", component, payload)
}

const handleEditUserEvent = (item) => {
  const component = "user-edit";
  const payload = item;
  emit("is-view", component, payload)
}
</script>



