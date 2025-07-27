import LoginPage from '../Pages/LoginPage';
import HomePage from '../Pages/HomePage';

describe('Login Test', () => {
    const loginPage = new LoginPage();

    it('Verify Visit the Login Page and Display Elements Correctly', () => {
        loginPage.visitPage(Cypress.env('testDomain'));
        cy.title().should('eq', 'Login');
        cy.get(loginPage.emailField).should('be.visible');
        cy.get(loginPage.passwordField).should('be.visible');
        cy.get(loginPage.loginButton).should('be.visible');
    })

    it('Should be able to Login With Valid Credentials', () => {
        loginPage.visitPage(Cypress.env("testDomain"));
        loginPage.typeEmail(Cypress.env("email"));
        loginPage.typePassword(Cypress.env("password"));
        cy.get(loginPage.loginButton).click();
        cy.title().should('contain', 'Startseite');
        cy.get(loginPage.profileIcon).should('be.visible');
    })
    it('Should Display Alert Text Attempt to Login with Invalid Credentials', () => {
        loginPage.visitPage(Cypress.env("testDomain"));
        loginPage.typeEmail("invalid@email.com");
        loginPage.typePassword(Cypress.env("password"));
        cy.get(loginPage.loginButton).click();
        cy.get(loginPage.alertText).should('be.visible');
        cy.get(loginPage.alertText).should('contain', 'Diese Kombination aus Zugangsdaten wurde nicht in unserer Datenbank gefunden');
    })
});

describe('Home Page Test', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    it('Should be able to Create a New Geofence Data', () => {
        loginPage.visitPage(Cypress.env("testDomain"));
        loginPage.typeEmail(Cypress.env("email"));
        loginPage.typePassword(Cypress.env("password"));
        cy.get(loginPage.loginButton).click();
        cy.title().should('contain', 'Startseite');
        loginPage.visitPage(Cypress.env("testDomain") + "/geofences");
        cy.get(homePage.geofenceButton).click();
        cy.get(homePage.addressInput).should('be.visible');
        cy.get(homePage.addressInput).type("London").wait(2000).focused().type("{downarrow}").type("{enter}");
        cy.get(homePage.inputGeofenceName).type('Test Geofence');
        cy.get(homePage.submitButton).click();
        cy.get(homePage.searchBox).first().type("Test Geofence").wait(3000);
        cy.get('.css-1eyncsv').should('contain', 'Test Geofence');
    })

    it('Should be able to Update a Geofence Data', () => {
        loginPage.visitPage(Cypress.env("testDomain"));
        loginPage.typeEmail(Cypress.env("email"));
        loginPage.typePassword(Cypress.env("password"));
        cy.get(loginPage.loginButton).click();
        cy.title().should('contain', 'Startseite');
        loginPage.visitPage(Cypress.env("testDomain") + "/geofences");
        cy.get(homePage.updateArrow).first().click();
        cy.get(homePage.updateButton).click();
        cy.get(homePage.inputGeofenceName).clear().type('Test Geofence Updated');
        cy.get(homePage.submitButton).click();
        cy.get(homePage.searchBox).first().type("Test Geofence Updated").wait(3000);
        cy.get('.css-1eyncsv').should('contain', 'Test Geofence Updated');
    })
    it('Should be able to Delete a Geofence Data', () => {
        loginPage.visitPage(Cypress.env("testDomain"));
        loginPage.typeEmail(Cypress.env("email"));
        loginPage.typePassword(Cypress.env("password"));
        cy.get(loginPage.loginButton).click();
        cy.title().should('contain', 'Startseite');
        loginPage.visitPage(Cypress.env("testDomain") + "/geofences");
        cy.get(homePage.deleteButton).first().click();
        cy.get(homePage.confirmDeleteButton).click();
        cy.get(homePage.searchBox).first().type("Test Geofence Updated").wait(3000);
        cy.get(homePage.noDataText).should('be.visible');
        cy.get(homePage.noDataText).should('contain', 'Keine Einträge gefunden');
    })

});