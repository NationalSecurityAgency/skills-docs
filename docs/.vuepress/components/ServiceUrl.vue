<template>
    <a :href="serviceUrl" target="_blank">{{ serviceUrl }} <i class="fas fa-external-link-alt"></i></a>
</template>

<script>
    export default {
        name: "ServiceUrl",
        computed: {
            serviceUrl() {
                return this.$themeConfig.skillTreeServiceUrl;
            },
        }
    }
</script>

<style scoped>

</style>