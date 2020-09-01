import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BookDataService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http
      .get<Book[]>('http://localhost:4730/books')
      .pipe(
        catchError(() =>
          throwError({ message: 'Error: Something went wrong.' })
        )
      );
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`http://localhost:4730/books/${isbn}`)
    .pipe(
      catchError(() =>
        throwError({ message: 'Error: Something went wrong.' })
      )
    );
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>('http://localhost:4730/books', book)
    .pipe(
      catchError(() =>
        throwError({ message: 'Error: Something went wrong.' })
      )
    );
  }

  updateBook(isbn: string, vector: any): Observable<Book> {
    return this.http.patch<Book>(`http://localhost:4730/books/${isbn}`, vector)
    .pipe(
      catchError(() =>
        throwError({ message: 'Error: Something went wrong.' })
      )
    );
  }
}
