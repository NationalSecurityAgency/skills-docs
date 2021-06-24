/// <reference types="cypress" />

context('Generate Progress and Ranking Screenshots', () => {

  const displayWidth = 1200;
  beforeEach(() => {
    cy.viewport(displayWidth, 400);
    cy.login();
  });


  it('Gen Progress and Ranking pages', () => {
    cy.visit('/progress-and-rankings')
    cy.snap('page-progress-and-rankings');
  })

  it('Gen Skills Display pages', () => {
    cy.visit('/progress-and-rankings/projects/movies');
    cy.clientDisplay(true).contains('My Level');
    cy.snap('client-display-proj', 'iframe');

    cy.clientDisplay().find('[data-cy=myRank]').click();
    cy.clientDisplay().contains('My Rank');
    cy.snap('client-display-rank', 'iframe');

    const clipScreenshot = { x: 0, y: 0, width: displayWidth, height: 1800 };

    cy.visit('/progress-and-rankings/projects/movies');
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
    cy.visit('/progress-and-rankings/projects/movies');
    cy.clientDisplay(true).contains('My Level');
    cy.cdClickSubj(3, 'Family');
    cy.clientDisplay().contains('Finding Nemo').click();
    cy.clientDisplay().find('[data-cy="selfReportBtn"]');
    cy.snap('client-display-skills-selfReport', 'iframe');
  })

  it('Gen Themed pages', () => {
    cy.visit('/progress-and-rankings/projects/movies?enableTheme=true');
    cy.clientDisplay(true).contains('My Level');
    cy.snap('client-display-themed-proj', 'iframe');
  })



})
