import search from './search-selectors.json';

describe('As a guest (not logged-in), when I search github for the term "create-react-app" from the landing page search input, I see:', () => {
  context('standard view', () => {
    before(() => {
      cy.runSearch();
    });

    it('a count of results', () => {
      cy.get(search['codesearch-results']).should(
        'contain',
        'repository results'
      );
    });

    it('facebook/create-react-app at top of search results', () => {
      cy.url().should('contain', '/search?q=create-react-app');
      cy.get(search['repo-list']).each((repoItem) => {
        cy.get(repoItem[0].children[0])
          .find(search['repo-item-header'])
          .should('contain', 'facebook/create-react-app');
      });
    });

    it('create-react-app in header of each search result on first page', () => {
      cy.get(search['repo-list']).each(() => {
        cy.get(search['repo-list-item'])
          .find(search['repo-item-header'])
          .should('contain', 'create-react-app');
      });
    });
  });

  context('mobile view', () => {
    before(() => {
      cy.runSearch();
      cy.viewport('iphone-x');
    });

    it('a count of results', () => {
      cy.get(search['codesearch-results']).should(
        'contain',
        'repository results'
      );
    });
  });
});
