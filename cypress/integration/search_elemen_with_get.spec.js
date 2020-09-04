describe('Formas de encontrar un element', () => {
  it('buscar un texto', () => {
    cy.visit('http://automationpractice.com/index.php');
    cy.get('.search_query.form-control.ac_input').type('-> Por clase'); //Busqueda por clase
    cy.get('#search_query_top').type('-> Por id'); // Busqueda por id
    cy.get('[name=search_query]').type('-> Por name'); //Busqueda por name
    cy.get('[placeholder="Search"').clear(); // Borra el input
  });
});