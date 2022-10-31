import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { tap, catchError} from "rxjs/operators";
import { Book } from "../interface/book";

@Injectable({ providedIn: 'root' })
export class bookService {
  private readonly apiUrl = 'http://localhost:3306';

  constructor(private http: HttpClient) {}

  books$ = <Observable<Response>>
  this.http.get<Response>(`${this.apiUrl}/book/list`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  save$ = (book: Book) => <Observable<Response>>
  this.http.post<Response>(`${this.apiUrl}/book/save`, book)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  ping$ = (ipAddress: string) => <Observable<Response>>
  this.http.get<Response>(`${this.apiUrl}/book/ping/${ipAddress}`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  delete$ = (bookId: string) => <Observable<Response>>
  this.http.get<Response>(`${this.apiUrl}/book/delete/${bookId}`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(`An error occured - Error code: ${error.status}`);
  }
}
