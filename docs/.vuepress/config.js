import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from 'vuepress/utils'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
const __dirname = import.meta.dirname || getDirname(import.meta.url)
import { searchPlugin } from '@vuepress/plugin-search'

const videosJson = require('./components/videos/skilltree-training-videos.json');

/**
 * Customize docs at build time
 *   export SKILLS_DOCS_CONFIG="<props>" && npm run docs:build
 *
 * for example:
 *   export SKILLS_DOCS_CONFIG="'passAuthInstallOnly=true,skillTreeServiceUrl=https://myverycoolsite.com,removeProgressAndRankingInstallNote=true" && npm run docs:build
 *
 * Options:
 *  docsTitle=New Title :  replaces the title on top left of the header
 *  pkiAuthInstallOnly=true : docs for pki-based SkillTree install (passAuthInstallOnly must be false)
 *  passAuthInstallOnly=true : docs for pass-auth-based SkillTree install (pkiAuthInstallOnly must be false)
 *  skillTreeServiceUrl=https://myverycoolsite.com : remove Install Guide; replaces all occurences of http://localhost:8080 with the provided url
 *  removeProgressAndRankingInstallNote=true : removes installation note in Progress and Ranking section; set this to true if the install enables Progress and Ranking views
 *  removeProgressAndRankingPageFromDashboardUserGuide=true: remove Progress and Ranking section if Progress and Ranking views are disabled
 *  removeContributionsGuide=true: remove Contribution Guide form docs
 *  noExternalLinks=true: there will be no external links in the docs
 *  removeDocsForRootRole=true: remove docs for root role
 */

let removeInstallGuide = false;
let removeProgressAndRankingPageFromDashboardUserGuide = false;
let removeProgressAndRankingInstallNote = false;
let removeContributionsGuide = false;
let removeDocsForRootRole = false;

let removeAuthPageFromIntegrationGuide = false;
let pkiAuthInstallOnly = false;
let passAuthInstallOnly = false;
const skillTreeServiceUrlDefaultValue = 'http://localhost:8080';
let skillTreeServiceUrl = skillTreeServiceUrlDefaultValue;
let skillTreeServiceUrlProvided = false;
let docsTitle = 'SkillTree Docs';
let noExternalLinks = false;
let installTypeProp = 'form';

const confValue = process.env.SKILLS_DOCS_CONFIG;
console.log(`SKILLS_DOCS_CONFIG: ${JSON.stringify(confValue, null, 2)}`);
if (confValue) {
    const confVals = confValue.split(',');
    confVals.forEach((conf) => {
        const keyVal = conf.split('=');
        const key = keyVal[0];
        const val = keyVal[1];
        console.log(`${key} => ${val}`);

        if (key === 'removeInstallGuide' && val === 'true') {
            removeInstallGuide = true;
        } else if (key === 'removeProgressAndRankingInstallNote' && val === 'true') {
            removeProgressAndRankingInstallNote = true;
        } else if (key === 'removeProgressAndRankingPageFromDashboardUserGuide' && val === 'true') {
            removeProgressAndRankingPageFromDashboardUserGuide = true;
        } else if (key === 'passAuthInstallOnly' && val === 'true') {
            passAuthInstallOnly = true;
        } else if (key === 'pkiAuthInstallOnly' && val === 'true') {
            pkiAuthInstallOnly = true;
            removeAuthPageFromIntegrationGuide = true;
        } else if (key === 'skillTreeServiceUrl') {
            skillTreeServiceUrl = val;
            skillTreeServiceUrlProvided = true;
            removeInstallGuide = true;
        } else if (key === 'docsTitle') {
            docsTitle = val;
        } else if (key === 'installType') {
            installTypeProp = val;
        } else if (key === 'removeContributionsGuide' && val === 'true') {
            removeContributionsGuide = true;
        } else if (key === 'noExternalLinks' && val === 'true') {
            noExternalLinks = true;
        } else if (key === 'removeDocsForRootRole' && val === 'true') {
            removeDocsForRootRole = true;
        }
    })
}

const showDocsForRootRole = !removeDocsForRootRole;

if (pkiAuthInstallOnly && passAuthInstallOnly) {
    throw '\n ----- \n ----- \n !!!!!! CONFIG ERROR: Can no have both pkiAuthInstallOnly=false and passAuthInstallOnly=false !!!!!!\n -----\n ----- \n'
}

let nav = [
    { text: 'Overview', link: '/overview/' },
    { text: 'Install Guide', link: '/dashboard/install-guide/' },
    { text: 'Admin User Guide', link: '/dashboard/user-guide/' },
    { text: 'Integration Guide', link: '/skills-client/' },
    { text: 'Contribute', link: '/contribution/' },
];

let sidebar = [ { text: 'Overview', link: '/overview/', collapsible: true }];
if (videosJson.length > 0) {
    console.log('Adding video sections because video meta file contains data');
    sidebar.push('/videos/');
}

