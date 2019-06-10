import {
    Given
} from "cypress-cucumber-preprocessor/steps";

Given('I open the page', () => {
    cy.visit('https://www.google.ro/')
})
