describe('Pruebas de formas de encontrar un element', () => {
  it('Deberia buscar un texto', () => {
    cy.visit('/');
    cy.get('.search_query.form-control.ac_input').type('-> Por clase'); //Busqueda por clase
    cy.get('#search_query_top').type('-> Por id'); // Busqueda por id
    cy.get('[name=search_query]').type('-> Por name'); //Busqueda por name
    cy.get('[placeholder="Search"').clear(); // Borra el input
  });
});