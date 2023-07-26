/// <reference types="cypress" />

context('Generate Admin Screenshots', () => {

    const displayWidth = 1200;
    beforeEach(() => {
        cy.viewport(displayWidth, 800);
        cy.register('bob1@email.org', 'password', 'Bob', 'Smith')
        cy.login();
    });

    it('Gen Projects pages', () => {
        // projects page
        cy.visit('/administrator')
        cy.get('[data-cy="projectCard_movies"]');
        cy.get('[data-cy="projectCard_shows"]');
        cy.snap('page-projects');

        // new project modal
        cy.get('[data-cy="newProjectButton"]').click();
        cy.get('[data-cy="projectName"]');
        cy.snap('modal-projects-new_project', '.modal-content')
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

    it('New Subject, Badge and Skill modals', () => {
        cy.viewport(1350, 1200);

        // new subject modal
        cy.visit('/administrator/projects/movies')
        cy.get('[data-cy="subjectCard-Action"]');
        cy.get('[data-cy="btn_Subjects"]').click()
        cy.get('[data-cy="subjectNameInput"]')
        cy.wait(2000)
        cy.snap('modal-subjects-new_subject', '.modal-content')

        // new badge modal
        cy.visit('/administrator/projects/movies/badges')
        cy.get('[data-cy="btn_Badges"]').click();
        cy.get('[data-cy="badgeName"]')
        cy.snap('modal-badges-new_badge', '.modal-content')

        // new skill modal
        cy.visit('/administrator/projects/movies/subjects/Action/');
        cy.get('[data-cy="newSkillButton"]').click();
        cy.get('[data-cy="skillName"]');
        cy.snap('modal-skills-new_skill', '.modal-content')

    });

    it('Gen Self Report page', () => {
        cy.viewport(1350, 1200);

        cy.visit('/administrator/projects/movies/badges')

        cy.clickNav('Self Report');
        cy.get('[data-cy="selectPageOfApprovalsBtn"]').click();
        cy.get('[data-cy="approveBtn"]').click();

        // has at least 1 row
        cy.get('[data-cy="skillsReportApprovalTable"] [aria-colindex="1"]')

        cy.snap('page-project-self_report');
    });

    it('Gen Skill Tags page', () => {
        cy.viewport(1350, 1200);

        cy.visit('/administrator/projects/movies/subjects/Action')

        cy.get('[data-cy="skillSelect-TheLordoftheRingsTheFellowshipoftheRing"]').click({ force: true });
        cy.get('[data-cy="skillSelect-JurassicWorld"]').click({ force: true });
        cy.get('[data-cy="skillSelect-RogueOneAStarWarsStory"]').click({ force: true });
        cy.get('[data-cy="skillActionsBtn"]').click();
        cy.get('[data-cy="tagSkillBtn"]').click();

        cy.get('[data-cy="newTagInput"]').type('Two Thumbs Up!')
        cy.get('[data-cy="addTagsButton"]').click()

        cy.get('[data-cy="skillSelect-TheLordoftheRingsTheFellowshipoftheRing"]').click({ force: true });
        cy.get('[data-cy="skillSelect-JurassicWorld"]').click({ force: true });
        cy.get('[data-cy="skillSelect-RogueOneAStarWarsStory"]').click({ force: true });
        cy.get('[data-cy="skillActionsBtn"]').click();
        cy.get('[data-cy="tagSkillBtn"]')

        cy.snap('skill-tags-page')
        // cy.snap('skills-actions-menu', '#tableActionsBtn_skillsTable > ul');

        cy.get('[data-cy="tagSkillBtn"]').click({ force: true });
        cy.get('[data-cy="existingTagDropdown"]').click();
        cy.snap('existing-tag-dropdown', '.modal-content');
        cy.get('[data-cy="cancelAddTagsButton"]').click()

        cy.get('[data-cy="skillActionsBtn"]').click();
        cy.get('[data-cy="untagSkillBtn"]').click();
        cy.get('[data-cy="existingTagDropdown"]').click();
        cy.get('[data-cy="existingTagDropdown"] .vs__dropdown-option')
          .eq(0)
          .click()
        cy.get('[data-cy="deleteTagsButton"]').click()
    });

    it('Gen Learning Path', () => {
        cy.viewport(1350, 1200);
        cy.visit('/administrator/projects/movies/learning-path')
        cy.get('[data-cy="graphLegend"]')
        cy.get('[data-cy="learningPathTable"] [data-cy="skillsBTableTotalRows"]')
        cy.wait(5000);
        cy.snap('page-project-learning-path');
        cy.snap('component-manage-learning-path', '[data-cy="addPrerequisiteToLearningPath"]')
    })

    it('Gen Project pages', () => {
        cy.viewport(1350, 1200);

        cy.visit('/administrator/projects/movies/badges')

        // levels page
        cy.viewport(1350, 800);
        cy.clickNav('Levels');
        cy.contains('Percent %');
        cy.snap('page-project-levels');
        cy.viewport(1350, 1200);

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

        // issues page
        cy.clickNav('Issues');
        cy.get('[data-cy="projectErrorsTable"]');
        cy.snap('page-project-issues');

        // settings
        cy.clickNav('Settings');
        cy.contains('Discoverable');
        cy.get('[data-cy="customLabelsSwitch"').click({force: true});
        cy.snap('page-project-settings');
    })


    it('Email notification pages', () => {
        // first set email settings to enable email
        cy.visit('/settings/email')
        cy.get('[data-cy="publicUrlInput"]').clear().type('http://localhost:8080')
        cy.get('[data-cy="fromEmailInput"]').clear().type('skills@skills.org')
        cy.get('[data-cy="hostInput"]').clear().type('localhost');
        cy.get('[data-cy="portInput"]').clear().type(155);
        cy.get('[data-cy="emailSettingsSave"]').click();
        cy.get('[data-cy="connectionError"]');

        // project admins page
        cy.visit('/administrator/contactAdmins');
        cy.contains('Email Content');
        cy.snap('page-contact_proj_admins');

        // notify proj users page
        cy.visit('/administrator/projects/movies/contact-users');
        cy.contains('Email Content');
        cy.snap('page-project-notify_users');
    });

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
        cy.contains('Token Expiration');
        cy.snap('page-settings-system');
    });

    it('Get Custom Header/Footer components', () => {
        cy.visit('/settings/system');

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

    it('Gen Inception page', () => {
        cy.visit('/administrator/skills ');
        cy.contains('Dashboard Skills');
        cy.wait(4000);
        cy.snap('page-inception');
    });

    it('Gen Skills Groups', () => {
        cy.visit('/administrator/projects/movies/subjects/Family/')
        cy.get('[data-cy="skillsTable-skillFilter"]').type('Harry')
        cy.get('[data-cy="users-filterBtn"]').click();
        cy.get('[data-cy="expandDetailsBtn_HarryPotterGroupId"]').click();
        cy.contains('Harry Potter and the Half-Blood Prince');
        cy.snap('page-skills-group')
    })

    it('Gen Video Settings page', () => {
        cy.visit('/administrator/projects/movies/subjects/Action/skills/WonderWoman/configVideo')
        cy.get('[data-cy="videoUrl"]')
        cy.snap('page-video-config', '[data-cy="nav"]')
    })

    it('Badge Bonus Award Config', () => {
        cy.viewport(1800, 1200); // some modals require a lot more vertical real estate
        cy.visit('/administrator/projects/movies/badges')
        cy.get('[data-cy="btn_Badges"]').click()
        cy.get('[data-cy="timeLimitCheckbox"]').click( { force: true })
        cy.snap('modal-new-badge-component-bonus-award', '[data-cy="bonusAwardCard"]')
    })

    it('New Skill Group Modal', () => {
        cy.visit('/administrator/projects/movies/subjects/Family/')
        cy.get('[data-cy="newGroupButton"]').click();
        cy.contains('New Skills Group');

        cy.snap('modal-new-group', '.modal-content');
    })

    it('Skill Catalog', () => {
        cy.viewport(1800, 1200); // some modals require a lot more vertical real estate
        cy.visit('/administrator/projects/movies/subjects/Family/');
        cy.get('[data-cy="selectAllSkillsBtn"]').click();
        cy.get('[data-cy="skillActionsBtn"]').click();
        cy.get('[data-cy="skillExportToCatalogBtn"]');

        cy.snap('page-export-to-catalog');
        cy.get('[data-cy="skillExportToCatalogBtn"]').click({force:true});
        cy.get('[data-cy="exportToCatalogButton"]').click();
        cy.get('[data-cy="okButton"]').click();

        cy.visit('/administrator/projects/movies/skills-catalog');
        cy.contains('Exported to Catalog')
        cy.snap('page-skills-exported-to-catalog');

        cy.intercept('POST', '/admin/projects/shows/subjects/ImportedSkillsSubject').as('saveSubject')
        cy.visit('/administrator/projects/shows');
        cy.get('[data-cy="btn_Subjects"]').click();
        cy.get('[data-cy="subjectNameInput"]').type('Imported Skills');
        cy.get('[data-cy="saveSubjectButton"]').click();
        cy.wait('@saveSubject')

        cy.visit('/administrator/projects/shows/subjects/ImportedSkillsSubject');
        cy.get('[data-cy="importFromCatalogBtn"]').click({force:true});
        cy.get('[data-cy="importSkillsFromCatalogTable"] [type="checkbox"]').first().click({ force: true });
        cy.get('[data-cy="importSkillsFromCatalogTable"] [type="checkbox"]').eq(2).click({ force: true });

        cy.snap('modal-import_catalog_skills', '.modal-content');

        cy.get('[data-cy="importBtn"]').click();
        cy.snap('component-table_with_disabled_skills', '[data-cy="skillsTable"]');
        cy.snap('component-catalog_finalize_alert', '[data-cy="importFinalizeAlert"]');
        // edit button
        cy.snap('component-edit_skill_button', '[data-cy="skillsTable"] tr:nth-child(1) [title="Edit Skill"]');
        cy.get('[data-cy="skillsTable"] tr:nth-child(1) [title="Edit Skill"]').click();
        cy.snap('modal-edit_imported_skill', '.modal-content');
    })

    it('Share Project Example', () => {
        cy.visit('/administrator/projects/movies')
        cy.get('[data-cy="manageBtn_Action"]')
        cy.get('[data-cy="pageHeaderStat_Project Catalog"]').contains('Discoverable')
        cy.snap('page-partial-share-proj', null, {clip: { x: 0, y: 0, width: 750, height: 400 } });
    })

    it('Share Project Modal', () => {
        cy.visit('/administrator/projects/movies')
        cy.get('[data-cy="manageBtn_Action"]')
        cy.get('[data-cy="pageHeaderStat_Project Catalog"]').contains('Discoverable')
        cy.get('[data-cy="shareProjBtn"]').click()
        cy.get('[data-cy="projShareUrl"]')
        cy.snap('modal-share_proj', '.modal-content');
    })

    Cypress.Commands.add('clickToolbarButton', (buttonName) => {
        cy.get(`button.${buttonName}`).click({force: true})
    });
    Cypress.Commands.add('addHeading', (headingLevel, headingText) => {
        cy.clickToolbarButton('heading')
        cy.get(`ul > li[data-level=${headingLevel}]`).click({force: true})
        cy.focused().type(headingText);
    });
    Cypress.Commands.add('selectParagraphText', () => {
        cy.clickToolbarButton('heading')
        cy.get('ul > li[data-type=Paragraph]').click({force: true})
    });
    Cypress.Commands.add('addBold', (text) => {
        cy.clickToolbarButton('bold')
        cy.focused().type(text);
    });

    it('Gen Rich Text Editor', () => {

        // first set email settings to enable email
        cy.visit('/settings/email')
        cy.wait(3000)
        cy.get('[data-cy="publicUrlInput"]').clear().type('http://localhost:8080')
        cy.get('[data-cy="fromEmailInput"]').clear().type('skills@skills.org')
        cy.get('[data-cy="hostInput"]').clear().type('localhost');
        cy.get('[data-cy="portInput"]').clear().type(155);
        cy.get('[data-cy="emailSettingsSave"]').click();
        cy.get('[data-cy="connectionError"]');

        cy.visit('/administrator/');

        cy.intercept('GET', '/app/userInfo/hasRole/ROLE_SUPER_DUPER_USER')
          .as('isRoot');
        cy.intercept('POST', '/root/users/contactAllProjectAdmins', {
            statusCode: 200,
            body: {
                success: true
            }
        });
        cy.get('[data-cy="nav-Contact Admins"]')
          .click();
        cy.wait('@isRoot');
        const markdownInput = '[data-cy=markdownEditorInput]';

        cy.get(markdownInput).clear()
        cy.addHeading(1, 'Title1\n')
        cy.addHeading(2, 'Title2\n')
        cy.addHeading(3, 'Title3\n')
        cy.addHeading(4, 'Title4\n')
        cy.addHeading(5, 'Title5\n')
        cy.addHeading(6, 'Title6')

        cy.snap('rich-text-editor-1', markdownInput);
        cy.get(markdownInput).clear()

        cy.selectParagraphText()
        cy.focused().type('regular paragraph text\n\n');

        cy.focused().type('bold: ');
        cy.clickToolbarButton('bold')
        cy.focused().type('bolded\n\n');

        cy.focused().type('strikethrough: ');
        cy.clickToolbarButton('strike')
        cy.focused().type('struck\n');

        cy.clickToolbarButton('hrline')
        cy.focused().type('{downArrow}Separator\n');

        cy.contains('Email Body').click();  // remove focus for snapshot
        cy.snap('rich-text-editor-2', markdownInput);
        cy.get(markdownInput).clear()

        cy.focused().type('bulleted list and ordered list: \n');
        cy.clickToolbarButton('bullet-list')
        cy.focused().type('Item 1\nItem 1-A')
        cy.clickToolbarButton('indent')
        cy.focused().type('\nItem 1-B\nItem 2');
        cy.clickToolbarButton('outdent')
        cy.focused().type('\n\n')

        cy.clickToolbarButton('ordered-list')
        cy.focused().type('Item 1\nItem 1-A')
        cy.clickToolbarButton('indent')
        cy.focused().type('\nItem 1-B\nItem 2');
        cy.clickToolbarButton('outdent')
        // cy.focused().type('\n\n')
        cy.contains('Email Body').click();  // remove focus for snapshot
        cy.snap('rich-text-editor-3', markdownInput);
        cy.get(markdownInput).clear()

        cy.clickToolbarButton('image')
        cy.get('div.toastui-editor-popup.toastui-editor-popup-add-image').contains('URL').click()
        cy.get('#toastuiImageUrlInput').type('https://github.com/NationalSecurityAgency/skills-service/raw/master/skilltree_logo.png')
        cy.get('.toastui-editor-ok-button').click()
        cy.focused().type('\n\n')
        cy.clickToolbarButton('link')
        cy.get('#toastuiLinkUrlInput').type('https://skilltreeplatform.dev/')
        cy.get('#toastuiLinkTextInput').type('SkillTree Documentation Link')
        cy.get('.toastui-editor-ok-button').click()
        cy.contains('Email Body').click();  // remove focus for snapshot
        cy.snap('rich-text-editor-4', markdownInput);
        cy.get(markdownInput).clear()

        cy.focused().type('This is some ');
        cy.clickToolbarButton('code')
        cy.focused().type('inline code');
        cy.clickToolbarButton('code')
        cy.focused().type('surrounded by normal text\n\n');

        cy.focused().type('\n{upArrow}Some text followed by a code block\n');
        cy.clickToolbarButton('codeblock')
        cy.focused().type('\n' +
          'const validateMarkdown = (markdown, snapshotName) => {\n' +
          '}\n');
        cy.clickToolbarButton('codeblock')

        cy.contains('Email Body').click();  // remove focus for snapshot
        cy.snap('rich-text-editor-5', markdownInput);

    })

    it('access page', () => {
        cy.intercept({
            method: 'POST',
            path: '/app/users/suggest*',
        }).as('suggest');
        cy.visit('/administrator/projects/movies/access')

        cy.get('[data-cy="existingUserInput"]')
            .type('bob1');
        cy.wait('@suggest');
        cy.wait(500);
        cy.get('.vs__dropdown-menu').contains('bob1@email.org')
            .click();
        cy.get('[data-cy="userRoleSelector"]').select('Approver');
        cy.get('[data-cy="addUserBtn"]').click();
        cy.get('[data-cy="userCell_bob1@email.org"]')
        cy.snap('page-project-access');
    })

    it('self-report split workload conf - fallback', () => {
        cy.visit('/administrator/projects/movies/access')
        cy.get('[data-cy="existingUserInput"]').type('b')
        cy.contains('bob1@email.org').click()

        cy.get('[data-cy="userRoleSelector"]').select('Approver');
        cy.wait(2000)
        cy.get('[data-cy="addUserBtn"]').click({force: true});
        cy.get('[data-cy="userCell_bob1@email.org"]')

        cy.visit('/administrator/projects/movies/self-report/configure')

        const user1 = 'bob1@email.org'
        // assign single fallback amd snap
        cy.get(`[data-cy="workloadCell_${user1}"] [data-cy="fallbackSwitch"]`).click({force: true})
        cy.snap('component-conf-approval-workload-fallback', '#mainContent2')

        cy.get(`[data-cy="workloadCell_${user1}"] [data-cy="fallbackSwitch"]`).click({force: true})
    })

    it('Create self report skills', () => {
        cy.viewport(1350, 1200);

        cy.visit('/administrator/projects/movies/subjects/Action/')
        cy.get('[data-cy="newSkillButton"]').click()
        cy.get('[data-cy="skillDescription"] [data-cy="markdownEditorInput"]')
        cy.get('[data-cy="selfReportEnableCheckbox"]').check({ force: true });

        cy.snap('modal-new-skill_self-report-checked', '.modal-content')
    });

    it('self-report split workload conf - skills', () => {
        cy.visit('/administrator/projects/movies/access')
        cy.get('[data-cy="existingUserInput"]').type('b')
        cy.contains('bob1@email.org').click()

        cy.get('[data-cy="userRoleSelector"]').select('Approver');
        cy.wait(2000)
        cy.get('[data-cy="addUserBtn"]').click({force: true});
        cy.get('[data-cy="userCell_bob1@email.org"]')

        cy.visit('/administrator/projects/movies/self-report/configure')

        const user2 = 'bill@email.org'
        cy.get(`[data-cy="workloadCell_${user2}"] [data-cy="editApprovalBtn"]`).click()

        cy.get(`[data-cy="expandedChild_${user2}"] [data-cy="subjectSelector"]`).type('Hi');
        cy.get(`[data-cy="expandedChild_${user2}"] [data-cy="subjectSelectionItem-movies-History"]`).click()
        cy.get(`[data-cy="expandedChild_${user2}"] [data-cy="addSkillConfBtn"]`).should('be.enabled')
        cy.get(`[data-cy="expandedChild_${user2}"] [data-cy="addSkillConfBtn"]`).click()
        cy.get('[data-cy="closeSkillsAddedAlertBtn"]').click()
        cy.get('[data-cy="closeSkillsAddedAlertBtn"]').should('not.exist')

        cy.snap('component-conf-approval-workload-skills', `[data-cy="expandedChild_${user2}"] .card:first`)

        cy.get(`[data-cy="workloadCell_${user2}"] [data-cy="editApprovalBtn"]`).click()
        cy.snap('component-conf-approval-workload-withSkillsAdded', '#mainContent2')
    })


})
