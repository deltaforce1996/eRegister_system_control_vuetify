<template>
  <div>
    <v-card class="mx-auto elevation-1" color="secondary" height="50">
      <v-card-item dense>
        <v-row no-gutters dense justify="space-around">
          <v-col cols="1">
            <v-checkbox v-model="selected_all" hide-details class="pl-2 mt-n3"></v-checkbox>
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
      <v-expansion-panel v-for="(i, index) in items" :key="index" class="mt-1"
        :style="index === panel ? 'border: 2px solid red;' : ''" >
        <v-expansion-panel-title :color="index === panel ? '#FFF1F0' : ''">
          <template v-slot:actions="{ expanded }">
            <v-icon color="secondary" :icon="expanded ? 'mdi-chevron-up' : 'mdi-chevron-down'"></v-icon>
          </template>
          <v-row no-gutters dense justify="space-around">
            <v-col cols="1">
              <v-checkbox v-model="Selected" :value="i.bp_number" hide-details hide-spin-buttons
                class="pa-0 ma-0"></v-checkbox>
            </v-col>
            <v-col cols="2" align-self="center">
              <strong>{{ i.name_th }}</strong>
            </v-col>
            <v-col cols="2" align-self="center">
              <v-chip :color="onColor(i.rsp?.policy?.status)" label size="small">
                <strong>{{ i.rsp?.policy?.status }}</strong>
              </v-chip>
              <p class="mt-2 text-grey">
                Completed {{ dateUtils.parseDdMmYy(i.rsp?.policy?.completed_at) }}
              </p>
            </v-col>
            <v-col cols="2" align-self="center">
              <v-chip :color="onColor(i.rsp?.survey?.status)" label size="small">
                <strong>{{ i.rsp?.survey?.status }} {{ i.rsp?.survey?.progress_percentage }}%</strong>
              </v-chip>
              <p class="mt-2 text-grey">
                Completed {{ dateUtils.parseDdMmYy(i.rsp?.survey?.completed_at) }}
              </p>
            </v-col>
            <v-col cols="2" align-self="center">
              <v-chip :color="onColor(i.rsp?.training?.status)" label size="small">
                <strong>{{ i.rsp?.training?.status }}
                  {{ i.rsp?.training?.completed_amount }}/{{ i.rsp?.training?.total_amount }}</strong>
              </v-chip>
              <p class="mt-2 text-grey">
                Completed {{ dateUtils.parseDdMmYy(i.rsp?.training?.completed_at) }}
              </p>
            </v-col>
            <v-col cols="3" align-self="center">
              <v-chip color="secondary" label size="small">
                <strong>{{ i.contact_owner?.email }}</strong>
              </v-chip>
              <br />
              <div class="mt-2">
                <strong>{{ i.contact_owner?.business_unit }}</strong>
                &nbsp;/&nbsp;<span class="text-grey">{{ i.contact_owner?.team }}</span>
                &nbsp;/&nbsp;<span class="text-grey">{{ i.contact_owner?.company }}</span>
              </div>
            </v-col>
          </v-row>

        </v-expansion-panel-title>
        <v-expansion-panel-text style="background-color: #fff1f0">
          <v-card class="ml-n3 mr-n3" elevation="0" rounded="0">
            <v-card-item class="ma-2">
              <v-row justify="space-around" dense="">
                <v-col cols="8">
                  <v-skeleton-loader :loading="loader.bp_detail" type="list-item-two-line">

                    <v-row dense>
                      <v-col cols="12">
                        <div class="text-h6 text-secondary font-weight-black">Company Info.</div>
                      </v-col>
                      <v-col cols="3">
                        <label class="font-weight-medium  text-grey-lighten-1">Business Partner Number</label>
                        <br />
                        <span
                          class="font-weight-black">{{ businessPartnerDetail.company_information?.business_partner_number }}</span>
                      </v-col>
                      <v-col cols="3">
                        <label class="font-weight-medium  text-grey-lighten-1">FPT Affillate</label>
                        <br />
                        <span class="font-weight-black">{{ businessPartnerDetail.company_information?.is_fpt_affiliate ===
                          1 ? 'Yes' : 'No' }}</span>
                      </v-col>
                      <v-col cols="3">
                        <label class="font-weight-medium  text-grey-lighten-1">Organization Type</label>
                        <br />
                        <span
                          class="font-weight-black">{{ businessPartnerDetail.company_information?.business_register_type }}</span>
                      </v-col>
                      <v-col cols="3">
                        <label class="font-weight-medium  text-grey-lighten-1">Juristic Type</label>
                        <br />
                        <span
                          class="font-weight-black">{{ businessPartnerDetail.company_information?.account_business_partner_type }}</span>
                      </v-col>
                      <v-col cols="3">
                        <label class="font-weight-medium  text-grey-lighten-1">Company Category</label>
                        <br />
                        <span
                          class="font-weight-black">{{ businessPartnerDetail.company_information?.company_category }}</span>
                      </v-col>
                      <v-col cols="9">
                        <label class="font-weight-medium  text-grey-lighten-1">Product / Service Category</label>
                        <br />
                        <span
                          class="font-weight-black">{{ businessPartnerDetail.company_information?.product_category }}</span>
                      </v-col>
                      <!-- <v-col cols="3">
                      <label class="font-weight-medium  text-grey-lighten-1">Tax ID</label>
                      <br />
                      <span class="font-weight-black">?</span>
                    </v-col> -->
                      <v-col cols="12">
                        <label class="font-weight-medium  text-grey-lighten-1">Vendor Number</label>
                        <br />
                        <span
                          class="font-weight-black">{{ businessPartnerDetail.company_information?.vendor_number }}</span>
                      </v-col>
                      <v-col cols="12">
                        <label class="font-weight-medium  text-grey-lighten-1">Company code of vender</label>
                        <br />
                        <span
                          class="font-weight-black">{{ businessPartnerDetail.company_information?.company_code_of_vendor }}</span>
                      </v-col>
                      <v-col cols="12">
                        <label class="font-weight-medium  text-grey-lighten-1">Customer Number</label>
                        <br />
                        <span
                          class="font-weight-black">{{ businessPartnerDetail.company_information?.customer_number }}</span>
                      </v-col>
                      <v-col cols="12">
                        <label class="font-weight-medium  text-grey-lighten-1">Company code of customer</label>
                        <br />
                        <span
                          class="font-weight-black">{{ businessPartnerDetail.company_information?.company_code_of_customer }}</span>
                      </v-col>
                    </v-row>
                  </v-skeleton-loader>
                  <v-divider class="mt-5 mb-5"></v-divider>
                  <v-skeleton-loader :loading="loader.branch_code || loader.bp_detail" type="list-item-two-line">
                  <v-row dense class="mt-5">
                    <v-col cols="12">
                      <div class="text-h6 text-secondary font-weight-black">Branch Info.</div>
                    </v-col>
                    <v-col cols="12">
                      <v-row>
                        <v-col cols="4">
                          <v-select v-model="business_branch" density="compact" variant="outlined" placeholder="Roles"
                           :items="businessPartnerDetail.branch_list"
                           item-value="branch_code"
                           item-title="branch_code">
                          </v-select>
                        </v-col>
                      </v-row>

                    </v-col>
                    <v-col cols="3">
                      <label class="font-weight-medium  text-grey-lighten-1">Business Partner Role</label>
                      <br />
                      <span class="font-weight-black">{{ businessPartnerDetail.branch?.business_partner_role}}</span>
                    </v-col>
                    <v-col cols="9">
                      <label class="font-weight-medium  text-grey-lighten-1">Branch Code </label>
                      <br />
                      <span class="font-weight-black">{{businessPartnerDetail.branch?.branch_code}}</span>
                    </v-col>
                    <v-col cols="12">
                      <label class="font-weight-medium  text-grey-lighten-1">Company Code</label>
                      <br />
                      <span class="font-weight-black">{{businessPartnerDetail.branch?.company_code}}</span>
                    </v-col>
                    <v-col cols="12">
                      <label class="font-weight-medium  text-grey-lighten-1">Branch Address</label>
                      <br />
                      <span class="font-weight-black">{{businessPartnerDetail.branch?.branch_address}}</span>
                    </v-col>
                    <v-col cols="12">
                      <label class="font-weight-medium  text-grey-lighten-1">Contact Person</label>
                      <br />
                      <v-row v-for="(item, index) in businessPartnerDetail.branch?.contact_person" :key="index" dense>
                        <v-col cols="4">
                          <span class="font-weight-black"> {{item.name}}</span>
                        </v-col>
                        <v-col cols="4">
                          <span class="font-weight-black"> {{item.mobile}}</span>
                        </v-col>
                        <v-col cols="4">
                          <span class="font-weight-black"> {{item.email}}</span>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  </v-skeleton-loader>
                  <v-divider class="mt-5 mb-5"></v-divider>
                  <v-skeleton-loader :loading="loader.survey_result" type="list-item-two-line">
                  <v-row dense v-if="survey_result_details?.progress_percentage === 100">
                    <v-col cols="12">
                      <div>
                        <span class="text-h6 text-secondary font-weight-black">Sustainability Activites</span>
                        <span class="text-h6 text-secondary pl-1 mr-1">:</span>
                        <span class="text-h6 text-light-green-accent-4 font-weight-black">Align</span>
                      </div>
                    </v-col>
                    <v-col cols="12">
                      <v-list lines="two" width="340" dense>
                        <v-list-item dense v-for="(item,index) in survey_result_details?.survey_result?.section" :key="index">
                          <v-list-item-title class="font-weight-black">{{ item.name }}</v-list-item-title>
                          <v-list-item-subtitle class="font-weight-medium ">{{ item.score }}/{{item.total_score}}</v-list-item-subtitle>
                          <template v-slot:append>
                            <v-avatar color="secondary">
                              <span style=" font-size: 13px;">{{item.score_percentage}}</span>
                            </v-avatar>
                          </template>
                        </v-list-item>
                      </v-list>
                    </v-col>
                  </v-row>
                  <v-row v-else dense>
                    <v-col cols="12">
                      <div>
                        <span class="text-h6 text-secondary font-weight-black">Sustainability Activites</span>
                      </div>
                    </v-col>
                    <v-col cols="12">
                      <v-list-item-subtitle class="font-weight-medium ">Progress {{survey_result_details?.progress_percentage}} %</v-list-item-subtitle>
                    </v-col>
                  </v-row>
                </v-skeleton-loader>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="4">
                  <v-row dense class="pa-10">
                    <v-col cols="12">
                      <v-btn variant="outlined"
                        :disabled="loader.bp_detail"
                        :loading="loader.bp_detail"
                        :to="`/SDTeamDashboard/FollowUp?bp_number=${businessPartnerDetail.company_information?.business_partner_number}&email=${businessPartnerDetail?.contact_owner?.email}`"
                        block class="text-capitalize rounded-pill" color="black">
                        Follow up
                      </v-btn>
                    </v-col>
                    <v-col cols="12">
                      <v-btn block
                        :disabled="loader.bp_detail"
                        :loading="loader.bp_detail"
                        :to="`/SDTeamDashboard/Documents?bp_number=${businessPartnerDetail.company_information?.business_partner_number}`"
                        class="text-capitalize rounded-pill" color="teal-accent-4">
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
import { ref, onMounted, watch, computed } from 'vue';
import { defineProps } from 'vue';
import dateUtils from '@/utils/dateUtils'
// eslint-disable-next-line no-unused-vars
import PartnerServive from '@/apis/PartnerServive';
import RspService from '@/apis/RspService';
import { useErrorHandlingDialog } from '@/components/dialogs/ExceptionHandleDialogService'
const { handlingErrorsMessage } = useErrorHandlingDialog();

