module.exports = {
    title: 'Skills as a Service',
    description: 'Innovative approach to application training!',
    markdown: {
        toc: {
            includeLevel: [2, 3, 4, 5],
        },
    },
    themeConfig: {
        // logo: '/assets/img/logo.png',
        nav: [
            { text: 'Overview', link: '/overview/' },
            { text: 'Dashboard User Guide', link: '/dashboard/user-guide/' },
            { text: 'Integration Guide', link: '/skills-client/' },
            { text: 'Quick Start', link: '/quick-start/' },
            { text: 'Common Troubleshooting', link: '/common-troubleshooting/' },
        ],
        // displayAllHeaders: true,
        sidebarDepth: 2,
        sidebar: [
            '/overview/',
            '/quick-start/',
            '/dashboard/install-guide',
            '/common-troubleshooting/',
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
                    '/dashboard/user-guide/globalBadges',
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
                    '/skills-client/display',
                    '/skills-client/authorization',
                    '/skills-client/endpoints',
                ]
            },
        ],
        lastUpdated: 'Last Updated',
        home: true,
    }
}
