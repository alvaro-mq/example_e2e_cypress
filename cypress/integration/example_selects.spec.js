describe('Prueba de select', () => {
  beforeEach(() => {
    cy.visit('/?id_category=3&controller=category');
  });
  it('Deberia seleccionar un elemento de un select por el texto', () => {
    cy.get('#selectProductSort').select('Price: Highest first');
  });
  it('Deberia seleccionar el primer elemento de un select por el valor', () => {
    cy.get('#selectProductSort').select('name:asc');
  });
});