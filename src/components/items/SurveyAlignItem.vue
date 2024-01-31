<template>
  <v-card class="mx-auto rounded-lg" elevation="5" height="135">
    <v-card-text>
      <v-row dense>
        <v-col cols="6">
          <v-card-title class="font-weight-black">
            Survey
          </v-card-title>
          <v-card-actions>
            <h1 class="text-teal-accent-4 pl-2" style="font-size: 55px;">{{ survey_value }}</h1>
            &nbsp;
            &nbsp;
            <div>
              <v-chip color="teal-accent-4" label size="small">
                <span class="font-weight-black">{{ survey_percent }}%</span>
              </v-chip>
              <br />
              <span class="font-weight-black text-teal-accent-4">vendors</span>
            </div>
          </v-card-actions>
        </v-col>
        <v-col cols="6">
          <v-card-title class="font-weight-black">
            Align
          </v-card-title>
          <v-card-actions>
            <h1 class="text-teal-accent-4 pl-2" style="font-size: 55px;">{{ align_value }}</h1>
            &nbsp;
            &nbsp;
            <div>
              <v-chip color="teal-accent-4" label size="small">
                <span class="font-weight-black">{{ align_percent }}%</span>
              </v-chip>
              <br />
              <span class="font-weight-black text-teal-accent-4">vendors</span>
            </div>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script setup>
/*eslint-disable no-unused-vars  */
import { defineProps } from 'vue';
const props = defineProps({
  survey_value: {
    type: Number,
    default: 0,
  },
  survey_percent: {
    type: Number,
    default: 0,
  },
  align_value: {
    type: Number,
    default: 0,
  },
  align_percent: {
    type: Number,
    default: 0,
  }
});

</script>

