<template>
  <div>
    <v-row justify="end" class="mt-2 mb-2">
      <v-col cols="2">
        <v-btn variant="elevated" class="text-capitalize" color="secondary" block>
          <v-icon left>mdi-microsoft-excel</v-icon>
          Download template
        </v-btn>
      </v-col>
    </v-row>
    <Choosefile @input-file="handleOnChangeFile"></Choosefile>
    <v-card class="mx-auto elevation-1 mt-5" color="secondary">
      <v-card-item>
        <v-row align-center>
          <v-col cols="1">
            <strong>No.</strong>
          </v-col>
          <v-col cols="2">
            <strong>User type</strong>
          </v-col>
          <v-col cols="2">
            <strong>Company</strong>
          </v-col>
          <v-col cols="2">
            <strong>Role</strong>
          </v-col>
          <v-col cols="2">
            <strong>Team</strong>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card>
    <v-card class="mx-auto elevation-1 mt-5">
    <div v-for="n in 3" :key="n">

        <v-card-item>
          <v-row no-gutters>
            <v-col cols="1">
              <strong>No.</strong>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col cols="2">
              <strong class="pl-1">User type</strong>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col cols="2">
              <strong  class="pl-1">Company</strong>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col cols="2">
              <strong  class="pl-1">Role</strong>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col cols="2">
              <strong  class="pl-1">Team</strong>
            </v-col>
          </v-row>
        </v-card-item>
        <v-divider></v-divider>
      </div>
  </v-card>

  <div>
    <strong class="text-secondary">ไฟล์ที่ที่อัพไม่ตรงกับ template กรุณาตรวจสอบและอัพใหม่อีกครั้ง*</strong>
      <div  v-for="message in errorCcurred" :key="message">
        <strong class="text-secondary">{{message}}</strong>
      </div>

  </div>
  <v-divider class="mt-5 mb-5"></v-divider>
  <div class="text-center ">
      <v-btn rounded class="ma-2" color="black"  style="width: 100px;" @Click="handleCancelClicked">
        <strong>ยกเลิก</strong>
      </v-btn>
      <v-btn rounded class="ma-2" color="secondary" style="width: 100px;" @Click="handleAcceptClicked">
        <strong>ตกลง</strong>
      </v-btn>
    </div>
  </div>
</template>
<script setup>

/*eslint-disable no-unused-vars  */
import readXlsxFile from 'read-excel-file'
import Choosefile from '@/components/forms/Choosefile'
import { ref, reactive } from "vue";

const file = ref(null);
const errorCcurred = [
  "-No 1 xxxxx",
  "-No 2 xxxxx",
  "-No 3 xxxxx",
]


function  handleOnChangeFile(file){
   console.log(file)
   readXlsxFile(file).then((rows) => {
    console.log(rows)
    // `rows` is an array of rows
    // each row being an array of cells.
  })
}
function  handleAcceptClicked(){
   console.log("ok")
}
function  handleCancelClicked(){
  const  component  = "ListUserManagment";
  const  payload  = "";
  this.$emit("layout",component,payload)
}
</script>
