describe('Prueba de busqueda', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.fixture('search.json').as('searchData');
  });
  it('Deberia buscar un texto primario del fixture search en el input de busqueda', () => {
    cy.fixture('search.json').then(data => {
      cy.log(data);
      cy.get('#search_query_top').type(data.primary);
      cy.get('#searchbox > .btn').click();
      cy.get('.lighter').contains(data.primary);
    });
  });
  it('Deberia buscar un texto secundario del fixture search en el input de busqueda', () => {
    cy.get('@searchData').then(data => {
      cy.log(data);
      cy.get('#search_query_top').type(data.secondary);
      cy.get('#searchbox > .btn').click();
      cy.get('.lighter').contains(data.secondary);
    });
  });
});