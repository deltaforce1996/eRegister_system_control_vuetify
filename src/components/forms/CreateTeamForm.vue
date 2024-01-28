<template>
  <v-container>
    <h3>Create Team</h3>
    <v-card>
      <v-card-text>
        <v-row no-gutters dense>
          <v-col cols="12"><h4>Business Unit</h4></v-col>
          <v-col cols="12">
            <v-select
              v-model="business_unit"
              density="compact"
              :items="item_business_unit"
              item-title="name_en"
              item-value="id"
              variant="outlined"
              placeholder="เลือก Business Unit"
            ></v-select>
          </v-col>
          <v-col cols="12"><h4>Company</h4></v-col>
          <v-col cols="12">
            <v-select
              v-model="company"
              density="compact"
              :items="item_companies"
              item-title="name_en"
              item-value="id"
              variant="outlined"
              placeholder="เลือก Company"
            ></v-select>
          </v-col>
          <v-col cols="12"><h4>Name TH</h4></v-col>
          <v-col cols="12">
            <v-text-field
              variant="outlined"
              v-model="name_th"
              placeholder="กรอกชื่อภาษาไทย"
              :rules="[(v) => !!v || 'Name TH is required']"
              density="compact"
            ></v-text-field>
          </v-col>
          <v-col cols="12"><h4>Name EN</h4></v-col>
          <v-col cols="12">
            <v-text-field
              variant="outlined"
              v-model="name_en"
              placeholder="กรอกชื่อภาษาอังกฤษ"
              :rules="[(v) => !!v || 'Name EN is required']"
              density="compact"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-footer color="transparent" style="margin-top: 120px">
      <v-row justify="center">
        <v-col cols="auto">
          <button-control
            color="black"
            text="ย้อนกลับ"
            width="100"
            @button-clicked="on_go_to_back"
          />
        </v-col>
        <v-col cols="auto">
          <button-control
            type="submit"
            @button-clicked="submit_from_new_team"
            color="secondary"
            text="ตกลง"
            width="100"
          />
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { reactive } from "vue";
import ButtonControl from "../controls/ButtonControl.vue";
import { useRouter } from "vue-router";

import BusinessUnitService from "@/apis/BusinessUnitService";
import CompnayService from "@/apis/CompnayService"

const router = useRouter();

const item_business_unit = ref([]);
const item_companies = reactive([]);

const business_unit = ref(null);
const company = ref(null);
const name_en = ref(null);
const name_th = ref(null);

onMounted(() => {
  onLoadedBusinessUnitAll();
  onLoadedCompanyAll();
});

const onLoadedBusinessUnitAll = async () => {
  try {
    const response = await BusinessUnitService.getBusinesUnitAll();
    if (response.data?.is_success) {
      item_business_unit.value = response.data.data;
    }
  } catch (error) {
    // Failed
  }
};

const onLoadedCompanyAll = async () => {
  try {
    const response = await CompnayService.getCompanyAll();
    if (response.data?.is_success) {
      item_companies.value = response.data.data;
    }
  } catch (error) {
    // Failed
  }
};

const on_go_to_back = () => {
  router.go(-1);
};

const submit_from_new_team = () => {};
</script>
