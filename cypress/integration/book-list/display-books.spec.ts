describe('When the app has been started' , () => {
  it('displays the title "Book Monkey"' , () => {
    cy.visit('http://localhost:4200');
    cy.get('mat-toolbar').contains('Book Monkey');
  });
});

describe('Create book' , () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.get('[data-testid=book-list__book]').as('books');
  });

  describe('When a new book is added' , () => {
    it('displays the new book in the list' , () => {
      const isbn = Math.floor(1000000000000 + Math.random() * 900000);
      let booksCount = 0;
      cy.get('@books')
        .then(books => (booksCount = books.length))
        .then(() => cy.get('[data-testid=nav_create]').click())
        .then(() => cy.get('[formcontrolname=isbn]').type(`${isbn}`))
        .then(() => cy.get('[formcontrolname=title]').type('Testing for Dummies'))
        .then(() => cy.get('[formcontrolname=author]').type('Dummy Mc Dummy'))
        .then(() => cy.get('[data-testid=book_create]').click())
        .then(() => cy.get('[data-testid=nav_books]').click())
        .then(() => cy.get('@books'))
        .then(books => expect(books.length).to.eq(booksCount+1));
    });
  });
});
