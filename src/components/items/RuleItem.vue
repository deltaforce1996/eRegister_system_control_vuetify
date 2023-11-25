<template>
    <v-expansion-panel>
        <v-expansion-panel-title>
            <v-row no-gutters dense justify="space-around">
                <v-col cols="3" align-self="center">
                    <p>{{ computedPermission }}</p>
                </v-col>
                <v-col cols="5" align-self="center">
                    <p>{{ computedDescription }}</p>
                </v-col>
                <v-col cols="2" align-self="center">
                    <v-chip :color="props.isActive ? 'green' : 'gray'" label>
                        <v-badge dot inline :color="props.isActive ? 'green' : 'gray'"></v-badge>
                        <p>{{ props.isActive ? 'Active' : 'Inactive' }}</p>
                    </v-chip>
                </v-col>
                <v-col cols="1" align-self="center">
                    <button-control text="แก้ไข" @button-clicked="onItemClicked" />
                </v-col>
            </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
            <permission-table :headers="subHeaders" :desserts="subDesserts" />
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>


<script setup>
import ButtonControl from '../controls/ButtonControl.vue';
import PermissionTable from '../../components/tables/PermissionTable.vue'
import { defineProps, computed } from 'vue';

const emit = defineEmits(['edited-clicked']);

const props = defineProps({
    permission: {
        type: String,
        default: "None"
    },
    description: {
        type: String,
        default: 'None'
    },
    isActive: {
        type: Boolean,
        default: false
    },
    id: {
        type: String,
        default: 'None'
    },
    subHeaders: {
        type: Array,
        default: () => []
    },
    subDesserts: {
        type: Array,
        default: () => []
    }
});

const computedPermission = computed(() => {
    return props.permission || "None";
});

const computedDescription = computed(() => {
    return props.description || "None";
});

const computedId = computed(() => {
    return props.id || "None";
});

const onItemClicked = () => {
    emit('edited-clicked', computedId)
};

// const headers = [
//     {
//         title: 'Permission Module',
//         align: 'start',
//         key: 'permission',
//     },
//     { title: 'View', key: 'view', },
//     { title: 'Create', key: 'created' },
//     { title: 'Update', key: 'updated' },
//     { title: 'Delete', key: 'deleted' },
// ]

// const desserts = [
//     {
//         permission: 'Frozen Yogurt',
//         view: false,
//         created: false,
//         updated: true,
//         deleted: false,
//     },
//     {
//         permission: 'Register Form',
//         view: false,
//         created: true,
//         updated: false,
//         deleted: false,
//     },
// ]
</script>