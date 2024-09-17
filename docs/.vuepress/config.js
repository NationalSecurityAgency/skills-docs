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
let noExternalLinks = false;

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
        } else if (key === 'noExternalLinks' && val === 'true') {
            noExternalLinks = true;
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

let sidebar = ['/overview/'];
if (videosJson.length > 0) {
    console.log('Adding video sections because video meta file contains data');
    sidebar.push('/videos/');
}

sidebar = sidebar.concat([{
        title: 'Install Guide',
        collapsable: true,
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
        title: 'Dashboard User Guide',
        collapsable: true,
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
            '/dashboard/user-guide/badges',
            '/dashboard/user-guide/learning-path',
            '/dashboard/user-guide/progress-and-ranking',
            '/dashboard/user-guide/icons',
            '/dashboard/user-guide/levels',
            '/dashboard/user-guide/users',
            '/dashboard/user-guide/metrics',
            '/dashboard/user-guide/issues',
            '/dashboard/user-guide/inception',
            '/dashboard/user-guide/contact-admins',
            '/dashboard/user-guide/settings',
        ]
    }, {
        title: 'Integration Guide',
        collapsable: true,
        children: [
            '/skills-client/',
            '/skills-client/js',
            '/skills-client/auth',
            '/skills-client/endpoints',
            '/skills-client/legacy',
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
            '/release-notes/skills-service.md',
            '/release-notes/skills-client.md',
        ]
    }
]);

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
if (pkiAuthInstallOnly) {
    // remove Auth section all together, it's not adding any value to pki-only install
    const integrationGuide = sidebar.find((item) => item.title === 'Integration Guide');
    integrationGuide.children = integrationGuide.children.filter((item) => !item.endsWith('auth'))
}

console.log(`Sidebar object:\n${JSON.stringify(sidebar, null, 2)}`);

module.exports = {
    port: 9999,
    title: docsTitle,
    description: 'Innovative approach to application training!',
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
            showInstallGuide: !removeInstallGuide,
            showContributionGuide: !removeContributionsGuide,
            noExternalLinks,
        },
        skillTreeServiceUrl,
    },
}
