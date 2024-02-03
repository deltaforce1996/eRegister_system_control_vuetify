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
          <v-col cols="3" align-self="center" class="mt-n3">
            <strong>Contact Owner</strong>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card>
    <v-expansion-panels v-model="panel" class="mt-1">
      <v-progress-linear class="rounded-pill" :indeterminate="loading" bg-color="transparent"
        color="secondary"></v-progress-linear>
      <v-expansion-panel v-for="(i, index) in vendors" :key="index" class="mt-1"
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
              <strong>{{i.name_th}}</strong>
            </v-col>
            <v-col cols="2" align-self="center">
              <v-chip :color="onColor(i.rsp?.policy?.status)" label>
                <strong>{{i.rsp?.policy?.status}}</strong>
              </v-chip>
            </v-col>
            <v-col cols="2" align-self="center">
              <v-chip :color="onColor(i.rsp?.survey?.status)" label>
              <strong>{{i.rsp?.survey?.status}}  {{i.rsp?.survey?.progress_percentage}}%</strong>
              </v-chip>
            </v-col>
            <v-col cols="2" align-self="center">
              <v-chip :color="onColor(i.rsp?.training?.status)" label>
                <strong>{{i.rsp?.training?.status}}  {{i.rsp?.training?.completed_amount}}/{{i.rsp?.training?.total_amount}}</strong>
              </v-chip>
            </v-col>
            <v-col cols="3" align-self="center">
              <v-chip color="secondary" label>
                <strong>{{i.contact_owner?.email}}</strong>
              </v-chip>
              <br />
              <strong>{{i.contact_owner?.business_unit}}</strong>
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
                      <span class="font-weight-black">{{business.company_information.business_partner_number}}</span>
                    </v-col>
                    <!-- <v-col cols="3">
                      <label class="font-weight-medium  text-grey-lighten-1">Vendor Number</label>
                      <br />
                      <span class="font-weight-black">{{business.company_information.vendor_number}}</span>
                    </v-col> -->
                    <!-- <v-col cols="3">
                      <label class="font-weight-medium  text-grey-lighten-1">Customer Number</label>
                      <br />
                      <span class="font-weight-black">{{business.company_information.customer_number}}</span>
                    </v-col> -->
                    <v-col cols="3">
                      <label class="font-weight-medium  text-grey-lighten-1">FPT Affillate</label>
                      <br />
                      <span class="font-weight-black">{{business.company_information?.is_fpt_affiliate}}</span>
                    </v-col>
                    <v-col cols="3">
                      <label class="font-weight-medium  text-grey-lighten-1">Organization Type</label>
                      <br />
                      <span class="font-weight-black">?</span>
                    </v-col>
                    <v-col cols="3">
                      <label class="font-weight-medium  text-grey-lighten-1">Juristic Type</label>
                      <br />
                      <span class="font-weight-black">?</span>
                    </v-col>
                    <v-col cols="3">
                      <label class="font-weight-medium  text-grey-lighten-1">Company Category</label>
                      <br />
                      <span class="font-weight-black">{{business.company_information?.company_category}}</span>
                    </v-col>
                    <v-col cols="6">
                      <label class="font-weight-medium  text-grey-lighten-1">Product / Service Category</label>
                      <br />
                      <span class="font-weight-black">?</span>
                    </v-col>
                    <v-col cols="3">
                      <label class="font-weight-medium  text-grey-lighten-1">Tax ID</label>
                      <br />
                      <span class="font-weight-black">?</span>
                    </v-col>
                    <v-col cols="12">
                      <label class="font-weight-medium  text-grey-lighten-1">Vendor Number</label>
                      <br />
                      <span class="font-weight-black">{{business.company_information?.vendor_number}}</span>
                    </v-col>
                    <v-col cols="12">
                      <label class="font-weight-medium  text-grey-lighten-1">Company code of vender</label>
                      <br />
                      <span class="font-weight-black">{{business.company_information?.company_code_of_vendor}}</span>
                    </v-col>
                    <v-col cols="12">
                      <label class="font-weight-medium  text-grey-lighten-1">Customer Number</label>
                      <br />
                      <span class="font-weight-black">{{business.company_information?.customer_number}}</span>
                    </v-col>
                    <v-col cols="12">
                      <label class="font-weight-medium  text-grey-lighten-1">Company code of customer</label>
                      <br />
                      <span class="font-weight-black">{{business.company_information?.company_code_of_customer}}</span>
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
                          <v-select density="compact" variant="outlined" placeholder="Roles"
                           :items="business.branch"
                           item-title="branch_description">
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
                        <v-list-item dense v-for="(item,index) in data.survey_result.section" :key="index">
                          <v-list-item-title class="font-weight-black">{{ item.name }}</v-list-item-title>
                          <v-list-item-subtitle class="font-weight-medium ">{{ item.score }}/{{item.total_score}}</v-list-item-subtitle>
                          <template v-slot:append>
                            <v-avatar color="secondary">
                              <span style=" font-size: 13px;">{{item.score_percentage}}</span>
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

