describe('Prueba de before y after', () => {
  before(() => {
    cy.log('Ejecutando antes de todo');
  });
  
  after(() => {
    cy.log('Ejecutando despues de todo');
  });

  beforeEach(() => {
    cy.log('Ejecutando antes de cada caso de prueba');
    cy.visit('/');
  });

  afterEach(() => {
    cy.log('Ejecutando despues de cada caso de prueba');
  });

  it('Deberia buscar dress', () => {
    cy.get('#search_query_top').type('dress');
    cy.get('#searchbox > .btn').click();
    cy.get('.lighter').contains('"dress"');
  });

  it('Deberia buscar hat', () => {
    cy.get('#search_query_top').type('hat');
    cy.get('#searchbox > .btn').click();
    cy.get('.lighter').contains('"hat"');
  });
});