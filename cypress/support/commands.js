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
import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand();

Cypress.Commands.add('closeToasts', () => {
    cy.get('body').then((body) => {
        if (body.find('header.toast-header').length > 0) {
            cy.get('button.close').click({ multiple: true, force: true });
        }
    });
});

Cypress.Commands.add('snap', (name, selector = null, options = {}) => {
    cy.closeToasts();
    cy.wait(1500);
    if (selector) {
        cy.get(selector).matchImageSnapshot(name, options);
    } else {
        cy.matchImageSnapshot(name, options);
    }
});

Cypress.Commands.add('login', () => {
    cy.visit('/')
    cy.get('[id="username"]').type('bill@email.org');
    cy.get('[id="inputPassword"]').type('password');
    cy.get('[data-cy="login"]').should('be.enabled')
    cy.get('[data-cy="login"]').click({force: true});
    cy.contains('Progress and Ranking');
});

Cypress.Commands.add('clickNav', (navName) => {
    cy.get(`[data-cy="nav-${navName}"]`).click();
    // click away to remove focus from the nav
    cy.get('.page-footer').click();
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

