<template>
  <v-container>
    <h3>Company</h3>
    <v-card>
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <h4>ID</h4>
          </v-col>
          <v-col cols="12">
            <p>{{ data.id }}</p>
          </v-col>
          <v-col cols="12">
            <h4>Company Code</h4>
          </v-col>
          <v-col cols="12">
            <p>{{ data.company_code }}</p>
          </v-col>
          <v-col cols="12">
            <h4>Name TH</h4>
          </v-col>
          <v-col cols="12">
            <p>{{ data.name_th }}</p>
          </v-col>
          <v-col cols="12">
            <h4>Name EN</h4>
          </v-col>
          <v-col cols="12">
            <p>{{ data.name_en }}</p>
          </v-col>
          <v-col cols="12">
            <h4>Taxpayer ID number</h4>
          </v-col>
          <v-col cols="12">
            <p>{{ data.taxpayer_id_number }}</p>
          </v-col>
          <v-col cols="12">
            <h4>Address TH</h4>
          </v-col>
          <v-col cols="12">
            <p>{{ data.address_th }}</p>
          </v-col>
          <v-col cols="12">
            <h4>Address EN</h4>
          </v-col>
          <v-col cols="12">
            <p>{{ data.address_en }}</p>
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
      </v-row>
    </v-footer>
  </v-container>
</template>

<script setup>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

import ButtonControl from "@/components/controls/ButtonControl.vue";

const route = useRoute();
const router = useRouter();

const id = route.params.id;

let data = reactive([]);
data = {
  id: 1,
  company_code: "0006",
  name_th: "Thai name",
  name_en: "English name",
  taxpayer_id_number: "Taxpayer ID number of the company",
  business_unit: {
    id: "ID of the business unit",
    name_th: "business unit",
    name_en: "business unit",
    purchasing_organization: "Purchasing organization code",
  },
  address_th: "Address of the company in Thai",
  address_en: "Address of the company in English",
  is_active: "The company active status (0 is inactive, 1 is active)",
  created_at: "Created date time (format: yyyy-MM-ddTHH:mm:ss)",
  created_user_id: "User ID who created",
  updated_at: "Last updated date time (format: yyyy-MM-ddTHH:mm:ss)",
  updated_user_id: "User ID who is last updated (required)",
};

const on_go_to_back = () => {
  router.go(-1);
};
</script>
