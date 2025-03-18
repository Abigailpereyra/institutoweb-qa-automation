Cypress.Commands.add('clicking', (selector) => {
    cy.get(selector).click();
    })