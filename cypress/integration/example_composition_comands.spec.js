// Ejemplo de encadenacion de comandos
describe('Prueba de encadenacion de comandos', () => {
  it('deberia escribir un texto y limpiar el input', () => {
    cy.visit('http://automationpractice.com/index.php');
    cy.get('#search_query_top').clear()
      .type('Texto')
      .clear()
      .type('Reemplazo');
  });
});