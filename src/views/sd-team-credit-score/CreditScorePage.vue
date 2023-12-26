<template>
  <v-container>
    <v-card rounded class="mx-auto">
      <v-card-item class="d-flex align-center justify-center">
        <v-row dense no-gutters>
          <v-col cols="12" class="text-center">
            <h3>Your Credit Score</h3>
          </v-col>
          <v-col cols="12">
            <v-row justify="center" align="center">
              <v-col v-if="level" cols="auto" class="d-flex align-center">
                <v-avatar color="secondary" size="50"
                  ><h1>{{ level }}</h1></v-avatar
                >
              </v-col>
              <v-col cols="auto" class="d-flex align-center">
                <h4>Your Score {{ score }}/100</h4>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="justify-center">
            <v-progress-linear
              color="secondary"
              :model-value="score"
              :height="9"
              style="width: 50%; margin-top: 5%"
            ></v-progress-linear>
          </v-col>
          <v-col cols="12">
            <!-- <v-img
              height="60%"
              width="1700"
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            ></v-img> -->
          </v-col>
        </v-row>
      </v-card-item>
      <v-card-text v-if="description">
        {{ description }}
      </v-card-text>
    </v-card>
    <v-container>
      <v-row>
        <v-col v-for="item in items" :key="item.title" cols="12" md="6" lg="3">
          <cradit-item
            :value="item.value"
            :title="item.title"
            :description="item.description"
          />
        </v-col>
      </v-row>
    </v-container>
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
            @button-clicked="submit_cradit_score"
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

import CraditItem from "@/components/items/CraditItem.vue";
import ButtonControl from "@/components/controls/ButtonControl.vue";

const score = ref(50);
const level = ref("A");

const description =
  ref(`Digital Equipment, Hewlett-Packard, AT&T, and ITT are getting started
        with it. Ford and General Motors use it—at Ford alone there are more
        than 50 applications. The “house of quality,” the basic design tool of
        the management approach known as quality function deployment (QFD),
        originated in 1972 at Mitsubishi’s Kobe shipyard site. Toyota and its
        suppliers then developed it in numerous ways. The house of quality has
        been used successfully by Japanese manufacturers of consumer
        electronics, home appliances, clothing, integrated circuits, synthetic
        rubber, construction equipment, and agricultural engines. Japanese
        designers use it for services like swimming schools and retail outlets
        and even for planning apartment layouts.`);

const items = reactive([
  { title: "Management approach known", value: 90, description: "Great" },
  { title: "Management approach known", value: 65, description: "Not bad" },
  {
    title: "Management approach known",
    value: 30,
    description: "Needs to improve",
  },
  { title: "Management approach known", value: 90, description: "Great" },
  { title: "Management approach known", value: 65, description: "Not bad" },
  {
    title: "Management approach known",
    value: 30,
    description: "Needs to improve",
  },
  { title: "Management approach known", value: 90, description: "Great" },
  { title: "Management approach known", value: 65, description: "Not bad" },
]);

const on_go_to_back = () => {};
const submit_cradit_score = () => {};
</script>
