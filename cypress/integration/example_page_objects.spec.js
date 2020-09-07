const indexPage = require('../support/pages/indexPage');

describe('Prueba de page objects', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php');
  });
  it('Deberia buscar dress en el input de busqueda', () => {
    const page = new indexPage();
    page.search('dress');
    cy.get('.lighter').contains('"dress"');
  });
  it('Deberia buscar hat en el input de busqueda', () => {
    const page = new indexPage();
    page.search('hat');
    cy.get('.lighter').contains('"hat"');
  });
});