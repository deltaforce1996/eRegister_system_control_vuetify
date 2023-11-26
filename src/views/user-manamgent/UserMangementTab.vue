<template>
  <div >
        <v-tabs v-model="tab"  color="secondary">
          <v-tab
            v-for="(tabs,index) in items"
            :key="index"
             class="text-capitalize"
             @click="handleClickedTab(tabs)"
          >
            {{ tabs.title }}
          </v-tab>
        </v-tabs>
      <v-tabs-items>
        <v-tab-item>
             <component :is="currentComponent"  @is-component="handleEmitLayoutCancel"   />
        </v-tab-item>
      </v-tabs-items>
  </div>
</template>
<script setup>
/*eslint-disable no-unused-vars  */
import { ref, onBeforeMount  } from 'vue';
import ImportActiviteUser from '@/views/user-manamgent/ImportActiviteUser';
import ImportDeactivateUser from '@/views/user-manamgent/ImportDeactivateUser';
import UserForm from '@/components/forms/UserForm';
const emit = defineEmits(["layout"]);

const tab = ref(null);
const items = ref([]);
const currentComponent = ref(null);

function handleEmitLayoutCancel(){
  const  component  = "xxx";
  const  payload  = "";
  emit("layout",component,payload)
}
function handleClickedTab(tab){
  currentComponent.value =  tab.content
}
onBeforeMount(() => {
  currentComponent.value = UserForm;
  items.value= [
          { title: 'AddUser', icon: 'mdi-account-outline', content: UserForm },
          { title: 'Import activite user', icon: 'mdi-link-variant', content: ImportActiviteUser },
          { title: 'Import deactivate user', icon: 'mdi-link-variant', content: ImportDeactivateUser }
        ]
});
</script>

