<template>
    <div class="my-3">

        <div v-if="passwordAuthInstallVisible && !pkiAuthInstallVisible">
            <import-content :path="this.formPath" class="mt-3"/>
        </div>

        <div v-if="pkiAuthInstallVisible && !passwordAuthInstallVisible">
            <import-content :path="this.pkiPath" class="mt-3"/>
        </div>

        <b-tabs v-if="passwordAuthInstallVisible && pkiAuthInstallVisible" content-class="mt-3">
            <b-tab v-for="(tabItem) of tabItems" :key="tabItem.name">
                <div class="text-right text-secondary" style="font-size: 0.8rem;">Visit to learn about this mode:
                    <a :href="$withBase(tabItem.helpUrl)" target="_blank"><span v-html="tabItem.name"></span> <i class="fas fa-external-link-alt"/></a></div>
                <template v-slot:title>
                    <i :class="tabItem.icon" class="mr-1"></i> <span v-html="tabItem.name"></span>
                </template>
                <import-content :path="tabItem.path" class="mt-3"/>
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
        computed: {
            passwordAuthInstallVisible() {
                return this.$themeConfig.visibility.passwordAuthInstall;
            },
            pkiAuthInstallVisible() {
                return this.$themeConfig.visibility.pkiAuthInstall;
            },
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
                       name: '<b>Password Auth</b> Install',
                       path: this.formPath,
                       icon: 'fab fa-wpforms',
                       helpUrl: '/dashboard/install-guide/installModes.html#password-auth-mode',
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
