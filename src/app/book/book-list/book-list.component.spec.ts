import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { BookListComponent } from './book-list.component';
import { BookDataService } from '../shared/book-data.service';

describe('Component: BookList (<ws-book-list>)', () => {
  let fixture : ComponentFixture<BookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListComponent ],
      imports: [ MatListModule, RouterModule ],
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
  });

  describe('When the component is displayed' , () => {
    it('shows the heading "Books"' , () => {
      const heading : HTMLElement = fixture.debugElement.query(By.css('[data-testid=book-list_heading]')).nativeElement;
      expect(heading.innerText).toEqual('Books');
    });
  });

  describe('When the API delivers invalid data', () => {
    it('does not render any book', () => {

    });
  });

  describe('When the API delivers valid data' , () => {
    it('displays the author name' , () => {

    });
  });
});
