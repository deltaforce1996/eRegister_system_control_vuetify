<template>
    <v-app>
      <v-data-table
        :headers="headers"
        :items="items"
        class="my-data-table"
      >
        <template v-slot:[`item.actiion_1`]="{ item }">
          <v-btn
            v-for="action in item.actiion_1"
            :key="action"
            @click="handleAction(item, action)"
            outlined
          >
            {{ action }}
          </v-btn>
        </template>
      </v-data-table>
    </v-app>
  </template>
  
  <style>
  table th + th {
    border-left: 1px solid #dddddd;
  }
  table td + td {
    border-left: 1px solid #dddddd;
  }
  </style>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const headers = ref([
        { text: "Name", value: "name" },
        { text: "Age", value: "age" },
        { text: "Email", value: "email" },
        { text: "Action_1", value: "actiion_1" },
        { text: "Action_2", value: "actiion_2" },
      ]);
  
      const items = ref([
        { name: "John Doe", age: 30, email: "john@example.com", actiion_1: ['add', 'remove'], actiion_2: ["history_log"] },
        { name: "Jane Smith", age: 25, email: "jane@example.com", actiion_1: ['add', 'remove'], actiion_2: ["history_log"]  },
        { name: "Jane Smith", age: 25, email: "jane@example.com", actiion_1: ['add', 'remove'], actiion_2: ["history_log"]  },
        { name: "Jane Smith", age: 25, email: "jane@example.com", actiion_1: ['add', 'remove'], actiion_2: ["history_log"]  },
        // Add more data items here
      ]);
  
      // Handle action button click
      const handleAction = (item, action) => {
        if (action === 'add') {
          // Handle add action
          console.log(`Adding: ${item.name}`);
        } else if (action === 'remove') {
          // Handle remove action
          console.log(`Removing: ${item.name}`);
        }
      };
  
      return {
        headers,
        items,
        handleAction,
      };
    },
  };
  </script>
  