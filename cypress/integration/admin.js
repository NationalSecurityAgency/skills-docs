/// <reference types="cypress" />

context('Generate Admin Screenshots', () => {

    const displayWidth = 1200;
    beforeEach(() => {
        cy.viewport(displayWidth, 800);
        cy.login();
    });

    it('Gen Projects pages', () => {
        // projects page
        cy.visit('/administrator')
        cy.get('[data-cy="projectCard_movies"]');
        cy.get('[data-cy="projectCard_shows"]');
        cy.snap('page-projects');

    })

    it('Gen Subject page with custom viewport', () => {
        // use custom ratio
        cy.viewport(1350, 800);

        // subjects page
        cy.visit('/administrator/projects/movies')
        cy.get('[data-cy="subjectCard-Action"]');
        cy.snap('page-subjects');

        // badges page
        cy.clickNav('Badges');
        cy.get('[data-cy="manageBtn_DespicableMeCollection"]');
        cy.snap('page-badges');
    });


    it('Gen Project pages', () => {
        cy.visit('/administrator/projects/movies/badges')
        // deps page
        cy.clickNav('Dependencies');
        cy.contains('Skill Dependencies')
        cy.snap('page-project-deps');

        // levels page
        cy.clickNav('Levels');
        cy.contains('White Belt');
        cy.snap('page-levels');

        // metrics skills page
        cy.clickNav('Metrics');
        cy.get('[data-cy="Skills-metrics-link"]').click();
        cy.get('[data-cy="skillsNavigator-table"]');
        cy.snap('page-project-metrics-skills');

        // metrics subjects page
        cy.get('[data-cy="Subjects-metrics-link"]').click();
        cy.contains('Number of users for each level for each subject');
        cy.contains('Number of users for each level over time')
        cy.get('[data-cy="subjectNumUsersPerLevelOverTime-subjectSelector"]').select('Action');
        cy.get('[data-cy="subjectNumUsersPerLevelOverTime"]').contains('Generate').click();
        // wait for chart to generate
        cy.wait(2222);
        cy.snap('page-project-metrics-subjects');

        // metrics subjects page
        cy.get('[data-cy="Achievements-metrics-link"]').click();
        cy.contains('Overall Levels');
        cy.get('[data-cy="achievementsNavigator-table"]')
        cy.snap('page-project-metrics-achievements');

        // settings
        cy.clickNav('Settings');
        cy.contains('Production Mode');
        cy.snap('page-project-settings');
    })


    it('Gen Subject pages', () => {
        // skills page
        cy.visit('/administrator/projects/movies/subjects/Action');
        cy.get('[data-cy="editSkillButton_EdgeofTomorrow"]');
        cy.snap('page-skills');

        cy.get('[data-cy="btn_edit-subject"]').click();
        cy.get('[aria-label="icon selector"]').click();
        cy.contains('address-book');
        cy.snap('modal-edit-subjectIcon', '.modal-content')
    })

    it('Gen Top Skill pages', () => {

        // // skills page
        cy.visit('/administrator/projects/movies/metrics/skills');
        cy.get('[data-cy="skillsNavigator-filters"]').contains('Top Skill').click();
        cy.get('[data-cy="skillsNavigator-filterBtn"]').click();
        cy.get('[data-cy="skillsNavigator-table"] a').eq(1).should('have.attr', 'href').and('include', 'skills')
            .then((href) => {
                cy.visit('/administrator');
                cy.wait(2000);
                cy.visit(href)
                cy.wait(2000);
                cy.contains('Achievements over time');
                cy.snap('page-topSkill-metrics');
            })
    })


    it('Gen Skill pages', () => {
        // skills page
        cy.visit('/administrator/projects/movies/subjects/Family/skills/HarryPotterandtheGobletofFire');
        cy.clickNav('Dependencies');
        cy.contains('ID: HarryPotterandtheGobletofFire')
        cy.snap('page-skill-deps');
        cy.snap('component-skill-deps', '.card.dependencies-container');
    })

    it('Gen Modals', () => {
        cy.viewport(1800, 1200); // some modals require a lot more vertical real estate
        cy.visit('/administrator/projects/movies/subjects/Action/')

        // edit skill modal
        cy.get('[data-cy="editSkillButton_EdgeofTomorrow"]').click();
        cy.get('[data-cy="skillName"]').should('have.value', 'Edge of Tomorrow');

        cy.snap('modal-edit-skill', '[id="EdgeofTomorrow"] .modal-content');
    });

    it('Gen Settings pages', () => {

        // subjects page
        cy.visit('/settings/');
        cy.contains('First Name');
        cy.get('[data-cy="settings-button"]').click();
        cy.snap('component-settings-menu', '.dropdown-menu.dropdown-menu-right.show');

        cy.clickNav('Preferences');
        cy.contains('Rank and Leaderboard Opt-Out');
        cy.snap('page-settings-preference');

        cy.clickNav('Security');
        cy.contains('Supervisor Users Management');
        cy.snap('page-settings-security');

        cy.clickNav('Email');
        cy.contains('Authentication Disabled');
        cy.snap('page-settings-email');

        cy.clickNav('System');
        cy.get('[data-cy="publicUrl"]').clear().type('http://localhost:8080')
        cy.contains('Public URL');
        cy.snap('page-settings-system');
    });

    it('Get Custom Header/Footer components', () => {
        cy.visit('/settings/system');
        cy.get('[data-cy="publicUrl"]').clear().type('http://localhost:8080');

        cy.get('[data-cy="customHeader"]').clear().type('<div style="font-size:3rem;"><i class="fas fa-air-freshener"></i> Custom Footer</div>')
        cy.get('[data-cy="customFooter"]').clear().type('<div style="font-size:2rem;"><i class="fas fa-bath"></i> Custom Footer</div>')
        cy.get('[data-cy="saveSystemSettings"]').click();
        // close toast
        cy.get('button.close').click({multiple: true, force: true});

        cy.snap('page-custom-headerAndFooter');

        // remove after snapshot is taken
        cy.get('[data-cy="customHeader"]').clear()
        cy.get('[data-cy="customFooter"]').clear()
        cy.get('[data-cy="saveSystemSettings"]').click();
        // close toast
        cy.get('button.close').click({multiple: true, force: true});

    });

})
