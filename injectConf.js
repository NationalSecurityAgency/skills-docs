const replace = require('replace-in-file');
var rimraf = require("rimraf");


const docsConf = process.env.SKILLS_DOCS_CONFIG;
if (docsConf && docsConf.length > 0) {
    console.log(`Provided conifg: ${docsConf}`);

    const options = {
        files: 'docs/.vuepress/config.js',
        from: /confValue[\s]=[\s]+'injectedConf'/,
        to: `confValue = '${docsConf}'`,
    };

    try {
        const results = replace.sync(options);
        console.log('Replacement results:', results);
    } catch (error) {
        console.error('Error occurred:', error);
    }

    const serviceUrlKey = 'skillTreeServiceUrl';
    if (docsConf.includes(serviceUrlKey)) {
        const serviceUrlConf = docsConf.split(',').find((item) => item.includes(serviceUrlKey));
        const serviceURL = serviceUrlConf.split('=')[1];
        if (serviceURL && serviceURL.length > 0) {
            console.log(`Replacing skillTreeServiceUrl to [${serviceURL}]`)

            const updateServiceUrlOptions = {
                files: [
                    'docs/skills-client/*.md',
                    'docs/skills-client/**/*.md',
                ],
                from: 'http://localhost:8080',
                to: serviceURL,
            };
            try {
                const results = replace.sync(updateServiceUrlOptions);
                console.log('Replaced skillTreeServiceUrl:', results);
            } catch (error) {
                console.error('Failed to replace skillTreeServiceUrl:', error);
            }

            // remove install guide
            console.log('removing Install Guide');
            rimraf.sync("docs/dashboard/install-guide");
        }
    }

    if (docsConf.includes('pkiAuthInstallOnly=true')) {
        // remove auth page
        console.log('removing Auth page');
        rimraf.sync("docs/skills-client/auth.md");
        rimraf.sync("docs/skills-client/auth/authForm.md");
        rimraf.sync("docs/skills-client/auth/endpointsFormPKI.md");
        rimraf.sync("docs/skills-client/auth/reportSkillJavaExampleForm.md");
    }

    if (docsConf.includes('removeProgressAndRankingPageFromDashboardUserGuide=true')) {
        // remove project and ranking page
        console.log('removing Progress and Ranking Page');
        rimraf.sync("docs/dashboard/user-guide/progress-and-ranking.md");
    }

    if (docsConf.includes('removeContributionsGuide=true')) {
        // remove project and ranking page
        console.log('removing Contribution Guide Pages');
        rimraf.sync("docs/contribution");
    }


}