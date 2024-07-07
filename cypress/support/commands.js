Cypress.Commands.add('visitSite', () => {
    const defaultUrl = Cypress.config('firstBaseUrl');
    //cy.clock(setTimeout)//freeze the clock
    cy.visit(defaultUrl);
  });

  Cypress.Commands.add('loginDone', () => {
    const defaultUrl = Cypress.config('firstBaseUrl');
    cy.visit(defaultUrl);
    cy.get('[data-test="username"]').should('be.visible').type('standard_user')
    cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
    cy.get('[data-test="login-button"]').should('be.visible').click({force: true})
    //Assert
    cy.url().should('eq','https://www.saucedemo.com/inventory.html')
  });
