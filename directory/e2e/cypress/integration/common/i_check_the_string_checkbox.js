import {When} from "cypress-cucumber-preprocessor/steps";

When('I check the {string} checkbox', checkBox => {
    checkBox = '#' + checkBox.toLowerCase().replace(' ', '-')
    cy.get(checkBox).click()
})