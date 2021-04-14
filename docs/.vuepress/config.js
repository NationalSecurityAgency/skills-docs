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

module.exports = {
    port: 9999,
    title: 'SkillTree Docs',
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
        nav: [
            { text: 'Overview', link: '/overview/' },
            { text: 'Install Guide', link: '/dashboard/install-guide/' },
            { text: 'Dashboard User Guide', link: '/dashboard/user-guide/' },
            { text: 'Integration Guide', link: '/skills-client/' },
            { text: 'Contribute', link: '/contribution/' },
        ],
        // displayAllHeaders: true,
        sidebarDepth: 2,
        sidebar: [
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
            },
            {
                title: 'Dashboard User Guide',
                collapsable: true,
                children: [
                    '/dashboard/user-guide/',
                    '/dashboard/user-guide/progress-and-ranking',
                    '/dashboard/user-guide/admin-view',
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
                    '/dashboard/user-guide/inception',
                    '/dashboard/user-guide/settings',
                ]
            },
            {
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
                    '/skills-client/troubleshooting',
                ]
            },
            {
                title: 'Open Source Contributions',
                collapsable: true,
                children: [
                    '/contribution/',
                    '/contribution/architecture.md',
                    '/contribution/devEnv.md',
                ]
            },
            {
                title: 'Release Notes',
                collapsable: true,
                children: [
                    '/release-notes/',
                    '/release-notes/skills-client.md',
                    '/release-notes/skills-service.md',
                ]
            },
        ],
        lastUpdated: 'Last Updated',
        home: true,
        installType: 'form',
    }
}
