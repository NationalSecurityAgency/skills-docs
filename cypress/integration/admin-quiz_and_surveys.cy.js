/// <reference types="cypress" />

context('Generate Quiz and Surveys Screenshots', () => {

    const displayWidth = 1200;
    beforeEach(() => {
        cy.viewport(displayWidth, 800);
        cy.register('bob1@email.org', 'password', 'Bob', 'Smith')
        cy.login();
    });

    it('quizzes page', () => {
        cy.visit('/administrator/quizzes')
        cy.get('[data-cy="quizFilterBtn"]')

        cy.snap('page-quizzes');
    })

    it('new quiz/survey modal', () => {
        cy.viewport(1350, 1000);
        cy.visit('/administrator/quizzes')
        cy.get('[data-cy="quizFilterBtn"]')
        cy.get('[data-cy="btn_Quizzes And Surveys"]').click()
        cy.get('[data-cy="quizName"]')
        cy.get('[data-cy="quizDescription"] [data-cy="markdownEditorInput"]')

        cy.snap('modal-new-quiz', '.modal-content')
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

        cy.snap('modal-new-question', '.modal-content')
    })

    it('configure quiz', () => {
        cy.visit('/administrator/projects/movies/subjects/Action/')
        cy.get('[data-cy="newSkillButton"]').click()
        cy.get('[data-cy="skillDescription"] [data-cy="markdownEditorInput"]')
        cy.get('[data-cy="selfReportEnableCheckbox"]').check({ force: true });
        cy.get('[data-cy="quizRadio"]').check({ force: true });
        cy.get('[data-cy="quizSelector"]').click()
        cy.get('[data-cy="availableQuizSelection-CodingLanguageandFrameworksPreferences"]').click()
        cy.get('[data-cy="quizSelected-CodingLanguageandFrameworksPreferences"]')
        cy.snap('component-quiz-skill', '[data-cy="selfReportTypeSelector"]')
    });

    it('quiz results page', () => {
        cy.visit('/administrator/quizzes/ShortScienceQuiz/results')
        cy.get('[data-cy="userFilterBtn"]')
        cy.get('[data-cy="row0-userCell"]')

        cy.snap('page-quiz-results');
    })

    it('quiz results page', () => {
        cy.visit('/administrator/quizzes/ShortScienceQuiz/results')
        cy.get('[data-cy="userFilterBtn"]')
        cy.get('[data-cy="row1-viewRun"]').click()
        cy.get('[data-cy="questionDisplayCard-1"]')

        cy.snap('page-quiz-single-result');
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

        cy.snap('modal-new-survey-question', '.modal-content')
    })

    it('quiz access page', () => {
        cy.viewport(1100, 700);
        cy.visit('/administrator/quizzes/ShortScienceQuiz/access')
        cy.get('[id="quizUserRoleTable"] [data-cy="skillsBTableTotalRows"]').should('have.text', '1')
        cy.snap('page-quiz-access');
    })

})
