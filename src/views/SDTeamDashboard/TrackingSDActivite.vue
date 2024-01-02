<template>
  <v-container>
    <h2>Tracking SD Activite</h2>
    <div class="mt-5">
      <v-row>
        <v-col cols="3">
          <v-card class="mx-auto rounded-lg" elevation="5" height="135">
            <v-card-text>
              <v-card-title class="font-weight-black">
                Registered Vendors
              </v-card-title>
              <v-card-actions>
                <h1 class="text-secondary font-weight-black pl-2" style="font-size: 55px;">
                  30
                </h1>
                &nbsp;
                &nbsp;
                <span class="text-secondary font-weight-black">vendors</span>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="mx-auto rounded-lg" elevation="5" height="135">
            <v-card-text>
              <v-card-title class="font-weight-black">
                RSP Policy
              </v-card-title>
              <v-card-actions>
                <h1 class="pl-2 text-teal-darken-3" style="font-size: 55px;">
                  25
                </h1>
                &nbsp;
                &nbsp;
                <span class="font-weight-black text-teal-darken-3">vendors</span>
                <v-spacer></v-spacer>
                <v-chip color="teal-darken-3" label>
                  <span class="font-weight-black">80%</span>
                </v-chip>
              </v-card-actions>

            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="mx-auto rounded-lg" elevation="5" height="135">
            <v-card-text>
              <v-card-title class="font-weight-black">
                RSP Policy
              </v-card-title>
              <v-card-actions>
                <h1 class="text-teal-accent-4 pl-2" style="font-size: 55px;">25</h1>
                &nbsp;
                &nbsp;
                <div>
                  <v-chip color="teal-accent-4" label size="small">
                    <span class="font-weight-black">80%</span>
                  </v-chip>
                  <br />
                  <span class="font-weight-black text-teal-accent-4">vendors</span>
                </div>
                <v-spacer></v-spacer>
                <h1 class="text-teal-accent-4 pl-2" style="font-size: 55px;">25</h1>
                &nbsp;
                &nbsp;
                <div>
                  <v-chip color="teal-accent-4" label size="small">
                    <span class="font-weight-black">60%</span>
                  </v-chip>
                  <br />
                  <span class="font-weight-black text-teal-accent-4">vendors</span>
                </div>
              </v-card-actions>

            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="mx-auto rounded-lg" elevation="5" height="135">
            <v-card-text>
              <v-card-title class="font-weight-black">
                Training
              </v-card-title>
              <v-card-actions>
                <h1 class="text-cyan-accent-4 pl-2" style="font-size: 55px;">25</h1>
                &nbsp;
                &nbsp;
                <span class="font-weight-black text-cyan-accent-4">vendors</span>
                <v-spacer></v-spacer>
                <v-chip color="cyan-accent-4" label>
                  <span class="font-weight-black">60%</span>
                </v-chip>
              </v-card-actions>

            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense class="mt-5 mb-5">
        <v-col cols="10">
          <!-- <v-text-field density="compact" variant="solo" rounded
              bg-color="white" placeholder="ค้นหา ชื่อบริษัท ,Contact owner"
              prepend-inner-icon="mdi-magnify"
              single-line hide-details></v-text-field> -->

          <v-text-field density="compact" variant="solo" placeholder="ค้นหา ชื่อบริษัท ,Contact owner"
            append-inner-icon="mdi-magnify" single-line hide-details></v-text-field>
        </v-col>
        <v-col cols="2">
          <!-- <v-btn class="me-2 text-none" color="secondary" prepend-icon="mdi-magnify" variant="flat" height="40" rounded
           block>
              ค้นหา
            </v-btn> -->

          <v-menu v-model="menu" :close-on-content-click="false" location="bottom">
            <template v-slot:activator="{ props }">
              <v-btn color="grey-lighten-2" block height="40" v-bind="props">
                Filter
                <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <v-card min-width="1500" elevation="5">
              <v-card-item class="pa-8">

                <v-row align-center>
                  <v-col cols="2">
                    <v-select density="compact" variant="outlined" placeholder="User Type" item-title="name"
                      item-value="id">
                      <template v-slot:append-inner>
                        <v-badge color="#5BB9DF" content="0" inline text-color="#FFFFFF"></v-badge>
                      </template>
                    </v-select>
                  </v-col>
                  <v-col cols="2">
                    <v-select density="compact" variant="outlined" placeholder="Roles" item-title="name" item-value="id">
                      <template v-slot:append-inner>
                        <v-badge color="#FF7E40" content="6" inline text-color="#FFFFFF"></v-badge>
                      </template>
                    </v-select>
                  </v-col>
                  <v-col cols="2">
                    <v-select density="compact" variant="outlined" placeholder="Status">
                      <template v-slot:append-inner>
                        <v-badge color="#99235F" content="6" inline text-color="#FFFFFF"></v-badge>
                      </template>
                    </v-select>
                  </v-col>
                  <v-col cols="2">
                    <v-select density="compact" variant="outlined" placeholder="Status">
                      <template v-slot:append-inner>
                        <v-badge color="#99235F" content="6" inline text-color="#FFFFFF"></v-badge>
                      </template>
                    </v-select>
                  </v-col>
                  <v-col cols="2">
                    <v-select density="compact" variant="outlined" placeholder="Status">
                      <template v-slot:append-inner>
                        <v-badge color="#99235F" content="6" inline text-color="#FFFFFF"></v-badge>
                      </template>
                    </v-select>
                  </v-col>
                  <v-col cols="2">
                    <v-select density="compact" variant="outlined" placeholder="Status">
                      <template v-slot:append-inner>
                        <v-badge color="#99235F" content="6" inline text-color="#FFFFFF"></v-badge>
                      </template>
                    </v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-chip closable variant="outlined" color="secondary" class="ma-1" size="small">
                      Chip
                    </v-chip>
                    <v-chip closable variant="outlined" color="secondary" class="ma-1" size="small">
                      Chip
                    </v-chip>
                    <v-chip closable variant="outlined" color="secondary" class="ma-1" size="small">
                      Chip
                    </v-chip>
                  </v-col>
                </v-row>
              </v-card-item>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn variant="text"> Clear All</v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-col>
      </v-row>
      <v-row justify="end" class="mt-2 mb-2" dense>
        <v-col cols="1">
          <v-btn variant="outlined" to="/SDTeamDashboard/FollowUp" block class="text-capitalize" color="black">
            <v-icon left>mdi-email</v-icon>
            Follow up (0)
          </v-btn>
        </v-col>
        <v-col cols="1">
          <v-btn block class="text-capitalize" color="black">
            <v-icon left>mdi-microsoft-excel</v-icon>
            Export (0)
          </v-btn>
        </v-col>
      </v-row>
      <TrackingSDActiviteTable class="mt-5" />
      <PaginationControl class="mt-3" />
    </div>
  </v-container>
</template>
<script setup>
/*eslint-disable no-unused-vars  */
import { ref, onBeforeMount } from 'vue';
import TrackingSDActiviteTable from "@/components/tables/TrackingSDActiviteTable.vue";
import PaginationControl from '@/components/controls/PaginationControl'

const fav = ref(true)
const menu = ref(false)
const message = ref(false)
const hints = ref(true)
onBeforeMount(() => {


});

</script>

