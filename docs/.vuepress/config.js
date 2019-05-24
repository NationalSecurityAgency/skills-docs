module.exports = {
    base: '/skills/skills-docs/',
    dest: 'public',
    title: 'Skills as a Service Docs',
    description: 'Skills as a Service Documentation',
    themeConfig: {
        // logo: '/assets/img/logo.png',
        nav: [
            { text: 'Overview', link: '/' },
            { text: 'Dashboard User Guide', link: '/dashboard/user-guide/' },
            { text: 'Quick Start', link: '/quick-start/' },
        ],
        // displayAllHeaders: true,
        sidebarDepth: 2,
        sidebar: [
            '/',
            '/quick-start/',
            '/dashboard/install-guide',
            {
                title: 'Dashboard User Guide',
                collapsable: true,
                children: [
                    '/dashboard/user-guide/',
                    '/dashboard/user-guide/projects',
                    '/dashboard/user-guide/subjects',
                    '/dashboard/user-guide/skills.md',
                    '/dashboard/user-guide/levels.md',
                    '/dashboard/user-guide/badges.md',
                    '/dashboard/user-guide/dependencies.md',
                    '/dashboard/user-guide/cross-project-deps.md',
                    '/dashboard/user-guide/users.md',
                    '/dashboard/user-guide/access-management.md',
                    '/dashboard/user-guide/root-user.md',
                    '/dashboard/user-guide/programmatic-interface.md',
                ]
            },
            '/skills-display/',
            '/report-events/'

        ],
        lastUpdated: 'Last Updated',
    }
}
