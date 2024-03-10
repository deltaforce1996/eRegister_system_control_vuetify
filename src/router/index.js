/* eslint-disable no-undef */
// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/AppDefault.vue"),
    children: [
      {
        path: "/",
        name: "HomePage",
        component: () => import("@/views/HomePage.vue"),
      },
      {
        path: "/ListRolesPage",
        name: "ListRolesPage",
        component: () => import("@/views/roles/ListRolesPage.vue"),
      },
      {
        path: "/UserManagement",
        name: "UserManagement",
        component: () => import("@/views/UserMangement/UserMangementPage.vue"),
      },
      {
        path: "/HistoryUserPage",
        name: "HistoryUserPage",
        component: () => import("@/views/HistoryLog/HistoryUserPage.vue"),
      },
      {
        path: "/CreateRolePage/:role_id?",
        name: "CreateRolePage",
        component: () => import("@/views/roles/CreateRolePage.vue"),
      },
      {
        path: "/HistoryTable",
        name: "HistoryTable",
        component: () => import("@/components/tables/HistoryTable.vue"),
      },
      {
        path: "/MasterTable",
        name: "MasterTable",
        component: () => import("@/components/tables/MasterTable.vue"),
      },
      {
        path: "/HistoryRolePage",
        name: "HistoryRolePage",
        component: () => import("@/views/HistoryLog/HistoryRolePage.vue"),
      },
      {
        path: "/MasterDataManagement",
        name: "MasterDataManagement",
        component: () => import("@/views/master-data/MasterDataManagement.vue"),
      },
      {
        path: "/CorparationDetail/:id?",
        name: "CorparationDetail",
        component: () =>
          import("@/views/master-data/details/CorparationDetail.vue"),
      },
      {
        path: "/BusinessUnitDetail/:id?",
        name: "BusinessUnitDetail",
        component: () =>
          import("@/views/master-data/details/BusinessUnitDetail.vue"),
      },
      {
        path: "/CompanyDetail/:id?",
        name: "CompanyDetail",
        component: () =>
          import("@/views/master-data/details/CompanyDetail.vue"),
      },
      {
        path: "/MasterDataManagement/TeamManagement/:id?",
        name: "TeamManagement",
        component: () => import("@/views/master-data/TeamManagement.vue"),
      },
      {
        path: "/HistoryTeamPage",
        name: "HistoryTeamPage",
        component: () => import("@/views/HistoryLog/HistoryTeamPage.vue"),
      },
      {
        path: "/CreditScorePage",
        name: "CreditScorePage",
        component: () =>
          import("@/views/sd-team-credit-score/CreditScorePage.vue"),
      },
      {
        path: "/SDTeamMangement/SDActiveMangement",
        name: "SDActiveMangementPage",
        component: () =>
          import("@/views/SDTeamMangement/SDActiveMangement.vue"),
      },
      {
        path: "/SDTeamMangement/RspPolicies",
        name: "RspPoliciesPage",
        component: () => import("@/views/SDTeamMangement/RspPolicies.vue"),
      },
      {
        path: "/SDTeamMangement/RspPolicyUpsert",
        name: "RspPolicyUpsertPage",
        component: () =>
          import("@/views/SDTeamMangement/RspPolicyUpsert.vue"),
      },
      {
        path: "/SDTeamMangement/Survey",
        name: "SurveyPage",
        component: () => import("@/views/SDTeamMangement/Survey.vue"),
      },
      {
        path: "/SDTeamMangement/Survey/Preview/Second",
        name: "SurveyPreviewSecondPage",
        component: () => import("@/views/SDTeamMangement/SurveyPreviewSecond.vue"),
      },
      {
        path: "/SDTeamMangement/Survey/Preview/Third",
        name: "SurveyPreviewThirdPage",
        component: () => import("@/views/SDTeamMangement/SurveyPreviewThird.vue"),
      },
      {
        path: "/SDTeamMangement/Survey/Created",
        name: "SurveyCreatePage",
        component: () => import("@/views/SDTeamMangement/SurveyCreate.vue"),
      },
      {
        path: "/SDTeamMangement/Traning",
        name: "TraningPage",
        component: () => import("@/views/SDTeamMangement/Traning.vue"),
      },
      {
        path: "/SDTeamMangement/TraningUpsert",
        name: "TraningUpsertPage",
        component: () => import("@/views/SDTeamMangement/TraningUpsert.vue"),
      },
      {
        path: "/SDTeamDashboard/TrackingSDActivite",
        name: "TrackingSDActivitePage",
        component: () =>
          import("@/views/SDTeamDashboard/TrackingSDActivite.vue"),
      },
      {
        path: "/SDTeamDashboard/FollowUp/:owner?/:vendor?",
        name: "FollowUpPage",
        component: () => import("@/views/SDTeamDashboard/FollowUp.vue"),
      },
      {
        path: "/SDTeamDashboard/Documents",
        name: "DocumentsPage",
        component: () => import("@/views/SDTeamDashboard/Documents.vue"),
      },
      {
        path: "/SDTeamDashboard/AttachFileSurvey",
        name: "AttachFileSurveyPage",
        component: () => import("@/views/SDTeamDashboard/AttachFileSurvey.vue"),
      },
      {
        path: "/HistoryRolePage",
        name: "HistoryRolePage",
        component: () => import("@/views/HistoryLog/HistoryRolePage.vue"),
      },
      {
        path: "/HistoryCoparationPage",
        name: "HistoryCoparationPage",
        component: () => import("@/views/HistoryLog/HistoryCoparationPage.vue"),
      },
      {
        path: '/SDTeamDashboard/Documents/:bp_number?',
        name: 'DocumentsPage',
        component: () => import('@/views/SDTeamDashboard/Documents.vue'),
      },
      {
        path: "/HistoryCompanyPage",
        name: "HistoryCompanyPage",
        component: () => import("@/views/HistoryLog/HistoryCompanyPage.vue"),
      },
      {
        path: "/HistoryBusinessPage",
        name: "HistoryBusinessPage",
        component: () => import("@/views/HistoryLog/HistoryBusinessPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
