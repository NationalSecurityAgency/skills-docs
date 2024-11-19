/// <reference types="cypress" />

context('Progress and Ranking: Generate Screenshots', () => {

  const displayWidth = 1200;
  beforeEach(() => {
    cy.viewport(displayWidth, 900);
    cy.login();

    cy.addToMyProjects('movies');
    cy.addToMyProjects('shows');
  });

  it('Gen Select My Projects', () => {
    cy.viewport(1300, 900);
    cy.visit('/progress-and-rankings/manage-my-projects')
    const tableSelector = '[data-cy="discoverProjectsTable"]';
    const rowSelector = `${tableSelector} tbody tr`;
    cy.get(rowSelector).should('have.length', 3).as('cyRows');
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
    cy.snap('component-progress-and-rankings-badge-filter', '[data-cy="filterBtn"]');

  });

  it('Gen Skills Display - project', () => {
    cy.visit('/test-skills-display/movies');
    cy.get('[data-cy="skillsDisplayHome"] [data-cy="pointHistoryChart-animationEnded"]')
    cy.get('[data-cy="skillsDisplayHome"] [data-cy="subjectTileBtn"]').should('have.length', 6);
    cy.snap('client-display-proj', '[data-cy="skillsDisplayHome"]');
  });

  it('Gen Skills Display - my rank', () => {
    cy.visit('/test-skills-display/movies/rank');
    cy.get('[data-cy="skillsDisplayHome"]').contains('My Rank');
    cy.get('[data-cy="levelBreakdownChart-animationEnded"]')
    cy.get('[data-cy="userColumn"]').should('have.length', 10);
    cy.snap('client-display-rank', '[data-cy="skillsDisplayHome"]');
  });

  it('Gen Skills Display - subject', () => {
    const clipScreenshot = { x: 0, y: 0, width: displayWidth, height: 1800 };

    cy.visit('/test-skills-display/movies/subjects/Family');
    cy.get('[data-cy="skillsDisplayHome"] [data-cy="pointHistoryChart-animationEnded"]')
    cy.get('[data-cy="skillProgress_index-0"]')
    cy.snap('client-display-subject', '[data-cy="skillsDisplayHome"]', { clip: clipScreenshot });

    cy.get('[data-cy="skillsDisplayHome"] [data-cy=toggleSkillDetails]').click()
    cy.get('[data-cy="skillsDisplayHome"]').contains('Overall Points Earned');
    cy.snap('client-display-subject-expandedSkills', '[data-cy="skillsDisplayHome"]', { clip: clipScreenshot });
  });

  it('Gen Skills Display - skill with depts', () => {
    cy.visit('/test-skills-display/movies/subjects/Family/skills/HarryPotterandtheGobletofFire');
    cy.get('[data-cy="skillLink-movies-HarryPotterandthePhilosophersStone"]')
    cy.wait(5000)
    cy.snap('client-display-skillWithDeps', '[data-cy="skillsDisplayHome"]');
  });

  it('Gen Self Report Skill', () => {
    cy.viewport(1100, 1000);
    cy.visit('/test-skills-display/movies/subjects/Family/skills/FindingNemo');
    cy.get('[data-cy="skillsDisplayHome"] [data-cy="requestApprovalBtn"]');
    cy.snap('client-display-skills-selfReport', '[data-cy="skillsDisplayHome"]');
  })

  it('Gen Themed pages', () => {
    cy.visit('/test-skills-display/movies?enableTheme=true');
    cy.get('[data-cy="skillsDisplayHome"] [data-cy="pointHistoryChart-animationEnded"]')
    cy.get('[data-cy="skillsDisplayHome"] [data-cy="subjectTileBtn"]').should('have.length', 6);
    cy.snap('client-display-themed-proj', '[data-cy="skillsDisplayHome"]');
  })

  it('Take quiz', () => {
    cy.intercept('/api/projects/quizzesAndSurveys/skills/ShortScienceQuizSkill/summary').as('getQuizSummary')
    cy.visit('/test-skills-display/quizzesAndSurveys/subjects/scienceQuizzes/skills/ShortScienceQuizSkill');
    cy.wait(1000)
    cy.get('[data-cy="skillsDisplayHome"] [data-cy="takeQuizBtn"]').click()
    cy.wait('@getQuizSummary')
    cy.wait(4000)
    cy.get('[data-cy="skillsDisplayHome"]')
        .then((param) => {
          if(param.find('[data-cy="startQuizAttempt"]').length) {
            cy.get('[data-cy="startQuizAttempt"]').click()
          }
        });
    cy.get('[data-cy="skillsDisplayHome"]').find('[data-cy="question_1"]')
        .then((param) => {
          if (!param.find('[data-cy="selected_true"]').length) {
            cy.get('[data-cy="question_1"] [data-cy="answer_1"]').click()
          }
        })
    cy.get('[data-cy="skillsDisplayHome"]').find('[data-cy="question_2"]')
        .then((param) => {
          if (!param.find('[data-cy="selected_true"]').length) {
            cy.get('[data-cy="question_2"] [data-cy="answer_2"]').click()
          }
        })

    cy.snap('client-display-quiz-run', '[data-cy="skillsDisplayHome"]');
  })

  it('quiz grading attempts page', () => {
    cy.request('POST', '/logout');
    cy.login('user1@email.com');
    cy.visit('/progress-and-rankings/my-quiz-attempts')
    cy.get('[data-cy="myQuizAttemptsTable"] [data-cy="skillsBTableTotalRows"]').should('have.text', '9')
    cy.snap('page-my-quiz-attempts');

    cy.get('[data-cy="myQuizAttemptsTable"] [data-p-index="0"] a').click()
    cy.snap('page-my-quiz-single-attempt');
  })


})
