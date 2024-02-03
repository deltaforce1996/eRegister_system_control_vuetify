<template>
  <v-container>
    <h2>Tracking SD Activite</h2>
    <div class="mt-5">
      <v-row dense>
        <v-col cols="3">
          <RegisteredVendorsItem :value="content.registered_vendors?.value" />
        </v-col>
        <v-col cols="3">
          <RspPolicyItem :value="content.rsp_policy_vendors?.value" :percent="content.rsp_policy_vendors?.percent" />
        </v-col>
        <v-col cols="3">
          <SurveyAlignItem :survey_value="content.survey_align_vendors?.survey_value"
            :survey_percent="content.survey_align_vendors?.survey_percent"
            :align_value="content.survey_align_vendors?.align_value"
            :align_percent="content.survey_align_vendors?.align_percent" />
        </v-col>
        <v-col cols="3">
          <TrainingItem :value="content.training_vendors?.value" :percent="content.training_vendors?.percent" />
        </v-col>
      </v-row>
      <v-row dense class="mt-5 mb-5">
        <v-col cols="10">
          <v-row no-gutters>
            <v-col cols="3">
              <v-select v-model="filter.search_key" density="compact" class="rounded-s-lg" variant="solo"
                :items="selected_items.topics" item-title="name" item-value="id" />
            </v-col>
            <v-col cols="9">
              <v-row no-gutters>
                <v-divider vertical></v-divider>
                <v-text-field v-model="filter.search_value" density="compact" variant="solo" class="rounded-e-lg"
                  placeholder="ค้นหา  Business Partner Name หรือ Company Name" single-line hide-details></v-text-field>
                <v-btn color="grey-lighten-2" height="40" rounded="0" class="rounded-e" @click="handleFetchUsers">
                  <v-icon size="25">mdi-magnify</v-icon>
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2">
          <v-menu v-model="dialogFilters" :close-on-content-click="false" location="bottom">
            <template v-slot:activator="{ props }">
              <v-btn class="text-capitalize" color="grey-lighten-2" block height="40" v-bind="props">
                Filter
                <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-card min-width="1400" elevation="5">
              <v-card-item class="pa-8">
                <v-row align-center dense>
                <v-col cols="2">
                  <v-select  density="compact" variant="outlined" placeholder="Company Code"
                    item-title="name" :items="selected_items.companies" item-value="id" />
                </v-col>
                <v-col cols="2">
                  <v-select density="compact" variant="outlined" placeholder="BU Owner"
                    item-title="name" item-value="id" :items="selected_items.bu_owners" />
                </v-col>
                <v-col cols="2">
                  <v-select  density="compact" variant="outlined" placeholder="Activities"
                    :items="selected_items.activities" item-title="name" item-value="id" />
                </v-col>
                <v-col cols="2">
                  <v-select  density="compact" variant="outlined" placeholder="Status"
                    :items="selected_items.status" item-title="name" item-value="id" />
                </v-col>
                <v-col cols="2">
                  <v-select  density="compact" variant="outlined" placeholder="Company Category"
                    :items="selected_items.companies_cate" item-title="name" item-value="id" />
                </v-col>
                <v-col cols="2">
                  <v-select  density="compact" variant="outlined" placeholder="Company Category"
                    :items="selected_items.companies_cate" item-title="name" item-value="id" />
                  <!-- <v-btn variant="text" class="text-capitalize" @click="handleFilterClear"> Clear All</v-btn> -->
                </v-col>
              </v-row>
              </v-card-item>
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
import { ref, onMounted } from 'vue';
import RegisteredVendorsItem from "@/components/items/RegisteredVendorsItem.vue";
import RspPolicyItem from "@/components/items/RspPolicyItem.vue";
import SurveyAlignItem from "@/components/items/SurveyAlignItem.vue";
import TrainingItem from "@/components/items/TrainingItem.vue";
import TrackingSDActiviteTable from "@/components/tables/TrackingSDActiviteTable.vue";
import PaginationControl from '@/components/controls/PaginationControl'
import RspService from '@/apis/RspService';

import { useErrorHandlingDialog } from '@/components/dialogs/ExceptionHandleDialogService'
const { handlingErrorsMessage } = useErrorHandlingDialog();

const dialogFilters = ref(false);
const selected_items = ref({
  topics: [
    {
      id: 'business_partner_name',
      name: 'Business Partner Name'
    }, {
      id: 'vendor Number',
      name: 'vendor Number'
    }, {
      id: 'tax_ID',
      name: 'Tax ID'
    }, {
      id: 'contact_owner',
      name: 'Contact Owner'
    }, {
      id: 'Team_owner',
      name: 'Team Owner'
    }, {
      id: 'credit_score',
      name: 'Credit Score'
    }
  ],
  companies: [],
  bu_owners: [],
  activities: [],
  status: [
    {
      id: 0,
      name: 'Inactive'
    },
    {
      id: 1,
      name: 'Active'
    }
  ],
  companies_cate: []
});

const filter = ref({
  search_key: 'business_partner_name',
  search_value: null,
  company_code: null,
  bu_owner: null,
  activities: null,
  status: null,
  company_category: null,
  date_from: null,
  date_to: null,
  offset: 1,
  limit: 10,
});
const loading = ref({
  registered : false,
  report: false
})

const content = ref({
  registered_vendors: {
    value: 0
  },
  rsp_policy_vendors: {
    value: 0,
    percent: 0
  },
  survey_align_vendors: {
    survey_value: 0,
    survey_percent: 0,
    align_value: 0,
    align_percent: 0
  },
  training_vendors: {
    value: 0,
    percent: 0
  },
  items: []
})

onMounted(() => {
  onLoadRegisteredVendorAmount();
  onLoadRspReportData();
});

const onLoadRegisteredVendorAmount = async () => {
  try {
    loading.value.registered = true;
    const response = await RspService.getRegisteredVendorAmount();
    if(response){
      content.value.registered_vendors.value =  response.data?.data?.registered_vendor_amount
    }
  } catch (e) {
    if (e.response) {
      const val = e.response.data
      handlingErrorsMessage(val.message, val?.data.error);
      return;
    }
    handlingErrorsMessage("unknown", e.message);
  } finally {
    loading.value.registered = false;
  }
}

const onLoadRspReportData= async () => {
  try {
    loading.value.report = true;
    const response = await RspService.getRspReportData();

     if(response){
      // policy
      content.value.rsp_policy_vendors.value  = response.data.data.policy.completed_amount;
      content.value.rsp_policy_vendors.percent  = response.data.data.policy.completed_percentage;

      // survey
      content.value.survey_align_vendors.align_value  = response.data.data.survey.aligned_amount;
      content.value.survey_align_vendors.align_percent  = response.data.data.survey.aligned_percentage;

      content.value.survey_align_vendors.survey_value = response.data.data.survey.completed_amount;
      content.value.survey_align_vendors.survey_percent = response.data.data.survey.completed_percentage;

      // training
      content.value.training_vendors.value = response.data.data.training.completed_amount;
      content.value.training_vendors.percent = response.data.data.training.completed_percentage;
    }
  } catch (e) {
    if (e.response) {
      const val = e.response.data
      handlingErrorsMessage(val.message, val?.data.error);
      return;
    }
    handlingErrorsMessage("unknown", e.message);
  } finally {
    loading.value.report = false;
  }
}

</script>

