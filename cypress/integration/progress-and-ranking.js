/// <reference types="cypress" />

context('Generate Progress and Ranking Screenshots', () => {

  const displayWidth = 1200;
  beforeEach(() => {
    cy.viewport(displayWidth, 900);
    cy.login();

    cy.addToMyProjects('movies');
    cy.addToMyProjects('shows');
  });

  it('Gen Select My Projects', () => {
    cy.visit('/progress-and-rankings/manage-my-projects')
    const tableSelector = '[data-cy="discoverProjectsTable"]';
    const rowSelector = `${tableSelector} tbody tr`;
    cy.get(rowSelector).should('have.length', 3).as('cyRows');
    cy.get('@cyRows').eq(0).find('td').as('row2');
    cy.get('@row2').eq(1).find('[data-cy="removeBtn"]').click();
    cy.snap('page-progress-and-rankings-manage-my-projects');
  })

  it('Gen Progress and Ranking page', () => {
    cy.visit('/progress-and-rankings')
    cy.snap('page-progress-and-rankings');
  })

  it('Gen View Usage page', () => {
    cy.visit('/progress-and-rankings/my-usage')
    cy.wait(5000)
    cy.snap('page-progress-and-rankings-view-my-usage');
  });

  it('Gen View Badges page', () => {
    cy.visit('/progress-and-rankings/my-badges')
    cy.snap('page-progress-and-rankings-badges');
    cy.get('[data-cy="filterBtn"]').click();

    cy.get('[data-cy="filterMenu"]').should('be.visible');
    cy.snap('component-progress-and-rankings-badge-filter', '[data-cy="filterMenu"] .dropdown');

  });

  it('Gen Skills Display pages', () => {
    cy.visit('/progress-and-rankings/projects/movies?classicSkillsDisplay=true');
    cy.clientDisplay(true).contains('My Level');
    cy.snap('client-display-proj', 'iframe');

    cy.clientDisplay().find('[data-cy=myRank]').click();
    cy.clientDisplay().contains('My Rank');
    cy.snap('client-display-rank', 'iframe');

    const clipScreenshot = { x: 0, y: 0, width: displayWidth, height: 1800 };

    cy.visit('/progress-and-rankings/projects/movies?classicSkillsDisplay=true');
    cy.clientDisplay(true).contains('My Level');
    cy.cdClickSubj(3, 'Family');
    cy.snap('client-display-subject', 'iframe', { clip: clipScreenshot });

    cy.clientDisplay().find('[data-cy=toggleSkillDetails]').click()
    cy.clientDisplay().contains('Overall Points Earned');
    cy.snap('client-display-subject-expandedSkills', 'iframe', { clip: clipScreenshot });

    cy.clientDisplay().contains('Harry Potter and the Goblet of Fire').click();
    cy.snap('client-display-skillWithDeps', 'iframe');
  });

  it('Gen Self Report Skill', () => {
    cy.viewport(1100, 1000);
    cy.visit('/progress-and-rankings/projects/movies?classicSkillsDisplay=true');
    cy.clientDisplay(true).contains('My Level');
    cy.cdClickSubj(3, 'Family');
    cy.clientDisplay().contains('Finding Nemo').click();
    cy.clientDisplay().find('[data-cy="requestApprovalBtn"]');
    cy.snap('client-display-skills-selfReport', 'iframe');
  })

  it('Gen Themed pages', () => {
    cy.visit('/progress-and-rankings/projects/movies?enableTheme=true');
    cy.clientDisplay(true).contains('My Level');
    cy.snap('client-display-themed-proj', 'iframe');
  })



})
