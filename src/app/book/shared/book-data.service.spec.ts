import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BookDataService } from '../shared/book-data.service';

describe('Service: BookData' , () => {
  let httpMock : HttpTestingController;
  let service : BookDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookDataService]
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(BookDataService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('When the API responses with valid data' , () => {
    it('yields a book' , () => {
      const isbn = '123';

      service
        .getBookByIsbn(isbn)
        .subscribe({
          next: bookFromMockApi => expect(bookFromMockApi.isbn).toBe(isbn)
        });

      httpMock
        .expectOne(`http://localhost:4730/books/${isbn}`)
        .flush({ isbn });
    });
  });

  describe('When the API responses with an error' , () => {
    it('yields a readable error message' , () => {
      const isbn = '123';

      service
        .getBookByIsbn(isbn)
        .subscribe({
          error: errorFromMockApi => expect(errorFromMockApi.message).toBe('Error: Something went wrong.')
        });

      httpMock
        .expectOne(`http://localhost:4730/books/${isbn}`)
        .flush('', { status: 400, statusText: 'Error: BadRequest' });
    });
  });
});
