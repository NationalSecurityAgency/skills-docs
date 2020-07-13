module.exports = {
    port: 9999,
    title: 'SkillTree Docs',
    description: 'Innovative approach to application training!',
    base: '/skills-docs/',
    head: [
        ['link', { rel: 'icon', href: '/img/skills.ico' }]
    ],
    markdown: {
        toc: {
            includeLevel: [2, 3, 4, 5],
        },
    },
    themeConfig: {
        // logo: '/assets/img/logo.png',
        nav: [
            { text: 'Overview', link: '/overview/' },
            { text: 'Install Guide', link: '/dashboard/install-guide/' },
            { text: 'Dashboard User Guide', link: '/dashboard/user-guide/' },
            { text: 'Integration Guide', link: '/skills-client/' },
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
                    '/dashboard/user-guide/projects',
                    '/dashboard/user-guide/subjects',
                    '/dashboard/user-guide/skills',
                    '/dashboard/user-guide/levels',
                    '/dashboard/user-guide/badges',
                    '/dashboard/user-guide/icons',
                    '/dashboard/user-guide/dependencies',
                    '/dashboard/user-guide/users',
                    '/dashboard/user-guide/metrics',
                    '/dashboard/user-guide/inception',
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
        ],
        lastUpdated: 'Last Updated',
        home: true,
        installType: 'pki',
    }
}
