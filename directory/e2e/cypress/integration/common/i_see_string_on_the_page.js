import {And, Then} from "cypress-cucumber-preprocessor/steps";

And(`I see {string} on the page`, text => {
    cy.contains(text)
})

Then(`I see {string} on the page`, text => {
    cy.contains(text)
})