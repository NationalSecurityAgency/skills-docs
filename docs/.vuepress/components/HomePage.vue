<script setup>

import HomePageHeader from "./home/HomePageHeader.vue";
import DashboardSection from "./home/DashboardSection.vue";
import InfoCards from "./home/InfoCards.vue";
import UserDisplaySection from "./home/UserDisplaySection.vue";
import RapidIntegrationSection from "./home/RapidIntegrationSection.vue";
import VueDocsSection from "./home/VueDocsSection.vue";
</script>

<template>
  <div class="">
    <home-page-header />

    <info-cards />

    <dashboard-section />

    <user-display-section />

    <rapid-integration-section />

    <vue-docs-section />

  </div>
</template>

<style scoped>
.page {
  width: 100%;
}
</style>