sidebar = sidebar.concat([{
        text: 'Install Guide',
        collapsible: true,
        children: [
            '/dashboard/install-guide/',
            '/dashboard/install-guide/quickStart',
            '/dashboard/install-guide/distributions',
            '/dashboard/install-guide/devInstall',
            '/dashboard/install-guide/prodInstall',
            '/dashboard/install-guide/config',
            '/dashboard/install-guide/installModes',
        ]
    }, {
        text: 'Admin User Guide',
        collapsible: true,
        children: [
            '/dashboard/user-guide/',
            '/dashboard/user-guide/projects',
            '/dashboard/user-guide/subjects',
            '/dashboard/user-guide/skills',
            '/dashboard/user-guide/self-reporting',
            '/dashboard/user-guide/skills-catalog',
            '/dashboard/user-guide/skills-groups',
            '/dashboard/user-guide/rich-text-editor',
            '/dashboard/user-guide/quizzes-and-surveys',
            '/dashboard/user-guide/admin-groups',
            '/dashboard/user-guide/badges',
            '/dashboard/user-guide/learning-path',
            '/dashboard/user-guide/progress-and-ranking',
            '/dashboard/user-guide/icons',
            '/dashboard/user-guide/levels',
            '/dashboard/user-guide/users',
            '/dashboard/user-guide/metrics',
            '/dashboard/user-guide/notifications',
            '/dashboard/user-guide/inception',
            '/dashboard/user-guide/contact-admins',
            '/dashboard/user-guide/settings',
            '/dashboard/user-guide/accessibility',
        ]
    }, {
        text: 'Training Participation Guide',
        collapsible: true,
        children: [
            '/training-participation/',
            '/training-participation/training-portfolio',
            '/training-participation/take-training',
            '/training-participation/accessibility',
        ]
    }, {
        text: 'Integration Guide',
        collapsible: true,
        children: [
            '/skills-client/',
            '/skills-client/js',
            '/skills-client/auth',
            '/skills-client/endpoints',
            '/skills-client/legacy',
        ]
    }, {
        text: 'Open Source Contributions',
        collapsible: true,
        children: [
            '/contribution/',
            '/contribution/architecture.md',
            '/contribution/devEnv.md',
        ]
    }, {
        text: 'Release Notes',
        collapsible: true,
        sidebarDepth: 3,
        children: [
            '/release-notes/',
            '/release-notes/skills-service.md',
            '/release-notes/skills-client.md',
        ]
    }
]);

if (removeDocsForRootRole) {
    const dashboardGuide = sidebar.find((item) => item.text === 'Admin User Guide');
    dashboardGuide.children = dashboardGuide.children.filter((item) => !item.endsWith('contact-admins'))
}
if (removeInstallGuide) {
    const toFilter = 'Install Guide';
    nav = nav.filter((item) => item.text !== toFilter);
    sidebar = sidebar.filter((item) => item.text !== toFilter);
}
if (removeProgressAndRankingPageFromDashboardUserGuide) {
    const dashboardGuide = sidebar.find((item) => item.text === 'Admin User Guide');
    dashboardGuide.children = dashboardGuide.children.filter((item) => !item.endsWith('progress-and-ranking'))
}
if (removeAuthPageFromIntegrationGuide) {
    const dashboardGuide = sidebar.find((item) => item.text === 'Integration Guide');
    dashboardGuide.children = dashboardGuide.children.filter((item) => !item.endsWith('auth'))
}
if (removeContributionsGuide) {
    nav = nav.filter((item) => item.text !== 'Contribute');
    sidebar = sidebar.filter((item) => item.text !== 'Open Source Contributions');
}
if (pkiAuthInstallOnly) {
    // remove Auth section all together, it's not adding any value to pki-only install
    const integrationGuide = sidebar.find((item) => item.text === 'Integration Guide');
    integrationGuide.children = integrationGuide.children.filter((item) => !item.endsWith('auth'))
}

console.log(`Sidebar object:\n${JSON.stringify(sidebar, null, 2)}`);

export default defineUserConfig({
    bundler: viteBundler(),
    port: 9999,
    lang: 'en-US',
    description: 'Innovative approach to application training!',
    head: [
        ['link', { rel: 'icon', href: '/img/skilltree.ico' }]
    ],
    markdown: {
        toc: {
            includeLevel: [2, 3, 4, 5],
        },
    },
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
        backToTopPlugin({ progress: false}),
        searchPlugin({
            isSearchable: (page) => {
                if (removeContributionsGuide && page.path.startsWith('/contribution')) {
                    return false;
                }
                if (removeInstallGuide && page.path.startsWith('/dashboard/install-guide')) {
                    return false;
                }

                if (page.path.startsWith('/skills-client/legacy.html')) {
                    return false
                }
                return true
            },
            getExtraFields: (page) => page.frontmatter.tags ?? [],
        }),
    ],
    theme: defaultTheme({
        contributors: false,
        navbar: nav,
        sidebar,
        sidebarDepth: 4,
        container: 'fluid',
        logo: '/img/skilltree_logo_v1.svg',
        logoDark: '/img/skilltree_logo_v1_dark_mode.svg',
        logoAlt: 'SkillTree Home',
        lastUpdated: true,
        visibility: {
            progressAndRankingInstallNote: !removeProgressAndRankingInstallNote,
            passwordAuthInstall: !pkiAuthInstallOnly,
            pkiAuthInstall: !passAuthInstallOnly,
            passAuthInstallOnly: passAuthInstallOnly,
            pkiAuthInstallOnly: pkiAuthInstallOnly,
            allAuthModes: !pkiAuthInstallOnly && !passAuthInstallOnly,
            skillTreeServiceUrl: skillTreeServiceUrl && skillTreeServiceUrl.length > 0 && skillTreeServiceUrlDefaultValue !== skillTreeServiceUrl,
            showInstallGuide: !removeInstallGuide,
            showContributionGuide: !removeContributionsGuide,
            showDocsForRootRole,
            noExternalLinks,
        },
        installType: installTypeProp,
        skillTreeServiceUrl,
        themePlugins: {
            git: false,
        }
    }),
})
