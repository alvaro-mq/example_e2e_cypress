describe('Prueba de busqueda', () => {
  it('Deberia buscar un texto en el input de busqueda', () => {
    cy.visit('/');
    cy.get('#search_query_top').type('dress');
    cy.get('#searchbox > .btn').click();
    cy.get('.lighter').contains('"dress"');
  });
});