const vendors = ref([
      {
        "bp_number": "01234567890000",
        "name_th": "บริษัท ABC จำกัด",
        "name_en": "Company ABC Co., Ltd.",
        "contact_owner": {
          "email": "contact@companyabc.com",
          "team": "Team XYZ",
          "company": "Company ABC Co., Ltd.",
          "business_unit": "Sales"
        },
        "rsp": {
          "policy": {
            "status": "Completed",
            "completed_at": "2023-11-10T14:20:12"
          },
          "survey": {
            "status": "In Progress",
            "progress_percentage": 70,
            "completed_at": null
          },
          "training": {
            "status": "Completed",
            "completed_amount": 5,
            "total_amount": 5,
            "completed_at": "2023-11-15T19:20:33"
          }
        }
      },
      {
        "bp_number": "01234567890001",
        "name_th": "บริษัท XYZ จำกัด",
        "name_en": "Company XYZ Co., Ltd.",
        "contact_owner": {
          "email": "contact@companyxyz.com",
          "team": "Team ABC",
          "company": "Company XYZ Co., Ltd.",
          "business_unit": "Marketing"
        },
        "rsp": {
          "policy": {
            "status": "In Progress",
            "completed_at": null
          },
          "survey": {
            "status": "Not Started",
            "progress_percentage": 0,
            "completed_at": null
          },
          "training": {
            "status": "Not Started",
            "completed_amount": 0,
            "total_amount": 10,
            "completed_at": null
          }
        }
      }
]);
const business = ref({
  "bp_number": "BP123456",
  "name_th": "บริษัท อยู่ดี จำกัด",
  "name_en": "Good Living Company Limited",
  "contact_owner_user": {
    "id": 1,
    "email": "contact.owner@example.com",
    "firstname": "John",
    "lastname": "Doe",
    "is_register": 1,
    "is_active": 1,
    "member_type": {
      "id": 1,
      "name": "employee"
    },
    "team": {
      "id": 1,
      "name_th": "ทีมตรวจสอบ",
      "name_en": "Audit Team"
    },
    "role": {
      "id": 1,
      "name": "Admin",
      "description": "Admin",
      "is_active": 1
    },
    "created_at": "2023-11-10T14:20:12",
    "created_user_id": 1,
    "updated_at": "2023-11-11T09:30:45",
    "updated_user_id": 1
  },
  "created_at": "2023-11-10T14:20:12",
  "created_user_email": "created.user@example.com",
  "company_information": {
    "business_partner_number": "BP123456",
    "is_fpt_affiliate": 1,
    "account_business_partner_type": "VIP",
    "business_register_type": "Limited",
    "company_category": "Tech",
    "vendor_number": "VN789012",
    "company_code_of_vendor": "1000,1200,1300",
    "customer_number": "CU123456",
    "company_code_of_customer": "1000,2000,3000,"
  },
  "do_rsp_activity": 1,
  "branch": [
    {
      "branch_code": "00001",
      "branch_description": "Main Office",
      "business_partner_role": "Head Office",
      "company_code": "1000,2000",
      "branch_address": "123 Main Street, Cityville",
      "contact_person": [
        {
          "name": "Jane Doe",
          "mobile": "123-456-7890",
          "email": "jane.doe@example.com"
        }
      ]
    },
    {
      "branch_code": "00002",
      "branch_description": "Branch A",
      "business_partner_role": "Branch",
      "company_code": "3000,4000",
      "branch_address": "456 Branch Street, Cityville",
      "contact_person": [
        {
          "name": "Bob Smith",
          "mobile": "987-654-3210",
          "email": null
        },
        {
          "name": null,
          "mobile": null,
          "email": "bob.smith@example.com"
        }
      ]
    }
  ]
});
const data = ref({
    "bp_number": "BP12345",
    "status": {
      "id": 1,
      "name": "Completed"
    },
    "progress_percentage": 100,
    "survey_result": {
      "is_aligned": 1,
      "score": 85,
      "total_score": 100,
      "section": [
        {
          "name": "Section A",
          "score": 20,
          "total_score": 25,
          "score_percentage": 80
        },
        {
          "name": "Section B",
          "score": 25,
          "total_score": 30,
          "score_percentage": 83.33
        },
        {
          "name": "Section C",
          "score": 15,
          "total_score": 20,
          "score_percentage": 75
        }
      ]
    }
  });

const onColor = (type)=>{
    switch(type){
         case 'Completed' : return 'teal-accent-4'
         case 'Not Completed' : return 'red'
         case 'In Progress' : return 'amber'
         case 'Not Started' : return 'cyan'
         default : return ''
    }
}
// eslint-disable-next-line no-unused-vars
const handleEditEvent = (item) => {
  emit("action-edit", item)
}
</script>

