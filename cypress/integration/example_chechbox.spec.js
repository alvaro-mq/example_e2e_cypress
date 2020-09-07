describe('Prueba de checkbox', () => {
  beforeEach(() => {
    cy.visit('/?id_category=3&controller=category');
  });
  it('Deberia seleccionar un check de category y otro de size', () => {
    cy.get('#layered_category_4').check();
    cy.get('#layered_id_attribute_group_3').check();

    cy.get('#layered_id_attribute_group_3').uncheck();
  });
});