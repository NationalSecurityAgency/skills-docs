/// <reference types="cypress" />

context('Admin: Generate Quiz and Surveys Screenshots', () => {

    const displayWidth = 1200;
    beforeEach(() => {
        cy.viewport(displayWidth, 800);
        cy.register('bob1@email.org', 'password', 'Bob', 'Smith')
        cy.login();
    });

    it('quizzes page', () => {
        cy.visit('/administrator/quizzes')
        cy.get('[data-cy="quizNameFilter"]')

        cy.snap('page-quizzes');
    })

    it('new quiz/survey modal', () => {
        cy.viewport(1350, 1000);
        cy.visit('/administrator/quizzes')
        cy.get('[data-cy="quizNameFilter"]')
        cy.get('[data-cy="btn_Quizzes And Surveys"]').click()
        cy.get('[data-pc-section="maximizablebutton"]').click()
        cy.get('[data-cy="quizName"]')
        cy.get('[data-cy="quizDescription"] [data-cy="markdownEditorInput"]')

        cy.snap('modal-new-quiz', '.p-dialog')
    })

    it('quiz page', () => {
        cy.visit('/administrator/quizzes/ShortScienceQuiz')
        cy.get('[data-cy="editQuestionButton_1"')
        cy.snap('page-quiz');
    })

    it('new questions modal', () => {
        cy.visit('/administrator/quizzes/ShortScienceQuiz')
        cy.get('[data-cy="editQuestionButton_1"')
        cy.get('[data-cy="btn_Questions"]').click()
        cy.get('[data-cy="questionText"] [data-cy="markdownEditorInput"]')

        cy.snap('modal-new-question', '.p-dialog')
    })

    it('configure quiz', () => {
        cy.visit('/administrator/projects/movies/subjects/Action/')
        cy.get('[data-cy="newSkillButton"]').click()
        cy.get('[data-pc-section="maximizablebutton"]').click()
        cy.get('[data-cy="descriptionMarkdownEditor"]')
        cy.get('[data-cy="selfReportEnableCheckbox"]').click();
        cy.get('[data-cy="quizRadio"]').click();
        cy.get('[data-cy="quizSelector"]').click()
        cy.get('[data-cy="availableQuizSelection-CodingLanguageandFrameworksPreferences"]').click()
        cy.get('[data-cy="quizSelected-CodingLanguageandFrameworksPreferences"]')
        cy.snap('component-quiz-skill', '[data-cy="selfReportTypeSelector"]')
    });

    it('quiz results page', () => {
        cy.visit('/administrator/quizzes/ShortScienceQuiz/results')
        cy.get('[data-cy="metricsCardTotal"] [data-cy="statCardValue"]')
        cy.get('[data-cy="metrics-q1"]')

        cy.snap('page-quiz-results');
    })

    it('quiz runs page', () => {
        cy.visit('/administrator/quizzes/ShortScienceQuiz/runs')
        cy.get('[data-cy="userFilterBtn"]')
        cy.get('[data-cy="row0-userCell"]')

        cy.snap('page-quiz-runs');
    })

    it('quiz single run page', () => {
        cy.visit('/administrator/quizzes/ShortScienceQuiz/runs')
        cy.get('[data-cy="userFilterBtn"]')
        cy.get('[data-cy="row1-viewRun"]').click()
        cy.get('[data-cy="questionDisplayCard-1"]')

        cy.snap('page-quiz-single-result');
    })

    it('quiz results page', () => {
        cy.visit('/administrator/quizzes/ShortScienceQuiz/skills')
        cy.get('[data-cy="quizSkills"] [data-cy="skillsBTableTotalRows"]')
        cy.snap('page-quiz-skills');
    })

    it('quiz settings page', () => {
        cy.viewport(1100, 500);
        cy.visit('/administrator/quizzes/ShortScienceQuiz/settings')
        cy.get('[data-cy="quizPassingSelector"]')
        cy.snap('page-quiz-settings');
    })

    it('quiz survey page', () => {
        // cy.viewport(1100, 500);
        cy.visit('/administrator/quizzes/CodingLanguageandFrameworksPreferences/')
        cy.get('[data-cy="editQuestionButton_1"')
        cy.snap('page-survey');
    })

    it('new survey question modal', () => {
        cy.visit('/administrator/quizzes/CodingLanguageandFrameworksPreferences')
        cy.get('[data-cy="editQuestionButton_1"')
        cy.get('[data-cy="btn_Questions"]').click()
        cy.get('[data-cy="questionText"] [data-cy="markdownEditorInput"]')

        cy.snap('modal-new-survey-question', '.p-dialog')
    })

    it('quiz access page', () => {
        cy.viewport(1100, 700);
        cy.visit('/administrator/quizzes/ShortScienceQuiz/access')
        cy.get('[id="quizUserRoleTable"] [data-cy="skillsBTableTotalRows"]').should('have.text', '1')
        cy.snap('page-quiz-access');
    })

})
