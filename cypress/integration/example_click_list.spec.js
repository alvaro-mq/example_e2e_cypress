describe('Prueba de lista', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php');
  });

  it('Deberia seleccionar el primer elemento de una lista', () => {
    cy.get('[class=sf-with-ul]').first().click();
  });

  it('Deberia seleccionar la seccion de Dresses', () => {
    cy.get('[class=sf-with-ul]').eq(3).click();
  });
});