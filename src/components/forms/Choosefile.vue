<!-- eslint-disable vue/multi-word-component-names -->
<template>
      <v-row dense>
        <v-col cols="12" v-if="title != null">
          <strong>{{ title }}</strong>
        </v-col>
        <v-col cols="6">
          <v-card class="mx-auto ma-1" variant="outlined" style="border: 1px dashed #000000"  @dragover="dragover" @dragleave="dragleave" @drop="drop">
            <v-container class="bg-grey-lighten-3">
              <v-row no-gutters style="height: 200px;">
                <v-col align-self="center" cols="12" class="text-center">
                  <v-icon size="70">mdi-microsoft-excel</v-icon>
                </v-col>
                <v-col align-self="center" cols="12" class="text-center">
                  <div>
                    <strong> Drag & Drop file</strong> <strong class="text-secondary">HERE</strong>

                  </div>
                </v-col>
                <v-col align-self="center" cols="12" class="text-center">
                  <v-btn variant="elevated" class="text-capitalize" color="secondary" rounded @click="handlePickFile">
                    Browser Files
                  </v-btn>
                  <input ref="uploader" class="d-none" type="file"
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    @change="handleFileChanged">
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="6">
          <strong v-if="listTitle != null">{{ listTitle }}</strong>
          <div v-if="file != null">
            <v-list-item>
              <template v-slot:prepend>
                <v-icon>mdi-microsoft-excel</v-icon>
              </template>
              <v-list-item-title>{{ fileName }}</v-list-item-title>
              <template v-slot:append>
                <strong>{{ fileSize }}</strong>
              </template>
            </v-list-item>
            <v-divider></v-divider>
          </div>
        </v-col>
        <v-col cols="12">
          <strong class="text-secondary">อัพโหลดเฉพาะไฟล์ Excel จำนวน 1 ไฟล์เท่านั้น*</strong>
        </v-col>
      </v-row>
</template>
<script>
import convertSize from "convert-size";
export default {
  props: {
    isFile: {
      type: Object,
      default: null
    },
    title:{
      type: String,
      default: null
    },
    listTitle:{
      type: String,
      default: null
    }
  },
  data() {
    return {
      file: null,
      fileName: "",
      fileSize: "",
      isDragging: false,
    };
  },
  watch: {
    isFile(val) {
      if (val) {
        this.file = val;
        this.fileName = val.name
        this.fileSize = convertSize(val.size)
      }else{
        this.file = null;
        this.fileName = "";
        this.fileSize = "";
      }
    }
  },
  methods: {
    handlePickFile() {
      window.addEventListener('focus', () => { }, { once: true })
      this.$refs.uploader.click()
    },
    handleFileChanged(e) {
      // this.file = e.target.files[0];
      // this.fileName = e.target.files[0].name
      // this.fileSize = convertSize(e.target.files[0].size)
      this.$emit('input-file', e.target.files[0]);
    },
    dragover(e) {
      e.preventDefault();
      this.isDragging = true;
    },
    dragleave() {
      this.isDragging = false;
    },
    drop(e) {
      e.preventDefault();
      this.file = e.dataTransfer.files[0];
      this.fileName = e.dataTransfer.files[0].name
      this.fileSize = convertSize(e.dataTransfer.files[0].size)
      this.$emit('input-file', this.file);
    },
  }
};
</script>
