<template>
  <div>
    <v-card class="mx-auto elevation-1" color="secondary" height="50">
      <v-card-item dense>
        <v-row no-gutters dense justify="space-around">
          <v-col cols="1">
            <v-checkbox hide-details class="pa-0 mt-n3"></v-checkbox>
          </v-col>
          <v-col cols="2" align-self="center" class="mt-n3">
            <strong>Name</strong>
          </v-col>
          <v-col cols="2" align-self="center" class="mt-n3">
            <strong>RSP Policy</strong>
          </v-col>
          <v-col cols="2" align-self="center" class="mt-n3">
            <strong>Survey</strong>
          </v-col>
          <v-col cols="2" align-self="center" class="mt-n3">
            <strong>Training</strong>
          </v-col>
          <v-col cols="2" align-self="center" class="mt-n3">
            <strong>Contact Owner</strong>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card>
    <v-expansion-panels v-model="panel" class="mt-1">
      <v-progress-linear class="rounded-pill" :indeterminate="loading" bg-color="transparent"
        color="secondary"></v-progress-linear>
      <v-expansion-panel v-for="(i, index) in 6" :key="index" class="mt-1"
        :style="index === panel ? 'border: 2px solid red;' : ''">
        <v-expansion-panel-title :color="index === panel ? '#FFF1F0' : ''">
          <template v-slot:actions="{ expanded }">
            <v-icon color="secondary" :icon="expanded ? 'mdi-chevron-up' : 'mdi-chevron-down'"></v-icon>
          </template>
          <v-row no-gutters dense justify="space-around">
            <v-col cols="1">
              <v-checkbox hide-details hide-spin-buttons class="pa-0 ma-0"></v-checkbox>
            </v-col>
            <v-col cols="2" align-self="center">
              <strong>xxxx@gmail.com</strong>
            </v-col>
            <v-col cols="2" align-self="center">
              <v-chip color="secondary" label>
                Not completed
              </v-chip>
            </v-col>
            <v-col cols="2" align-self="center">
              <v-chip color="amber" label>
                Progress 50%
              </v-chip>
            </v-col>
            <v-col cols="2" align-self="center">
              <v-chip color="amber" label>
                Progress 1/4
              </v-chip>
            </v-col>
            <v-col cols="2" align-self="center">
              <v-chip color="secondary" label>
                test10@gmail.com
              </v-chip>
              <br />
              <strong>Retail Marketing</strong>
              /<span class="text-grey">While convenient, the color pack</span>/
              <span class="text-grey">Commentail</span>
            </v-col>
          </v-row>

        </v-expansion-panel-title>
        <v-expansion-panel-text style="background-color: #fff1f0">
          <v-card class="ml-n3 mr-n3" elevation="0" rounded="0">
            <v-card-item class="ma-2">
              <v-row justify="space-around" dense="">
                <v-col cols="8">
                  <v-row dense>
                    <v-col cols="12">
                      <div class="text-h6 text-secondary font-weight-black">Company Info.</div>
                    </v-col>
                    <v-col cols="3">
                      <label class="font-weight-medium  text-grey-lighten-1">Business Partner Number</label>
                      <br />
                      <span class="font-weight-black">value</span>
                    </v-col>
                    <v-col cols="3">
                      <label class="font-weight-medium  text-grey-lighten-1">Vendor Number</label>
                      <br />
                      <span class="font-weight-black">value</span>
                    </v-col>
                    <v-col cols="3">
                      <label class="font-weight-medium  text-grey-lighten-1">Customer Number</label>
                      <br />
                      <span class="font-weight-black">value</span>
                    </v-col>
                    <v-col cols="3">
                      <label class="font-weight-medium  text-grey-lighten-1">FPT Affillate</label>
                      <br />
                      <span class="font-weight-black">value</span>
                    </v-col>
                    <v-col cols="3">
                      <label class="font-weight-medium  text-grey-lighten-1">Organization Type</label>
                      <br />
                      <span class="font-weight-black">value</span>
                    </v-col>
                    <v-col cols="3">
                      <label class="font-weight-medium  text-grey-lighten-1">Juristic Type</label>
                      <br />
                      <span class="font-weight-black">value</span>
                    </v-col>
                    <v-col cols="3">
                      <label class="font-weight-medium  text-grey-lighten-1">Company Category</label>
                      <br />
                      <span class="font-weight-black">value</span>
                    </v-col>
                    <v-col cols="3">
                      <label class="font-weight-medium  text-grey-lighten-1">Product / Service Category</label>
                      <br />
                      <span class="font-weight-black">value</span>
                    </v-col>
                    <v-col cols="12">
                      <label class="font-weight-medium  text-grey-lighten-1">Tax ID</label>
                      <br />
                      <span class="font-weight-black">value</span>
                    </v-col>
                  </v-row>
                  <v-divider class="mt-5 mb-5"></v-divider>
                  <v-row dense class="mt-5">
                    <v-col cols="12">
                      <div class="text-h6 text-secondary font-weight-black">Branch Info.</div>
                    </v-col>
                    <v-col cols="12">
                      <v-row>
                        <v-col cols="4">
                          <v-select density="compact" variant="outlined" placeholder="Roles" item-title="name"
                            item-value="id">
                            <template v-slot:append-inner>
                              <v-badge color="#FF7E40" content="6" inline text-color="#FFFFFF"></v-badge>
                            </template>
                          </v-select>
                        </v-col>
                      </v-row>

                    </v-col>
                    <v-col cols="3">
                      <label class="font-weight-medium  text-grey-lighten-1">Business Partner Role</label>
                      <br />
                      <span class="font-weight-black">value</span>
                    </v-col>
                    <v-col cols="9">
                      <label class="font-weight-medium  text-grey-lighten-1">Branch Code </label>
                      <br />
                      <span class="font-weight-black">value</span>
                    </v-col>
                    <v-col cols="12">
                      <label class="font-weight-medium  text-grey-lighten-1">Company Code</label>
                      <br />
                      <span class="font-weight-black">value</span>
                    </v-col>
                    <v-col cols="12">
                      <label class="font-weight-medium  text-grey-lighten-1">Branch Address</label>
                      <br />
                      <span class="font-weight-black">value</span>
                    </v-col>
                    <v-col cols="12">
                      <label class="font-weight-medium  text-grey-lighten-1">Contact Person</label>
                      <br />
                      <v-row v-for="(item, index) in 3" :key="index" dense>
                        <v-col cols="4">
                          <span class="font-weight-black"> name surname-{{ index }}</span>
                        </v-col>
                        <v-col cols="4">
                          <span class="font-weight-black"> 08465466</span>
                        </v-col>
                        <v-col cols="4">
                          <span class="font-weight-black"> test@gamil.com</span>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <v-divider class="mt-5 mb-5"></v-divider>
                  <v-row dense>
                    <v-col cols="12">
                      <div>
                        <span class="text-h6 text-secondary font-weight-black">Sustainability Activites</span>
                        <span class="text-h6 text-secondary pl-1 mr-1">:</span>
                        <span class="text-h6 text-light-green-accent-4 font-weight-black">Align</span>
                      </div>
                    </v-col>
                    <v-col cols="12">
                      <v-list lines="two" width="340" dense>
                        <v-list-item dense v-for="file in files" :key="file.title">
                          <v-list-item-title class="font-weight-black">{{ file.title }}</v-list-item-title>
                          <v-list-item-subtitle class="font-weight-medium ">{{ file.subtitle }}</v-list-item-subtitle>
                          <template v-slot:append>
                            <v-avatar color="secondary">
                              <span class="text-h5">B</span>
                            </v-avatar>
                            <!-- <span class="text-h5">B</span> -->
                          </template>
                        </v-list-item>
                      </v-list>
                    </v-col>
                  </v-row>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="4">
                  <v-row dense class="pa-10">
                    <v-col cols="12">
                      <v-btn variant="outlined"
                      :to="`/SDTeamDashboard/FollowUp?owner=_owner&vendor=_vendor`"
                      block
                      class="text-capitalize rounded-pill"
                        color="black">
                        Follow up
                      </v-btn>
                    </v-col>
                    <v-col cols="12">
                      <v-btn block to="/SDTeamDashboard/Documents" class="text-capitalize rounded-pill"
                        color="teal-accent-4">
                        Documents
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-item>
          </v-card>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script setup>
// eslint-disable-next-line no-unused-vars
import { ref, onMounted } from 'vue';
import { defineProps } from 'vue';
// import Active from '@/components/status/Active'
// import Role from '@/components/status/Role'
// import dateUtils from "@/utils/dateUtils";

const emit = defineEmits(["action-edit"]);
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  },
  height: {
    type: Number,
    default: 400
  }
});
const panel = ref([]);

const files = ref([
  {
    subtitle: 'update 27/12/2553 10:00 น.',
    title: 'Action',
    value: 'B'
  },
  {
    subtitle: 'update 27/12/2553 10:00 น.',
    title: 'Recipes',
    value: '60'
  },
  {
    subtitle: 'update 27/12/2553 10:00 น.',
    title: 'Work',
    value: '70'
  },
]);

// eslint-disable-next-line no-unused-vars
const handleEditEvent = (item) => {
  emit("action-edit", item)
}
</script>

