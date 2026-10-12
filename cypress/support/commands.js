// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cy.request does not add Axios's X-XSRF-TOKEN header automatically. Keep the
// cookie and header in sync for requests to the Skills Service, including
// registration and login requests made before the browser visits the dashboard.
Cypress.Commands.overwrite('request', (originalFn, ...args) => {
    const options = typeof args[0] === 'object'
        ? { ...args[0] }
        : typeof args[1] === 'string'
            ? { method: args[0], url: args[1], body: args[2] }
            : { url: args[0], body: args[1] };
    const method = (options.method || 'GET').toUpperCase();
    const url = new URL(options.url, Cypress.config('baseUrl'));
    const backend = new URL(Cypress.config('baseUrl'));
    const isSkillsService = url.origin === backend.origin ||
        (url.hostname === backend.hostname && url.port === '8080');

    if (!isSkillsService || ['GET', 'HEAD', 'OPTIONS', 'TRACE'].includes(method)) {
        return originalFn(...args);
    }

    return cy.getCookie('XSRF-TOKEN').then((cookie) => {
        if (cookie) {
            return originalFn({
                ...options,
                headers: { ...options.headers, 'X-XSRF-TOKEN': cookie.value },
            });
        }

        // The first request can be registration, logout, or login. A GET loads
        // the token without requiring an authenticated session.
        return cy.request({ url: `${url.origin}/app/userInfo` })
            .then(() => cy.getCookie('XSRF-TOKEN').should('exist'))
            .then((xsrfCookie) => originalFn({
                ...options,
                headers: { ...options.headers, 'X-XSRF-TOKEN': xsrfCookie.value },
            }));
    });
});

Cypress.Commands.add('snap', (name, selector = null, options = {}) => {
    cy.wait(1500);
    let snapLoc = name;
    if (Cypress.currentTest.titlePath[0].includes('Admin:')) {
        snapLoc = `admin/${snapLoc}`
    } else if (Cypress.currentTest.titlePath[0].includes('Progress and Ranking:')) {
        snapLoc = `progress-and-ranking/${snapLoc}`
    }
    cy.log(`Screenshot: ${snapLoc} checked [${Cypress.currentTest.titlePath[0]}]`)
    const updatedOptions = {
        overwrite: true,
        disableTimersAndAnimations: true,
        ...options
    }
    if (selector) {
        cy.get(selector).screenshot(snapLoc, updatedOptions)
    } else {
        cy.screenshot(snapLoc, updatedOptions)
    }
});

Cypress.Commands.add('login', (username = 'bill@email.org') => {
    cy.visit('/')
    cy.get('[id="username"]').type(username);
    cy.get('[id="inputPassword"]').type('password');
    cy.get('[data-cy="login"]').should('be.enabled')
    cy.get('[data-cy="login"]').click({force: true});
    cy.contains('Progress And Rankings');
});

Cypress.Commands.add('saveEmailServer', () => {
    cy.log('configuring email');
    cy.request({
        method: 'POST',
        url: '/root/saveEmailSettings',
        body: {
            publicUrl: 'http://localhost:8082/',
            fromEmail: 'noreploy@skilltreeemail.org',
            host: 'localhost',
            port: 1025,
            'protocol': 'smtp'
        },
    });
})
Cypress.Commands.add('clickNav', (navName) => {
    cy.get(`[data-cy="nav-${navName}"]`).click();
});

Cypress.Commands.add("clientDisplay", (firstVisit = false, project = 'movies') => {
    cy.intercept(`/api/projects/${project}/rank`).as(`getRank${project}`)
    cy.intercept(`/api/projects/${project}/pointHistory?**`).as(`getPointsHistory${project}`)
    if (firstVisit) {
        cy.wait(`@getRank${project}`)
        cy.wait(`@getPointsHistory${project}`)
    }
    return cy.wrapIframe();
});

Cypress.Commands.add('wrapIframe', () => {
    return cy.get('iframe')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
});

Cypress.Commands.add("cdClickSubj", (subjIndex, expectedTitle) => {
    cy.wrapIframe().find(`.user-skill-subject-tile:nth-child(${subjIndex + 1})`).first().click();
    if (expectedTitle) {
        cy.wrapIframe().contains(expectedTitle);
    }
});

Cypress.Commands.add("addToMyProjects", (projId) => {
    cy.request('POST', `/api/myprojects/${projId}`, {});
});



Cypress.Commands.add("register", (user, pass, first, last) => {
    return cy.request(`/app/users/validExistingDashboardUserId/${user}`)
        .then((response) => {
            if (response.body !== true) {
                cy.log(`Creating app user [${user}]`)
                cy.request('PUT', '/createAccount', {
                    firstName: first,
                    lastName: last,
                    email: user,
                    password: pass,
                });
                cy.request('POST', '/logout');
            } else {
                cy.log(`User [${user}] already exist`)
            }
        });
});

Cypress.Commands.add("createProject", (projNum = 1, overrideProps = {}) => {
    cy.request('POST', `/app/projects/proj${projNum}/`, Object.assign({
        projectId: `proj${projNum}`,
        name: `This is project ${projNum}`
    }, overrideProps));
});

Cypress.Commands.add('selectItem', (selector, item, openPicker = true, autoCompleteDropdown = false) => {
    if (openPicker) {
        const trigger = autoCompleteDropdown ? '[data-pc-name="dropdownbutton"]' : '[data-pc-section="dropdownicon"]';
        const itemToSelect = `${selector} ${trigger}`;
        cy.get(itemToSelect).click();
    }
    cy.get('[data-pc-section="overlay"] [data-pc-section="optionlabel"]').contains(item).click();
})

Cypress.Commands.add('selectSkill', (selector, skillId, searchString = '', projId='proj1') => {
    cy.get(selector).blur({force: true})
    cy.get(selector).click()
    if (searchString) {
        cy.get(selector).type(`{selectall}${searchString}`)
    }
    cy.get(`[data-cy="skillsSelectionItem-${projId}-${skillId}"]`).click()
})