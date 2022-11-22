import search from '../../e2e/Github/Search/search-selectors.json';
import nav from '../../e2e/Github/Nav/nav-selectors.json';

Cypress.Commands.add('runSearch', () => {
  cy.visit(Cypress.env('BASE_URL'));
  cy.url().should('contain', 'https://github.com');
  cy.get(nav['search-bar'])
    .should('be.visible')
    .click()
    .type('create-react-app');
  cy.get(search['jump-to-search'])
    .should('contain', 'create-react-app')
    .click();
});
