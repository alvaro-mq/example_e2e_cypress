describe('Prueba de busqueda con uso de comando', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.fixture('search.json').as('searchData');
  });
  it('Deberia buscar un texto primario del fixture search en el input de busqueda', () => {
    cy.fixture('search.json').then(data => {
      cy.search(data.primary);
      cy.get('.lighter').contains(data.primary);
    });
  });
  it('Deberia buscar un texto secundario del fixture search en el input de busqueda', () => {
    cy.get('@searchData').then(data => {
      cy.search(data.secondary);
      cy.get('.lighter').contains(data.secondary);
    });
  });
});