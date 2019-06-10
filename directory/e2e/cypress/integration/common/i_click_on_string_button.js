import {And, Then} from "cypress-cucumber-preprocessor/steps";

And(`I click on {string} button`, btn => {
    btn = '#' + btn.toLowerCase().replace(' ', '-')
    cy.get(btn).click()
})

Then(`I click on {string} button`, btn => {
    btn = '#' + btn.toLowerCase().replace(' ', '-')
    cy.get(btn).click()
})
