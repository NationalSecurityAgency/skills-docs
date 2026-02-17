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
        cy.get('[data-pc-name="pcmaximizebutton"]').click()
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
        cy.viewport(1200, 870)
        cy.visit('/administrator/quizzes/ShortScienceQuiz')
        cy.get('[data-cy="editQuestionButton_1"]')
        cy.get('[data-cy="btn_Questions"]').click()
        // cy.get('[data-cy="discardContentButton"]').click({force: true})
        cy.get('[data-cy="answer-0"] [data-cy="selectCorrectAnswer"]').click()
        cy.get('[data-cy="answer-1"] [data-cy="selectCorrectAnswer"]').click()
        cy.get('[data-cy="answer-0"] [data-cy="answerText"]').type('Blue')
        cy.get('[data-cy="answer-1"] [data-cy="answerText"]').type('Yellow')
        cy.get('[data-cy="questionText"] [data-cy="markdownEditorInput"]').clear()
        cy.get('[data-cy="questionText"] [data-cy="markdownEditorInput"]').type('Select all the colors.')
        cy.get('[data-pc-name="pcmaximizebutton"]').click()
        cy.snap('modal-new-question', '.p-dialog')

        cy.get('[data-cy="answerHintEnableCheckbox"]').click()
        cy.get('[data-cy="answerHint"]').clear()
        cy.get('[data-cy="answerHint"]').type('A clever hint that will assist trainees')

        cy.snap('modal-new-question-hint-component', '.p-dialog [data-cy="answerHintSection"]')
    })

    it('new questions modal - ai dialog', () => {
        cy.intercept('GET', '/public/config', (req) => {
            req.reply((res) => {
                const conf = res.body;
                conf.enableOpenAIIntegration = true;
                res.send(conf);
            });
        }).as('getConfig');
        cy.viewport(1100, 900);
        cy.visit('/administrator/quizzes/ShortScienceQuiz')
        cy.get('@getConfig')
        cy.get('[data-cy="editQuestionButton_1"]')
        cy.get('[data-cy="btn_Questions"]').click()
        cy.snap('ai-assistant-button', '.p-dialog button[data-cy="aiButton"]')

        cy.get('[data-cy="aiButton"]').click()
        cy.get('[data-cy="aiModelsSelector"]  [data-cy="modelSettingsButton"]').should('be.visible')
        cy.snap('ai-model-settings-button', '[data-cy="aiModelsSelector"]  [data-cy="modelSettingsButton"]')
        cy.get('[data-cy="aiModelsSelector"]  [data-cy="modelSettingsButton"]').click()
        cy.get('[data-cy="aiModelsSelector"] [data-cy="modelSettings"]').should('be.visible')
        cy.snap('ai-model-settings', '[data-cy="aiModelsSelector"]')
        cy.get('[data-cy="instructionsInput"]').type('Off sides in ice hockey{enter}')
        cy.get('[data-cy="aiMsg-2"] [data-cy="finalSegment"]').contains('Take a look at what I came up with!')
        cy.get('div.p-dialog.p-component:has(span:contains("AI Assistant"))')
        cy.snap('ai-gen-new-question', 'div.p-dialog.p-component:has(span:contains("AI Assistant"))')
        cy.realPress('Escape');
    })

    it('configure quiz', () => {
        cy.visit('/administrator/projects/movies/subjects/Action/')
        cy.get('[data-cy="newSkillButton"]').click()
        cy.get('[data-pc-name="pcmaximizebutton"]').click()
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
        cy.viewport(1500, 500);
        cy.visit('/administrator/quizzes/ShortScienceQuiz/settings')
        cy.get('[data-cy="quizPassingSelector"]')
        cy.snap('page-quiz-settings');
    })

    it('quiz grading page', () => {
        // going to expect email server is already configured
        cy.viewport(1100, 500);
        cy.visit('/administrator/quizzes/ChessInsight/grading')
        cy.get('[data-cy="gradeBtn_user4@email.com"]').click()
        cy.get('[data-cy="question_1"] [data-cy="questionDisplayText"]')
        cy.snap('page-quiz-grading');
        cy.snap('component-quiz-grading-email-subscriptions', '[data-cy="quizRunsToGradeTable"] [data-pc-section="header"]');
    })

    it('quiz configure ai grading page', () => {
        // going to expect email server is already configured
        cy.viewport(1100, 500);
        cy.visit('/administrator/quizzes/ChessInsight')
        cy.get('[data-cy="ai-grader-question-1"]').click()
        cy.get('[data-cy="aiGraderEnabled"]').click()

        const answerForGrading = '- Control the Center{enter}- Develop Your Pieces{enter}- Ensure King Safety (Castling)'
        cy.get('[data-cy="answerForGrading"]').type(answerForGrading)
        cy.snap('page-quiz-ai-grading-config');
    })

    it('quiz survey page', () => {
        // cy.viewport(1100, 500);
        cy.visit('/administrator/quizzes/CodingLanguageandFrameworksPreferences/')
        cy.get('[data-cy="editQuestionButton_1"]')
        cy.snap('page-survey');
    })

    it('new survey question modal', () => {
        cy.visit('/administrator/quizzes/CodingLanguageandFrameworksPreferences')
        cy.get('[data-cy="editQuestionButton_1"]')
        cy.get('[data-cy="btn_Questions"]').click()
        cy.get('[data-cy="questionText"] [data-cy="markdownEditorInput"]')

        cy.get('[data-cy="discardContentButton"]').click({force: true})

        cy.get('[data-cy="answer-0"] [data-cy="answerText"]').type('Blue')
        cy.get('[data-cy="answer-1"] [data-cy="answerText"]').type('Yellow')
        cy.get('[data-cy="questionText"] [data-cy="markdownEditorInput"]').clear()
        cy.get('[data-cy="questionText"] [data-cy="markdownEditorInput"]').type('What is your favorite color?')
        cy.get('[data-pc-name="pcmaximizebutton"]').click()

        cy.snap('modal-new-survey-question', '.p-dialog')
    })

    it('quiz access page', () => {
        cy.viewport(1100, 700);
        cy.visit('/administrator/quizzes/ShortScienceQuiz/access')
        cy.get('[data-cy="roleManagerTable"] [data-cy="skillsBTableTotalRows"]').should('have.text', '1')
        cy.snap('page-quiz-access');
    })

})
