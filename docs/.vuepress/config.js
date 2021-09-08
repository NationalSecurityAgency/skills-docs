const fs = require('fs');
const fetch = require('node-fetch');

const accessibility_score = 'https://raw.githubusercontent.com/NationalSecurityAgency/skills-service/badges/master/average_accessibility_score.svg';
function dli() {
    return new Promise(resolve => {
        fetch(accessibility_score,
          { mode: 'no-cors' })
          .then(response => response.blob())
          .then(blob => {
              blob.arrayBuffer().then((arrayBuf) => {
                  const buffer = Buffer.from(arrayBuf);
                  fs.writeFile('docs/.vuepress/public/img/average_accessibility_score.svg', buffer, () => {
                      console.log('accessibility score saved!');
                      resolve();
                  });
              });
          });
    });
}

async function downloadIcon(){
    console.log('downloading latest average_accessibility_score.svg from github');
    await dli();
}

downloadIcon();

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
 */

let removeInstallGuide = false;
let removeProgressAndRankingPageFromDashboardUserGuide = false;
let removeProgressAndRankingInstallNote = false;
let removeContributionsGuide = false;

let removeAuthPageFromIntegrationGuide = false;
let pkiAuthInstallOnly = false;
let passAuthInstallOnly = false;
const skillTreeServiceUrlDefaultValue = 'http://localhost:8080';
let skillTreeServiceUrl = skillTreeServiceUrlDefaultValue;
let skillTreeServiceUrlProvided = false;
let docsTitle = 'SkillTree Docs';

const confValue = 'injectedConf';
if (confValue && confValue !== 'injectedConf') {
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
        } else if (key === 'removeContributionsGuide' && val === 'true') {
            removeContributionsGuide = true;
        }
    })
}


if (pkiAuthInstallOnly && passAuthInstallOnly) {
    throw '\n ----- \n ----- \n !!!!!! CONFIG ERROR: Can no have both pkiAuthInstallOnly=false and passAuthInstallOnly=false !!!!!!\n -----\n ----- \n'
}

let nav = [
    { text: 'Overview', link: '/overview/' },
    { text: 'Install Guide', link: '/dashboard/install-guide/' },
    { text: 'Dashboard User Guide', link: '/dashboard/user-guide/' },
    { text: 'Integration Guide', link: '/skills-client/' },
    { text: 'Contribute', link: '/contribution/' },
];

let sidebar = [
    '/overview/',
    {
        title: 'Install Guide',
        collapsable: true,
        children: [
            '/dashboard/install-guide/',
            '/dashboard/install-guide/quickStart',
            '/dashboard/install-guide/distributions',
            '/dashboard/install-guide/devInstall',
            '/dashboard/install-guide/prodInstall',
            '/dashboard/install-guide/config',
            '/dashboard/install-guide/database',
            '/dashboard/install-guide/installModes',
        ]
    }, {
        title: 'Dashboard User Guide',
        collapsable: true,
        children: [
            '/dashboard/user-guide/',
            '/dashboard/user-guide/projects',
            '/dashboard/user-guide/subjects',
            '/dashboard/user-guide/skills',
            '/dashboard/user-guide/self-reporting',
            '/dashboard/user-guide/levels',
            '/dashboard/user-guide/badges',
            '/dashboard/user-guide/icons',
            '/dashboard/user-guide/dependencies',
            '/dashboard/user-guide/users',
            '/dashboard/user-guide/metrics',
            '/dashboard/user-guide/issues',
            '/dashboard/user-guide/progress-and-ranking',
            '/dashboard/user-guide/inception',
            '/dashboard/user-guide/contact-admins',
            '/dashboard/user-guide/settings',
        ]
    }, {
        title: 'Integration Guide',
        collapsable: true,
        children: [
            '/skills-client/',
            '/skills-client/vuejs',
            '/skills-client/react',
            '/skills-client/angular',
            '/skills-client/js',
            '/skills-client/auth',
            '/skills-client/endpoints',
        ]
    }, {
        title: 'Open Source Contributions',
        collapsable: true,
        children: [
            '/contribution/',
            '/contribution/architecture.md',
            '/contribution/devEnv.md',
        ]
    }, {
        title: 'Release Notes',
        collapsable: true,
        children: [
            '/release-notes/',
            '/release-notes/skills-client.md',
            '/release-notes/skills-service.md',
        ]
    }
];

if (removeInstallGuide) {
    const toFilter = 'Install Guide';
    nav = nav.filter((item) => item.text !== toFilter);
    sidebar = sidebar.filter((item) => item.title !== toFilter);
}
if (removeProgressAndRankingPageFromDashboardUserGuide) {
    const dashboardGuide = sidebar.find((item) => item.title === 'Dashboard User Guide');
    dashboardGuide.children = dashboardGuide.children.filter((item) => !item.endsWith('progress-and-ranking'))
}
if (removeAuthPageFromIntegrationGuide) {
    const dashboardGuide = sidebar.find((item) => item.title === 'Integration Guide');
    dashboardGuide.children = dashboardGuide.children.filter((item) => !item.endsWith('auth'))
}
if (removeContributionsGuide) {
    nav = nav.filter((item) => item.text !== 'Contribute');
    sidebar = sidebar.filter((item) => item.title !== 'Open Source Contributions');
}

console.log(`Sidebar object:\n${JSON.stringify(sidebar, null, 2)}`);

module.exports = {
    port: 9999,
    title: docsTitle,
    description: 'Innovative approach to application training!',
    base: '/skills-docs/',
    head: [
        ['link', { rel: 'icon', href: '/img/skilltree.ico' }]
    ],
    markdown: {
        toc: {
            includeLevel: [2, 3, 4, 5],
        },
    },
    themeConfig: {
        nextLinks: false,
        prevLinks: false,
        nav,
        // displayAllHeaders: true,
        sidebarDepth: 2,
        sidebar,
        lastUpdated: 'Last Updated',
        home: true,
        installType: 'form',
        visibility: {
            progressAndRankingInstallNote: !removeProgressAndRankingInstallNote,
            passwordAuthInstall: !pkiAuthInstallOnly,
            pkiAuthInstall: !passAuthInstallOnly,
            passAuthInstallOnly: passAuthInstallOnly,
            pkiAuthInstallOnly: pkiAuthInstallOnly,
            allAuthModes: !pkiAuthInstallOnly && !passAuthInstallOnly,
            skillTreeServiceUrl: skillTreeServiceUrl && skillTreeServiceUrl.length > 0 && skillTreeServiceUrlDefaultValue !== skillTreeServiceUrl,
        },
        skillTreeServiceUrl,
    },
}
