<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <h2>Mangement > Traning</h2>
    <div class="mt-5">
      <v-row justify="end">
      <v-col cols="2">
        <v-menu v-model="onFilter" :close-on-content-click="false" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn class="text-capitalize" color="grey-lighten-2" block variant="flat" v-bind="props">
              Filter
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-card min-width="800" elevation="5">
            <v-card-item class="pa-8">
              <v-row align-center>
                <v-col cols="4">
                  <v-select v-model="filter.role_id" density="compact" variant="outlined" placeholder="Roles"
                    item-title="name" item-value="id" :items="items.roles" />
                </v-col>
                <v-col cols="4">
                  <!-- <MenuDatePickerControl :value="filter.created_date" @value="filter.created_date = $event" /> -->
                </v-col>
                <v-col cols="4">
                  <v-btn variant="text" class="text-capitalize"  size="small">
                  <span class="text-decoration-underline">Clear All</span>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-item>
          </v-card>
        </v-menu>
      </v-col>
    </v-row>
      <v-row>
        <v-col cols="10" align-self="center">
          <h3> Activate Traning</h3>
        </v-col>
        <v-col cols="2">
          <v-btn class="me-2 text-none"
                  color="secondary"
                  prepend-icon="mdi-plus"
                  variant="flat"
                  rounded
                  to="/SDTeamMangement/TraningCreated"
                  block>
            Create new
          </v-btn>
        </v-col>
      </v-row>
      <v-card elevation="2" rounded="0" class="rounded-lg mt-3" v-for="i in 2" :key="i">
        <v-card-item class="ma-0">
          <v-row no-gutters dense justify="space-around">
            <v-col cols="1" align-self="center" class="pa-1">
              <strong>01/05/66</strong>
              <v-icon color="secondary" size="40" class="ml-3 mr-3">mdi-laptop-account</v-icon>
            </v-col>
            <v-col cols="3" align-self="center" class="pa-1">
              <strong>นโยบายการจัดซื้อจัดจ้างอย่างรับผิดชอบ</strong>
              <strong class="text-grey">(V.4)</strong>
            </v-col>
            <v-divider vertical class="ma-2"></v-divider>
            <v-col cols="2" align-self="center" class="pa-1">
              <strong>Created by</strong>
              <br />
              <strong class="text-secondary">sss@gmail.com</strong>
            </v-col>
            <v-divider vertical class="ma-2"></v-divider>
            <v-col cols="2" align-self="center" class="pa-1">
              <strong>Role</strong>
              <br />
              <strong class="text-secondary">Admin , Vendor</strong>
            </v-col>
            <v-col cols="2" align-self="center" class="pa-1">
              <v-btn class="me-2 text-none" color="secondary" variant="outlined" size="small"  rounded>
                Link วีดีโอ
              </v-btn>
              <v-btn class="me-2 text-none" color="secondary" variant="flat" size="small" rounded>
                Export Results
              </v-btn>
            </v-col>
            <v-col cols="1" align-self="center" class="pa-1">
              <v-menu transition="scale-transition">
                <template v-slot:activator="{ props }">
                  <v-btn text v-bind="props" variant="text">
                    <v-icon icon=" mdi-dots-horizontal"></v-icon>
                  </v-btn>
                </template>

                <v-list dense>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon icon="mdi-circle-medium"></v-icon>
                    </template>
                    <v-list-item-title>Deactiveted</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
          </v-row>
        </v-card-item>
      </v-card>
      <PaginationControl class="mt-3" :value="filter.offset" />
      <v-divider class="mt-3 mb-3"></v-divider>
      <div>
        <v-tabs v-model="tab" color="secondary">
          <v-tab v-for="(tabs, index) in items" :key="index" class="text-capitalize">
           <h3>{{ tabs.title }}</h3>
          </v-tab>
        </v-tabs>
        <v-tabs-items>
          <v-tab-item>
            <v-card elevation="2" rounded="0" class="rounded-lg mt-3" v-for="i in 5" :key="i">
              <v-card-item class="ma-0">
                <v-row no-gutters dense justify="space-around">
                  <v-col cols="1" align-self="center" class="pa-1">
                    <strong>01/05/66</strong>
                    <v-icon color="secondary" size="40" class="ml-3 mr-3">mdi-laptop-account</v-icon>
                  </v-col>
                  <v-col cols="3" align-self="center" class="pa-1">
                    <strong>นโยบายการจัดซื้อจัดจ้างอย่างรับผิดชอบ</strong>
                    <strong class="text-grey">(V.4)</strong>
                  </v-col>
                  <v-divider vertical class="ma-2"></v-divider>
                  <v-col cols="2" align-self="center" class="pa-1">
                    <strong>Created by</strong>
                    <br />
                    <strong class="text-secondary">sss@gmail.com</strong>
                  </v-col>
                  <v-divider vertical class="ma-2"></v-divider>
                  <v-col cols="2" align-self="center" class="pa-1">
                    <strong>Role</strong>
                    <br />
                    <strong class="text-secondary">Admin , Vendor</strong>
                  </v-col>
                  <v-col cols="2" align-self="center" class="pa-1">
                    <v-btn class="me-2 text-none" color="secondary" variant="outlined" size="small" rounded>
                      Link วีดีโอ
                    </v-btn>
                    <v-btn class="me-2 text-none" color="secondary" variant="flat" size="small" rounded>
                     Continue
                    </v-btn>
                  </v-col>
                  <v-col cols="1" align-self="center" class="pa-1">
                    <v-menu transition="scale-transition">
                        <template v-slot:activator="{ props }">
                          <v-btn text v-bind="props" variant="text">
                            <v-icon icon=" mdi-dots-horizontal"></v-icon>
                          </v-btn>
                        </template>

                        <v-list dense>
                          <v-list-item>
                            <template v-slot:prepend>
                              <v-icon icon="mdi-circle-medium"></v-icon>
                            </template>
                            <v-list-item-title>Activated</v-list-item-title>
                          </v-list-item>
                          <v-list-item @click="handleDelete(i)">
                            <template v-slot:prepend>
                              <v-icon icon="mdi-delete"></v-icon>
                            </template>
                            <v-list-item-title>Delete</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                  </v-col>
                </v-row>
              </v-card-item>
            </v-card>
            <PaginationControl class="mt-3" :value="filter.offset" />
          </v-tab-item>
        </v-tabs-items>
      </div>
    </div>
  </v-container>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue';
