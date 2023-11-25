<template>
  <div id="user">
    <v-container>
      <v-card-title>This is a title</v-card-title>
      <h3>User Mangement</h3>
      <v-card class="mx-auto mt-10 elevation-1">
        <v-card-item class="pa-8">
          <v-row>
            <v-col cols="10">
              <v-text-field v-model="name" density="compact" variant="outlined" rounded base-color="#F7F7F6"
                bg-color="#F7F7F6" placeholder="ค้นหา ชื่อบริษัท ,Contact owner" prepend-inner-icon="mdi-magnify"
                single-line hide-details></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-btn class="me-2 text-none" color="reded" prepend-icon="mdi-magnify" variant="flat" height="40" rounded
                block>
                ค้นหา
              </v-btn>
            </v-col>
          </v-row>
          <v-row align-center>
            <v-col cols="2">
              <v-select density="compact" variant="outlined"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']">
                <template v-slot:append-inner>
                  <v-badge color="error" content="6" inline></v-badge>
                </template>
              </v-select>
            </v-col>
            <v-col cols="2">
              <v-select density="compact" variant="outlined"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']">
                <template v-slot:append-inner>
                  <v-badge color="error" content="6" inline></v-badge>
                </template>
              </v-select>
            </v-col>
            <v-col cols="2">
              <v-select density="compact" variant="outlined"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']">
                <template v-slot:append-inner>
                  <v-badge color="error" content="6" inline></v-badge>
                </template>
              </v-select>
            </v-col>
            <v-col cols="2">
              <v-select density="compact" variant="outlined"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']">
                <template v-slot:append-inner>
                  <v-badge color="error" content="6" inline></v-badge>
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
          <v-btn variant="text">
            ล้าง Filter
          </v-btn>
        </v-card-item>

      </v-card>

      <v-card class="mx-auto mt-10 elevation-1">
        <v-card-item>
          <v-row align-center>
            <v-col cols="2">
              Create date
            </v-col>
            <v-col cols="2">
              Email
            </v-col>
            <v-col cols="2">
              Status
            </v-col>
            <v-col cols="2">
              Company
            </v-col>
            <v-col cols="2">
              Role
            </v-col>
          </v-row>
        </v-card-item>

      </v-card>
      <v-expansion-panels class="mt-1 elevation-1" color="red">

        <v-expansion-panel>
          <!-- <v-expansion-panel-title>
            <v-row align-center>
              <v-col cols="2">
                08/04/66 12:45
              </v-col>
              <v-col cols="2">
                xxx@gmail.com
              </v-col>
              <v-col cols="2">
                <v-chip color="green" label>
                  <v-icon>mdi-circle-medium</v-icon>
                  Green
                </v-chip>
              </v-col>
              <v-col cols="2">
                บริษัท
              </v-col>
              <v-col cols="2">
                <v-chip color="green" label>
                  Vender
                </v-chip>
              </v-col>
              <v-col cols="2">

                <v-chip variant="flat" color="red">
                  แก้ไข
                </v-chip>
              </v-col>
            </v-row>
          </v-expansion-panel-title> -->
          <v-expansion-panel-title>
              <template v-slot:default="{  }">
                <v-row no-gutters>
                  <!-- <v-col cols="4" class="d-flex justify-start">
                    Trip name
                  </v-col>
                  <v-col
                    cols="8"
                    class="text-grey"
                  >
                    <v-fade-transition leave-absolute>
                      <span
                        v-if="expanded"
                        key="0"
                      >
                        Enter a name for the trip
                      </span>
                      <span
                        v-else
                        key="1"
                      >
                        www
                      </span>
                    </v-fade-transition>
                  </v-col> -->
                  <v-col cols="2" align-self-center>
                08/04/66 12:45
              </v-col>
              <v-col cols="2">
                xxx@gmail.com
              </v-col>
              <v-col cols="2">
                <v-chip color="green" label>
                  <v-icon>mdi-circle-medium</v-icon>
                  Green
                </v-chip>
              </v-col>
              <v-col cols="2">
                บริษัท
              </v-col>
              <v-col cols="2">
                <v-chip color="green" label>
                  Vender
                </v-chip>
              </v-col>
              <v-col cols="2">

                <v-chip variant="flat" color="red">
                  แก้ไข
                </v-chip>
              </v-col>
                </v-row>
              </template>
            </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-card-item>
              <v-row align-center>
                <v-col cols="2">
                  <v-card-item>
                    <v-card-title>This is a title</v-card-title>

                    <v-card-subtitle>This is a subtitle</v-card-subtitle>
                  </v-card-item>
                </v-col>
                <v-col cols="2">
                  <v-card-item>
                    <v-card-title>This is a title</v-card-title>

                    <v-card-subtitle>This is a subtitle</v-card-subtitle>
                  </v-card-item>
                </v-col>
                <v-col cols="2">
                  <v-card-item>
                    <v-card-title>This is a title</v-card-title>

                    <v-card-subtitle>This is a subtitle</v-card-subtitle>
                  </v-card-item>
                </v-col>
              </v-row>
              <v-divider class="mt-2 mb-2"></v-divider>
              <v-row justify="end">
                <v-col cols="1">
                  <v-btn variant="text" block>
                    ล้าง Filter
                  </v-btn>
                </v-col>
              </v-row>

            </v-card-item>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
      <div class="text-center">
        <v-pagination active-color="red" variant="flat" :length="15" :total-visible="7">
          <template #prev-button>
            <v-icon>mdi-chevron-left</v-icon>
          </template>

          <!-- Custom "next" button icon -->
          <template #next-button>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-pagination>
      </div>

    </v-container>
  </div>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { ref } from 'vue';

const name = ref('');


const selectedChips = ref([]);

const chips = ['Chip 1', 'Chip 2', 'Chip 3'];

const items = [
  { header: 'Panel 1', content: 'Content 1', checked: false },
  { header: 'Panel 2', content: 'Content 2', checked: false },
  // Add more items as needed
];
const removeChip = (index) => {
  console.log(index);
  //selectedChips.value.splice(index, 1);
};
</script>



