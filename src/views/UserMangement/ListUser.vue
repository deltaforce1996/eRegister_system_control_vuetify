<template>
  <div>
    <v-card class="mx-auto mt-10 elevation-1">
      <v-card-item class="pa-8">
        <v-row>
          <v-col cols="10">
            <v-text-field v-model="name" density="compact" variant="outlined" rounded base-color="#F7F7F6"
              bg-color="#F7F7F6" placeholder="ค้นหา ชื่อบริษัท ,Contact owner" prepend-inner-icon="mdi-magnify"
              single-line hide-details></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-btn class="me-2 text-none" color="secondary" prepend-icon="mdi-magnify" variant="flat" height="40" rounded
             @click="fetchUserFiltering()"
              block>
              ค้นหา
            </v-btn>
          </v-col>
        </v-row>
        <v-row align-center>
          <v-col cols="2">
            <v-select density="compact" variant="outlined" placeholder="User Type" :items="init_userTypes">
              <template v-slot:append-inner>
                <v-badge color="#5BB9DF" content="0" inline text-color="#FFFFFF"></v-badge>
              </template>
            </v-select>
          </v-col>
          <v-col cols="2">
            <v-select density="compact" variant="outlined" placeholder="Roles" :items="init_roles">
              <template v-slot:append-inner>
                <v-badge color="#FF7E40" content="6" inline text-color="#FFFFFF"></v-badge>
              </template>
            </v-select>
          </v-col>
          <v-col cols="2">
            <v-select density="compact" variant="outlined" placeholder="Status" :items="init_status">
              <template v-slot:append-inner>
                <v-badge color="#99235F" content="6" inline text-color="#FFFFFF"></v-badge>
              </template>
            </v-select>
          </v-col>
          <v-col cols="2">
            <v-select density="compact" variant="outlined" placeholder="Team Contact Owner"
              :items="init_teamContactOwner">
              <template v-slot:append-inner>
                <v-badge color="#E3AA17" content="6" text-color="#FFFFFF" inline></v-badge>
              </template>
            </v-select>
          </v-col>
          <v-col cols="12">
            <v-chip closable variant="outlined" color="secondary" class="ma-1">
              Chip
            </v-chip>
            <v-chip closable variant="outlined" color="secondary" class="ma-1">
              Chip
            </v-chip>
            <v-chip closable variant="outlined" color="secondary" class="ma-1">
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
        <v-btn variant="outlined" block class="text-capitalize" @click="handleAddUser">
          <v-icon left>mdi-plus</v-icon>
          Add Users
        </v-btn>
      </v-col>
    </v-row>
    <v-card class="mx-auto elevation-1" color="secondary">
      <v-card-item>
        <v-row align-center>
          <v-col cols="2">
            <strong>Create date</strong>
          </v-col>
          <v-col cols="2">
            <strong> Email</strong>
          </v-col>
          <v-col cols="2">
            <strong>Status</strong>
          </v-col>
          <v-col cols="2">
            <strong>Company</strong>
          </v-col>
          <v-col cols="2">
            <strong>Role</strong>
          </v-col>
        </v-row>
      </v-card-item>

    </v-card>
    <v-expansion-panels class="mt-1" v-model="panel">
      <v-progress-linear
        class="rounded-pill"
        :indeterminate="loading"
        bg-color="transparent"
        color="secondary"
      ></v-progress-linear>
      <v-expansion-panel v-for="(i, index) in items" :key="index" class="mt-1"
        :style="index === panel ? 'border: 2px solid red;' : ''">
        <v-expansion-panel-title :color="index === panel ? '#FFF1F0' : ''">
          <template v-slot:actions="{ expanded }">
            <v-icon color="secondary" :icon="expanded ? 'mdi-chevron-up' : 'mdi-chevron-down'"></v-icon>
          </template>
          <v-row no-gutters dense justify="space-around">
            <v-col cols="2" align-self="center">
              <span> {{ dateParse(i.created_at) }}</span>
            </v-col>
            <v-col cols="2" align-self="center">
              <span>{{i.email}}</span>
            </v-col>
            <v-col cols="2" align-self="center">
              <Active :value="i.is_active" />
            </v-col>
            <v-col cols="2" align-self="center">
              <span> {{i.company?.name_th}}</span>
            </v-col>
            <v-col cols="2" align-self="center">
                <Role  :value="i.role?.name" />
            </v-col>
            <v-col cols="2" align-self="center">
              <v-btn class="me-2 text-none" color="secondary" variant="flat" rounded @click="handleEditUser">
                แก้ไข
              </v-btn>
            </v-col>
          </v-row>

        </v-expansion-panel-title>
        <v-expansion-panel-text style="background-color: #fff1f0">
          <v-card class="ml-n3 mr-n3" elevation="0" rounded="0">
            <v-card-item class="ma-2">
              <v-row align-center>
                <v-col cols="2">
                  <v-card-item>
                    <v-card-title class="text-secondary">User Type</v-card-title>
                    <strong>{{i.member_type?.name}}</strong>
                  </v-card-item>
                </v-col>
                <v-col cols="2">
                  <v-card-item>
                    <v-card-title class="text-secondary">ฺBusiniess Unit</v-card-title>
                    <strong>This is a subtitle</strong>
                  </v-card-item>
                </v-col>
                <v-col cols="8">
                  <v-card-item>
                    <v-card-title class="text-secondary">Team</v-card-title>
                    <span> <strong class="text-secondary"> Freelance@gamil.com</strong> <strong>( Freelance /
                        Active)</strong></span>
                  </v-card-item>
                </v-col>
              </v-row>
              <v-divider class="mt-2 mb-2"></v-divider>
              <v-row justify="end">
                <v-col cols="1">
                  <!-- <v-btn variant="text" block> History log </v-btn> -->
                  <a href="/HistoryUserPage" class="text-black">History log</a>
                </v-col>
              </v-row>
            </v-card-item>
          </v-card>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <PaginationControl />
  </div>