import roleService from '@/apis/RoleService';
// import MenuDatePickerControl from '@/components/controls/MenuDatePickerControl.vue'
import PaginationControl from '@/components/controls/PaginationControl'
import { useConfirmationDialog } from '@/components/dialogs/ConfirmationDialogService'
import { useErrorHandlingDialog } from '@/components/dialogs/ExceptionHandleDialogService'

const { handlingErrorsMessage } = useErrorHandlingDialog();
const { showDialog } = useConfirmationDialog();

const onFilter = ref(false);
const tab = ref(null);

const items = ref({
  active_traning :[],
  type_traning :[],
});
const loading = ref({
  roles: false,
  active: false,
  tab: false
});
const filter = ref({
  created_date: null,
  role_id: null,
  offset: 1,
  limit: 10,
});

onBeforeMount(() => {
  items.value = [
    { title: 'Inactive Traning', icon: 'mdi-account-outline' },
    { title: 'Draft', icon: 'mdi-link-variant' },
    { title: 'Recently Delete', icon: 'mdi-link-variant' },
  ]
  handleLoadRoleAll()
});

const handleLoadRoleAll = async () => {
  try {
    loading.value.roles = true;
    const response = await roleService.getRoleAll();
    if (response.data?.is_success) {
      items.value.roles = response.data.data
    }
  } catch (e) {
    if (e.response) {
      const val = e.response.data
      handlingErrorsMessage(val.message, val?.data.error);
      return;
    }
    handlingErrorsMessage("unknown", e.message);
  } finally {
    loading.value.roles = false;
  }
}


const handleDelete = async () => {
  //e.preventDefault()
  const confirmed = await showDialog('ยืนยันลบแบบฟอร์ม','กรุณาตรวจสอบคลิกปุ่ม "ตกลง" เพื่อดำเนินการ');
      if (confirmed) {
        console.log('Action confirmed!');
      } else {
        console.log('Action cancelled.');
      }

};

</script>

