<template>
  <div id="user">
    <h2>User Mangement</h2>
    <component
        :is="currentComponent"
        @layout="handleReplaceComponents" />

  </div>
</template>
<script setup>
/*eslint-disable no-unused-vars  */
import { ref, onBeforeMount  } from 'vue';
import ListUserManagment from '@/views/user-manamgent/ListUserManagment';
import UserMangementTab from '@/views/user-manamgent/UserMangementTab';
import UserForm from '@/components/forms/UserForm';

// const isComponent = ref(ListUserManagment);

const currentComponent = ref(null);

function handleReplaceComponents(replace, payload) {
  console.log(replace);
  switch (replace) {
    case "xxx":
      currentComponent.value = ListUserManagment;
      break;
      case "add-form":{
        currentComponent.value = UserMangementTab;
      }
      break;
    default:
      break;
  }
}

onBeforeMount(() => {
  currentComponent.value = ListUserManagment;
  // currentComponent.value =UserMangementTab;
  console.log('Before the component is mounted');
});
</script>

