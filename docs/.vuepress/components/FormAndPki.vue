<template>
    <div class="my-3">

        <div v-if="passwordAuthInstallVisible && !pkiAuthInstallVisible">
            <import-content :path="this.formPath" class="mt-3"/>
        </div>

        <div v-if="pkiAuthInstallVisible && !passwordAuthInstallVisible">
            <import-content :path="this.pkiPath" class="mt-3"/>
        </div>

      <div v-if="passwordAuthInstallVisible && pkiAuthInstallVisible">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation" v-for="(tabItem, index) of tabItems" :key="tabItem.name">
            <button class="nav-link"
                    :class="{'active': tabItem.isVisible }"
                    :id="`${tabItem.name}-tab`"
                    data-bs-toggle="tab"
                    :data-bs-target="`#${index}-content`"
                    @click="updateNavItems(tabItem.name)"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true">
              <i :class="tabItem.icon" class="mr-1"></i> <span v-html="tabItem.name"/>
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
        <div v-for="(tabItem, index) of tabItems" :key="tabItem.name"
            class="tab-pane fade"
             :class="{'show active': tabItem.isVisible }"
             :id="`${index}-content`"
             role="tabpanel"
             :aria-labelledby="`${tabItem.name}-tab`">
          <div class="text-end text-secondary" style="font-size: 0.8rem;">Visit to learn about this mode:
                                <a :href="$withBase(tabItem.helpUrl)" target="_blank"><span v-html="tabItem.name"></span> <i class="fas fa-external-link-alt"/></a></div>
          <import-content :path="tabItem.path" class="mt-3"/>
        </div>
      </div>
      </div>
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
          updateNavItems(visibleName) {
            this.tabItems = this.tabItems.map((item) => {
              item.isVisible = item.name === visibleName
              return item
            })
          },
            getNavItems() {
               let res = [
                   {
                       name: '<b>PKI Auth</b> Install',
                       path: this.pkiPath,
                       icon: 'fas fa-key',
                       helpUrl: '/dashboard/install-guide/installModes.html#pki-auth-mode',
                       isVisible: false,
                   },
                   {
                       name: '<b>Password Auth</b> Install',
                       path: this.formPath,
                       icon: 'fab fa-wpforms',
                       helpUrl: '/dashboard/install-guide/installModes.html#password-auth-mode',
                       isVisible: false,
                   },
               ];

               if (this.$themeConfig.installType === 'form') {
                   res = res.reverse();
               }

               res[0].isVisible = true
               return res;
            },
        }
    }
</script>

<style scoped>

</style>
