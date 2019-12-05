<template>
    <div class="my-3">

        <b-tabs content-class="mt-3">
            <b-tab v-for="(tabItem) of tabItems" :key="tabItem.name">
                <div class="text-right text-secondary" style="font-size: 0.8rem;">Visit to learn about this mode:
                    <a :href="tabItem.helpUrl" target="_blank"><span v-html="tabItem.name"></span> <i class="fas fa-external-link-alt"/></a></div>
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
                       name: '<b>PKI Auth</b> Install',
                       path: this.pkiPath,
                       icon: 'fas fa-key',
                       helpUrl: '/dashboard/install-guide/installModes.html#pki-auth-mode',
                   },
                   {
                       name: '<b>Pass Auth</b> Install',
                       path: this.formPath,
                       icon: 'fab fa-wpforms',
                       helpUrl: '/dashboard/install-guide/installModes.html#pass-auth-mode',
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
