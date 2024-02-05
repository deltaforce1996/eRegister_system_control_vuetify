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
        <FilterTrackingSDActivite
          :companies_id="filter.companies_id"
          :bu_owners_id="filter.bu_owners_id"
          :activities_id="filter.activities_id"
          :status="filter.status"
          :comp_categories_id="filter.comp_categories_id"
          :date_from="filter.date_from"
          :date_to="filter.date_to"
          @companies_id="filter.companies_id = $event"
          @bu_owners_id="filter.bu_owners_id = $event"
          @activities_id="filter.activities_id = $event"
          @status="filter.status = $event"
          @comp_categories_id="filter.comp_categories_id = $event"
          @date_from="filter.date_from = $event"
          @date_to="filter.date_to = $event"
        />
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
      <PaginationControl class="mt-3"
        :value="filter.page"
       :length="filter.pageSize"
        @value="handlePaginationEvent" />
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
import FilterTrackingSDActivite from "@/components/dialogs/FilterTrackingSDActivite.vue";
import PaginationControl from '@/components/controls/PaginationControl'
import RspService from '@/apis/RspService';
import PartnerServive from '@/apis/PartnerServive';
import paginationUtils from '@/utils/paginationUtils'


import { useErrorHandlingDialog } from '@/components/dialogs/ExceptionHandleDialogService'
const { handlingErrorsMessage } = useErrorHandlingDialog();

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
  companies_id: null,
  bu_owners_id: null,
  activities_id: null,
  status: null,
  comp_categories_id: null,
  date_from: null,
  date_to: null,
  offset: 1,
  limit: 1,
  page : 0,
  pageSize: 1,
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
  getRegisteredVendorAmount();
  getRspReportData();
  getBusinessPartnerDetail();
});
const handleFetchUsers = () =>{
 console.log(filter.value);

}
const getRegisteredVendorAmount = async () => {
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

const getRspReportData= async () => {
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

const getBusinessPartnerDetail = async () => {
  try {
    loading.value.registered = true;
    const response = await PartnerServive.getBusinessPartnerDetail(
      filter.value.offset,
      filter.value.limit,
      filter.value.search_key,
      filter.value.search_value,
      filter.value.companies_id,
      filter.value.bu_owners_id,
      filter.value.comp_categories_id,
      filter.value.activities_id,
      filter.value.status,
      filter.value.date_from,
      filter.value.date_to,
    );
    const headers = response.headers;
    const itemsOffset = Number(headers['items-offset']);
    const itemsLimit = Number(headers['items-limit']);
    const itemsTotal = Number(headers['items-total']);

    filter.value.offset = itemsOffset;
    filter.value.limit = itemsLimit;
    filter.value.pageSize = paginationUtils.pageSize(itemsLimit,itemsTotal)
    if (response.data?.is_success) {
      content.value.items =  response.data?.data
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
const handlePaginationEvent = (page) => {
  filter.value.page = page;
  filter.value.offset = paginationUtils.pageOffset(page,filter.value.limit);
  getBusinessPartnerDetail();
}
</script>

