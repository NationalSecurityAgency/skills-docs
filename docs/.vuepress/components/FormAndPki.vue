<template>
    <div class="my-3">
        <b-tabs content-class="mt-3">
            <b-tab v-for="(tabItem) of tabItems" :key="tabItem.name">
                <template v-slot:title>
                    <i :class="tabItem.icon" class="mr-1"></i> <span v-html="tabItem.name"></span>
                </template>
                <import-content :path="tabItem.path"/>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
    export default {
        name: "FormAndPki",
        props: {
            pkiPath: {
                type: String,
                required: true,
            },
            formPath: {
                type: String,
                required: true,
            },
        },
        data() {
            return {
                tabItems: [],
            };
        },
        mounted() {
            this.tabItems = this.getNavItems();
        },
        methods: {
            getNavItems() {
               let res = [
                   {
                       name: '<b>PKI</b> Install',
                       path: this.pkiPath,
                       icon: 'fas fa-key',
                   },
                   {
                       name: '<b>FORM</b> Install',
                       path: this.formPath,
                       icon: 'fab fa-wpforms',
                   },
               ];

               if (this.$themeConfig.installType === 'form') {
                   res = res.reverse();
               }

               return res;
            },
        }
    }
</script>

<style scoped>

</style>
