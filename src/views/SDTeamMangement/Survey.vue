<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>Mangement > Survey</h2>
    <div class="mt-5">
      <v-row>
        <v-col cols="10" align-self="center">
          <h3> Activate Policy</h3>
        </v-col>
        <v-col cols="2">
          <v-btn class="me-2 text-none" color="secondary" prepend-icon="mdi-plus" variant="flat" height="40" rounded
            to="/SDTeamMangement/Survey/Created" block>
            Create new
          </v-btn>
        </v-col>
      </v-row>
      <v-card elevation="2" rounded="0" class="rounded-lg mt-5">
        <v-card-item class="ma-0">
          <v-row no-gutters dense justify="space-around">
            <v-col cols="1" align-self="center" class="pa-1">
              <span>01/05/66</span>
              <v-icon color="secondary" size="40" class="ml-3 mr-3">mdi-equal-box</v-icon>
            </v-col>
            <v-col cols="4" align-self="center" class="pa-1">
              <strong>นโยบายการจัดซื้อจัดจ้างอย่างรับผิดชอบ</strong>
              <strong class="text-grey">(V.4)</strong>
            </v-col>
            <v-divider vertical class="ma-2"></v-divider>
            <v-col cols="3" align-self="center" class="pa-1">
              <strong>Created by</strong>
              <br />
              <strong class="text-secondary">sss@gmail.com</strong>
            </v-col>
            <v-col cols="2" align-self="center" class="pa-1">
              <v-btn class="me-2 text-none" color="secondary" variant="outlined" rounded>
                Preview
              </v-btn>
              <v-btn class="me-2 text-none" color="secondary" variant="flat" rounded>
                Export Results
              </v-btn>
            </v-col>
            <v-col cols="1" align-self="center" class="pa-1">
              <!-- <v-menu transition="scale-transition">
                <template v-slot:activator="{ props }">
                  <v-btn text v-bind="props" variant="text">
                    <v-icon icon=" mdi-dots-horizontal"></v-icon>
                  </v-btn>
                </template>

                <v-list dense>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon icon="mdi-delete"></v-icon>
                    </template>
                    <v-list-item-title>Delete</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu> -->
            </v-col>
          </v-row>
        </v-card-item>
      </v-card>
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
                    <span>01/05/66</span>
                    <v-icon color="secondary" size="40" class="ml-3 mr-3">mdi-equal-box</v-icon>
                  </v-col>
                  <v-col cols="4" align-self="center" class="pa-1">
                    <strong>นโยบายการจัดซื้อจัดจ้างอย่างรับผิดชอบ</strong>
                    <strong class="text-grey">(V.4)</strong>
                  </v-col>
                  <v-divider vertical class="ma-2"></v-divider>
                  <v-col cols="3" align-self="center" class="pa-1">
                    <strong>Created by</strong>
                    <br />
                    <strong class="text-secondary">sss@gmail.com</strong>
                  </v-col>
                  <v-col cols="2" align-self="center" class="pa-1">

                    <v-btn v-if="tab == 1" class="me-2 text-none" color="secondary" variant="flat" rounded>
                      Continue
                    </v-btn>
                    <v-btn v-if="tab != 1" class="me-2 text-none" color="secondary" variant="outlined" rounded>
                      Preview
                    </v-btn>
                    <v-btn v-if="tab == 0" class="me-2 text-none" color="secondary" variant="flat" rounded>
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
          </v-tab-item>
        </v-tabs-items>
      </div>
    </div>
  </div>
</template>
<script setup>
/*eslint-disable no-unused-vars  */
import { ref, onBeforeMount } from 'vue';
import { useConfirmationDialog } from '@/components/dialogs/ConfirmationDialogService'
const { showDialog } = useConfirmationDialog();
const tab = ref(null);
const items = ref([]);


onBeforeMount(() => {
  items.value = [
    { title: 'Deactivede Survey', icon: 'mdi-account-outline' },
    { title: 'Draft', icon: 'mdi-link-variant' },
    { title: 'Recently Delete', icon: 'mdi-link-variant' },
  ]
});
onBeforeMount(() => {


});
const handleDelete = async (item) => {
  //e.preventDefault()
  const confirmed = await showDialog('ยืนยันลบแบบฟอร์ม', 'กรุณาตรวจสอบคลิกปุ่ม "ตกลง" เพื่อดำเนินการ');
  if (confirmed) {
    console.log('Action confirmed!');
  } else {
    console.log('Action cancelled.');
  }

};

</script>

