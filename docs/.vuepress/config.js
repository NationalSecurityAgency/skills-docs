module.exports = {
    title: 'Skills as a Service',
    description: 'Innovative approach for application training!',
    themeConfig: {
        // logo: '/assets/img/logo.png',
        nav: [
            { text: 'Overview', link: '/overview/' },
            { text: 'Dashboard User Guide', link: '/dashboard/user-guide/' },
            { text: 'Quick Start', link: '/quick-start/' },
        ],
        // displayAllHeaders: true,
        sidebarDepth: 2,
        sidebar: [
            '/overview/',
            '/quick-start/',
            '/dashboard/install-guide',
            {
                title: 'Dashboard User Guide',
                collapsable: true,
                children: [
                    '/dashboard/user-guide/',
                    '/dashboard/user-guide/projects',
                    '/dashboard/user-guide/subjects',
                    '/dashboard/user-guide/skills',
                    '/dashboard/user-guide/skills-versioning',
                    '/dashboard/user-guide/levels',
                    '/dashboard/user-guide/badges',
                    '/dashboard/user-guide/dependencies',
                    '/dashboard/user-guide/cross-project-deps',
                    '/dashboard/user-guide/users',
                    '/dashboard/user-guide/access-management',
                    '/dashboard/user-guide/root-user',
                    '/dashboard/user-guide/programmatic-interface',
                ]
            },
            '/skills-display/',
            '/report-events/'

        ],
        lastUpdated: 'Last Updated',
        home: true,
    }
}
