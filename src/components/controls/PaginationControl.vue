<template>
  <div class="text-center">
      <v-pagination
          :value="props.currentPage"
          :length="props.length" :total-visible="7"
           class="custom-pagination"
          @change="onChangePage"
        />
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
// currentPage: 1,
//       itemsPerPage: 5, // Adjust based on your requirement
//       totalItems: 20, // Adjust based on your requirement
const props = defineProps({
  currentPage: {
    type: Number,
    default: 1
  },
  text: {
    type: String,
    default: 'None'
  },
  id: {
    type: String,
    default: null
  },
  length:{
    type:  Number,
    default: 15
  }
});

const onChangePage=(e)=>{
  console.log(e)
}

</script>

<style>

.custom-pagination .v-pagination__prev .v-btn,
.custom-pagination .v-pagination__next .v-btn{
  background-color: red;
}

.custom-pagination .v-pagination__prev .v-btn__content,
.custom-pagination .v-pagination__next .v-btn__content{
  color: white;
}

.custom-pagination .v-btn {
  color:  black;
}

.custom-pagination .v-pagination__item--is-active .v-btn {
  color: red;
  border: 1px solid red;
}

</style>
