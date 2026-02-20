<script setup>
import { ref, computed, onMounted } from 'vue'
import {useThemeData} from "@vuepress/theme-default/client";

const props = defineProps({
  pkiPath: {
    type: String,
    required: true,
  },
  formPath: {
    type: String,
    required: true,
  },
})
const themeData = useThemeData()

const getNavItems = () => {
  let res = [
    {
      name: '<b>PKI Auth</b> Install',
      path: props.pkiPath,
      helpUrl: '/dashboard/install-guide/installModes.html#pki-auth-mode',
      isVisible: false,
    },
    {
      name: '<b>Password Auth</b> Install',
      path: props.formPath,
      helpUrl: '/dashboard/install-guide/installModes.html#password-auth-mode',
      isVisible: false,
    },
  ];

  if (themeData.value.installType === 'form') {
    res = res.reverse();
  }

  res[0].isVisible = true
  return res;
}
const tabItems = ref(getNavItems())

const updateNavItems = (visibleName) => {
  tabItems.value = tabItems.value.map((item) => {
    item.isVisible = item.name === visibleName
    return item
  })
}
const passwordAuthInstallVisible = computed(()=> themeData.value.visibility.passwordAuthInstall)
const pkiAuthInstallVisible = computed(()=> themeData.value.visibility.pkiAuthInstall)
const showTabs = computed(() => passwordAuthInstallVisible.value && pkiAuthInstallVisible.value)
const currentSelected = computed (() => tabItems.value.find(item => item.isVisible))
const currentPath = computed (() => currentSelected.value.path)
</script>


<template>
    <div>
      <div v-if="showTabs">
        <ul class="tabs">
          <li v-for="(tabItem, index) in tabItems" :key="tabItem.name">
            <button @click="updateNavItems(tabItem.name)" class="link-button"
               :class="{ 'active': tabItem.isVisible }"><span v-html="tabItem.name" /></button>
          </li>
        </ul>
        <div style="text-align: right; margin-bottom: 0.2rem;">
          Visit to learn about this mode:  <a :href="$withBase(currentSelected.helpUrl)"
           target="_blank"><span v-html="currentSelected.name"></span></a>
        </div>

        <Content id="tab1" :path="currentPath"/>
      </div>
      <div v-else>
        <Content v-if="passwordAuthInstallVisible" :path="formPath"/>
        <Content v-if="pkiAuthInstallVisible" :path="pkiPath"/>
      </div>
    </div>
</template>

<style scoped>
.tabs {
  list-style: none;
  margin: 2rem 0 0 0;
  padding: 0;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.tabs li {
  margin-right: 20px;
}
.tabs button {
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 5px;
}
.tabs button.active {
  border-top: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
  border-left: 1px solid #bdbdbd;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom: 1px solid #fff !important;
  margin-bottom: -1px;
}

.tabs button:hover {
  border-top: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
  border-left: 1px solid #bdbdbd;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

.link-button {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
}

</style>

