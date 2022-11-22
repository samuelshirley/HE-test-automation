import footer from './footer-selectors.json';
import about from '../Pages/About/about-selectors.json';

describe('As a guest, when I click the "About" button in the landing page footer: ', () => {
  before(() => {
    cy.visit(Cypress.env('BASE_URL'));
    cy.url().should('contain', 'github.com');
    cy.get(footer.footer)
      .should('contain', 'About')
      .find('a')
      .contains('About')
      .click();
  });

  it('I am taken to the GitHub "About" page', () => {
    cy.url().should('contain', Cypress.env('BASE_URL') + '/about');
    cy.get(about.header).should('contain', `Let's build from here`);
  });
});
