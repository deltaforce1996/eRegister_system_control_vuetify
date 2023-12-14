<template>
    <v-container>
      <h3>Edit Team</h3>
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
              @button-clicked="submit_from_update_team"
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
  import { ref } from "vue";
  import { reactive } from "vue";
  import ButtonControl from "../controls/ButtonControl.vue";
  import { useRouter } from "vue-router";

  const props = defineProps({
  item: {
    type: Object,
    default: (() => {})
  }
});
  
  const router = useRouter();
  
  let item_business_unit = reactive([]);
  let item_companies = reactive([]);
  
  let business_unit = ref(props.item.business_unit_id);
  let company = ref(props.item.company_id);
  let name_en = ref(props.item.name_en);
  let name_th = ref(props.item.name_th);
  
  item_companies = [
    {
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
    },
  ];
  
  item_business_unit = [
    {
      id: 1,
      name_th: "ชื่อที่ไทย",
      name_en: "Thai Name",
      purchasing_organization: "10002",
    },
  ];
  
  const on_go_to_back = () => {
    router.go(-1);
  }
  
  const submit_from_update_team = () => {
    
  }
  </script>
  