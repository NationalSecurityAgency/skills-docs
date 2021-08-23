const replace = require('replace-in-file');
var rimraf = require("rimraf");


const docsConf = process.env.SKILLS_DOCS_CONFIG;
if (docsConf && docsConf.length > 0) {
    console.log(`Provided conifg: ${docsConf}`);

    const options = {
        files: 'docs/.vuepress/config.js',
        from: 'injectedConf',
        to: docsConf,
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
            rimraf.sync("docs/dashboard/install-guide");
        }
    }
}