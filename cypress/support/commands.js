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
        disableTimersAndAnimations: false,
        ...options
    }
    if (selector) {
        cy.get(selector).screenshot(snapLoc, updatedOptions)
    } else {
        cy.screenshot(snapLoc, updatedOptions)
    }
});

Cypress.Commands.add('login', () => {
    cy.visit('/')
    cy.get('[id="username"]').type('bill@email.org');
    cy.get('[id="inputPassword"]').type('password');
    cy.get('[data-cy="login"]').should('be.enabled')
    cy.get('[data-cy="login"]').click({force: true});
    cy.contains('Progress And Rankings');
});

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
        const trigger = autoCompleteDropdown ? '[data-pc-name="dropdownbutton"]' : '[data-pc-section="trigger"]';
        const itemToSelect = `${selector} ${trigger}`;
        cy.get(itemToSelect).click();
    }
    cy.get('[data-pc-section="item"]').contains(item).click();
})