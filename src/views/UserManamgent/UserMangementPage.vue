<template>
  <div id="user">
    <div class="text-h5">User Mangement</div>
    <v-card class="mx-auto mt-10 elevation-1">
      <v-card-item class="pa-8">
        <v-row>
          <v-col cols="10">
            <v-text-field
              v-model="name"
              density="compact"
              variant="outlined"
              rounded
              base-color="#F7F7F6"
              bg-color="#F7F7F6"
              placeholder="ค้นหา ชื่อบริษัท ,Contact owner"
              prepend-inner-icon="mdi-magnify"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-btn
              class="me-2 text-none"
              color="secondary"
              prepend-icon="mdi-magnify"
              variant="flat"
              height="40"
              rounded
              block
            >
              ค้นหา
            </v-btn>
          </v-col>
        </v-row>
        <v-row align-center>
          <v-col cols="2">
            <v-select
              density="compact"
              variant="outlined"
              placeholder="User Type"
              :items="init_userTypes"
            >
              <template v-slot:append-inner>
                <v-badge
                  color="#5BB9DF"
                  content="0"
                  inline
                  text-color="#FFFFFF"
                ></v-badge>
              </template>
            </v-select>
          </v-col>
          <v-col cols="2">
            <v-select
              density="compact"
              variant="outlined"
              placeholder="Roles"
              :items="init_roles"
            >
              <template v-slot:append-inner>
                <v-badge
                  color="#FF7E40"
                  content="6"
                  inline
                  text-color="#FFFFFF"
                ></v-badge>
              </template>
            </v-select>
          </v-col>
          <v-col cols="2">
            <v-select
              density="compact"
              variant="outlined"
              placeholder="Status"
              :items="init_status"
            >
              <template v-slot:append-inner>
                <v-badge
                  color="#99235F"
                  content="6"
                  inline
                  text-color="#FFFFFF"
                ></v-badge>
              </template>
            </v-select>
          </v-col>
          <v-col cols="2">
            <v-select
              density="compact"
              variant="outlined"
              placeholder="Team Contact Owner"
              :items="init_teamContactOwner"
            >
              <template v-slot:append-inner>
                <v-badge
                  color="#E3AA17"
                  content="6"
                  text-color="#FFFFFF"
                  inline
                ></v-badge>
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
                  <v-btn variant="elevated" block class="text-capitalize">
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
      <v-expansion-panel
        v-for="(i, index) in items"
        :key="index"
        class="mt-1"
        :style="index === panel ? 'border: 2px solid red;' : ''"
      >
        <v-expansion-panel-title :color="index === panel ? '#FFF1F0' : ''">
          <template v-slot:actions="{ expanded }">
            <v-icon
              color="secondary"
              :icon="expanded ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            ></v-icon>
          </template>
            <v-row
              no-gutters
              dense
              justify="space-around"
            >
              <v-col cols="2" align-self="center">
                <span> 08/04/66 12:45 {{ i.id }}</span>
              </v-col>
              <v-col cols="2" align-self="center">
                <span>xxx@gmail.com</span>
              </v-col>
              <v-col cols="2" align-self="center">
                <v-chip color="green" label>
                  <v-icon>mdi-circle-medium</v-icon>
                  Green
                </v-chip>
              </v-col>
              <v-col cols="2" align-self="center">
                <span> บริษัท</span>
              </v-col>
              <v-col cols="2" align-self="center">
                <v-chip color="green" label> Vender </v-chip>
              </v-col>
              <v-col cols="2" align-self="center">
                <v-btn
                  class="me-2 text-none"
                  color="secondary"
                  variant="flat"
                  rounded
                >
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
                  <v-btn variant="text" block> ล้าง Filter </v-btn>
                </v-col>
              </v-row>
            </v-card-item>
          </v-card>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <!-- <div class="text-center">
      <v-pagination active-color="red" variant="flat" :length="15" :total-visible="7">
        <template #prev-button>
          <v-icon>mdi-chevron-left</v-icon>
        </template>

        <template #next-button>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-pagination>
    </div> -->
  </div>
</template>
<script>

export default {
  data: () => ({
    init_userTypes: [],
    init_roles: [],
    init_status: [],
    init_teamContactOwner: [],
    panel: [],
    items: [
      { id: 1, name: "A" },
      { id: 2, name: "B" },
      { id: 3, name: "C" },
    ],
  }),
  mounted() {
    console.log("etesdsdsd");
  },
  methods: {},
};
</script>

//
<script setup>
// import { ref } from 'vue';

// const init_userTypes = [];
// const init_roles = [];
// const init_status = [];
// const init_teamContactOwner = [];

// const name = ref('');

// const selectedChips = ref([]);

// const chips = ['Chip 1', 'Chip 2', 'Chip 3'];

// const panel = ['foo', 'bar', 'baz']
// const items = [
//   { header: 'Panel 1', content: 'Content 1', checked: false },
//   { header: 'Panel 2', content: 'Content 2', checked: false },
//   // Add more items as needed
// ];

//
</script>
