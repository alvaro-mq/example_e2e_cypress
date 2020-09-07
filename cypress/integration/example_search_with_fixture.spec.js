describe('Prueba de busqueda', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Deberia buscar un texto en el input de busqueda', () => {
    cy.fixture('search.json').then(data => {
      cy.log(data);
      cy.get('#search_query_top').type(data.primary);
      cy.get('#searchbox > .btn').click();
      cy.get('.lighter').contains(data.primary);
    });
  });
});