describe('Fixture (stubbing)' , () => {
  beforeEach(() => {
    cy.server();
    cy.route('GET', 'http://localhost:4730/books', 'fixture:books.json');
    cy.visit('http://localhost:4200');
    cy.get('[data-testid=book-list__book]').as('books');
  });

  describe('When requesting books' , () => {
    it('yields a book list with 2 books' , () => {
      cy.get('@books').should('have.length', 2);
    });
  });
});
