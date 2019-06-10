import {And, Then} from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} in the title`, title => {
    cy.title().should('include', title)
})

And(`I see {string} in the title`, title => {
    cy.title().should('include', title)
})