describe('search test cases', () => {
  before(() => {
    cy.log('Ejecutando antes de todo');
  });
  after(() => {
    cy.log('Ejecutando despues de todo');
  });
  it('Search with results', () => {
    cy.visit('http://automationpractice.com/index.php');
    cy.get('#search_query_top').type('dress');
    cy.get('#searchbox > .btn').click();
    cy.get('.lighter').contains('"dress"');
  });

  it('Search with results', () => {
    cy.visit('http://automationpractice.com/index.php');
    cy.get('#search_query_top').type('hat');
    cy.get('#searchbox > .btn').click();
    cy.get('.lighter').contains('"hat"');
  });
});