</template>
<script setup>
import { ref,onMounted } from 'vue';
import PaginationControl from '@/components/controls/PaginationControl'
import UserService from '@/apis/UserService';
import Active from '@/components/status/Active'
import Role from '@/components/status/Role'
import dateUtils from '@/utils/dateUtils'

import { useErrorHandlingDialog } from '@/components/dialogs/ExceptionHandleDialogService'

const { throwExceptionMessage } = useErrorHandlingDialog();

const emit = defineEmits(["is-title",'is-view']);
const init_userTypes =  ref([]);
const init_roles = ref([]);
const init_status =  ref([]);
const init_teamContactOwner = ref([]);
const panel= ref([]);
const items = ref([]);
const loading = ref(false);
let filter = {
    offset :0,
    limit :10,
    sortBy :""
}


onMounted (() => {
  emit('is-title', "");
  fetchUserFiltering();

});

const fetchUserFiltering = async ()=>{
  try{
     loading.value =true;
     items.value=[];
     const response =  await UserService.getUserAll(filter.offset,filter.limit,filter.sortBy);
     items.value =  response.data?.data
  }catch(e){
    if (e.response) {
      const val = e.response.data
      throwExceptionMessage(val.message,val?.data.error);
      return;
    }
      throwExceptionMessage("unknown",e.message);
   }finally{
    loading.value =false;
   }
}

  const dateParse=(dateString)=>{
    return dateUtils.parseDdMmYy(dateString)
  }
  const  handleAddUser=()=> {
        const  component  = "user-add";
        const  payload  = "";
        emit("is-view",component,payload)
      }
  const  handleEditUser =()=> {
        const  component  = "user-edit";
        const  payload  = "";
        emit("is-view",component,payload)
      }
</script>