const emit = defineEmits(["action-edit", "selected"]);
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
  },
  selected: {
    type: Array,
    default: () => []
  }
});
const Selected = computed({
  get() { return props.selected ?? []; },
  set(value) { emit("selected", value) }
});

const panel = ref([]);
const selected_all = ref(false);

const businessPartnerDetail = ref({});
const survey_result_details = ref({});
const business_branch =ref(null);

const loader = ref({
  bp_detail: false,
  branch_code: false,
  survey_result: false
});
watch(selected_all, (newValue) => {
  if (newValue) {
    const bp_numbers = Array.from(props.items, i => i.bp_number);
    Selected.value = [...bp_numbers];
  } else {
    Selected.value = [];
  }
});
watch(panel, (i) => {
  if (i != undefined) {
    const bp_number = props.items[i].bp_number;
    getBusinessPartnerDetail(bp_number);
    getRspSurveyResultDetail(bp_number);
  }
});
watch(business_branch, (branch_code) => {
  if (branch_code) {
    const bp_number = props.items[panel.value].bp_number;
    getBusinessPartnerDetailฺBranchCode(bp_number,branch_code);
  }
});

const onColor = (type) => {
  switch (type) {
    case 'Completed': return 'teal-accent-4'
    case 'Not Completed': return 'red'
    case 'In Progress': return 'amber'
    case 'Not Started': return 'cyan'
    default: return ''
  }
}
const getBusinessPartnerDetail = async (bp_number) => {
  try {
    loader.value.bp_detail = true;
    const response = await PartnerServive.getBusinessPartnerDetail(bp_number);
    if (response.data?.is_success) {
      businessPartnerDetail.value = response.data?.data
      business_branch.value =  businessPartnerDetail.value?.branch?.branch_code;
    }
  } catch (e) {
    if (e.response) {
      const val = e.response.data
      handlingErrorsMessage(val.message, val?.data.error);
      return;
    }
    handlingErrorsMessage("unknown", e.message);
  } finally {
    loader.value.bp_detail = false;
  }
}
// eslint-disable-next-line no-unused-vars
const getBusinessPartnerDetailฺBranchCode = async (bp_number,branch_code) => {
  try {
    loader.value.branch_code = true;
    const response = await PartnerServive.getBusinessPartnerDetailBranchCode(bp_number,branch_code);
    if (response.data?.is_success) {
      businessPartnerDetail.value = response.data?.data
    }
  } catch (e) {
    if (e.response) {
      const val = e.response.data
      handlingErrorsMessage(val.message, val?.data.error);
      return;
    }
    handlingErrorsMessage("unknown", e.message);
  } finally {
    loader.value.branch_code = false;
  }
}
const getRspSurveyResultDetail = async (bp_number) => {
  try {
    loader.value.survey_result = true;
    const response = await RspService.getRspSurveyResultDetail(bp_number);
    if (response.data?.is_success) {
      survey_result_details.value = response.data?.data
    }
  } catch (e) {
    if (e.response) {
      const val = e.response.data
      handlingErrorsMessage(val.message, val?.data.error);
      return;
    }
    handlingErrorsMessage("unknown", e.message);
  } finally {
    loader.value.survey_result = false;
  }
}
</script>

