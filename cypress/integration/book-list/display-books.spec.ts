describe('When the app has been started' , () => {
  it('displays the title "Book Monkey"' , () => {
    cy.visit('http://localhost:4200');
    cy.get('mat-toolbar').contains('Book Monkey');
  });
});
