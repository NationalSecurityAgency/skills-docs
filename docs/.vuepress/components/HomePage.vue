<template>
  <div>
    <home-page-header/>

    <div role="main">
      <info-cards style="margin-top: -3rem;"/>

      <dashboard-section class="mt-5 mb-5"/>

      <user-display-section style="margin-top: 8rem;"/>

      <rapid-integration-section class="mt-5 mb-5"/>

      <vue-docs-section class="mt-4 mb-0"/>
    </div>

    <home-page-footer/>
  </div>
</template>

<script>
    import InfoCards from "./home/InfoCards";
    import DashboardSection from "./home/DashboardSection";
    import UserDisplaySection from "./home/UserDisplaySection";
    import RapidIntegrationSection from "./home/RapidIntegrationSection";
    import VueDocsSection from "./home/VueDocsSection";
    import HomePageFooter from "./home/HomePageFooter";
    import HomePageHeader from "./home/HomePageHeader";
    export default {
        name: "HomePage.vue",
        components: {
            HomePageHeader,
            HomePageFooter,
            VueDocsSection, RapidIntegrationSection, UserDisplaySection, DashboardSection, InfoCards}
    }
</script>

<style scoped>
    section {
        padding-top: 1rem;
    }
</style>
