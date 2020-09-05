describe('search test cases', () => {
  before(() => {
    cy.log('Ejecutando antes de todo');
  });
  
  after(() => {
    cy.log('Ejecutando despues de todo');
  });

  beforeEach(() => {
    cy.log('Ejecutando antes de cada caso de prueba');
    cy.visit('http://automationpractice.com/index.php');
  });

  afterEach(() => {
    cy.log('Ejecutando despues de cada caso de prueba');
  });

  it('Search with results', () => {
    cy.get('#search_query_top').type('dress');
    cy.get('#searchbox > .btn').click();
    cy.get('.lighter').contains('"dress"');
  });

  it('Search with results', () => {
    cy.get('#search_query_top').type('hat');
    cy.get('#searchbox > .btn').click();
    cy.get('.lighter').contains('"hat"');
  });
});