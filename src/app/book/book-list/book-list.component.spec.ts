import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { RouterTestingModule } from '@angular/router/testing';
import { BookListComponent } from './book-list.component';
import { BookDataService } from '../shared/book-data.service';
import { of } from 'rxjs';

describe('Component: BookList (<ws-book-list>)', () => {
  let fixture : ComponentFixture<BookListComponent>;
  let bookDataService : BookDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListComponent ],
      imports: [ MatListModule, RouterTestingModule ],
      providers: [
        {
          provide: BookDataService,
          useFactory() {
            return {
              getBooks() {
                return null;
              }
            };
          }
        }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(BookListComponent);
    bookDataService = TestBed.inject(BookDataService);
  });

  describe('When the component is displayed' , () => {
    it('shows the heading "Books"' , () => {
      const heading : HTMLElement = fixture.debugElement.query(By.css('[data-testid=book-list_heading]')).nativeElement;
      expect(heading.innerText).toEqual('Books');
    });
  });

  describe('When the API delivers invalid data', () => {
    it('does not render any book', () => {
      bookDataService.getBooks = () => of(null);
      fixture.detectChanges();

      const books : DebugElement[] = fixture.debugElement.queryAll(By.css('[data-testid=book-list_author]'));
      expect(books.length).toBe(0);
    });
  });

  describe('When the API delivers valid data' , () => {
    it('displays the author name' , () => {
      bookDataService.getBooks = () => of([{author:'Dummy1'}, {author:'Dummy2'}] as any);
      fixture.detectChanges();

      const books : DebugElement[] = fixture.debugElement.queryAll(By.css('[data-testid=book-list_author]'));
      expect(books[0].nativeElement.innerHTML).toEqual('Dummy1');
      expect(books[1].nativeElement.innerHTML).toEqual('Dummy2');
    });
  });
});
