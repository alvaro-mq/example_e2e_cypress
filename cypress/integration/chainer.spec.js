// Ejemplo de encadenacion de comandos
describe('Busqueda de varios textos', () => {
  it('deberia escribir y limpiar el input', () => {
    cy.visit('http://automationpractice.com/index.php');
    cy.get('#search_query_top').clear()
      .type('Texto')
      .clear()
      .type('Reemplazo');
  });
});