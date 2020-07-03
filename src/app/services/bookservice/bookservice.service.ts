import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { HttpService } from '../http.service';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from 'src/app/model/book.model';
import { tap, map, catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  private _autoRefresh$ = new Subject();
  private searchBookData = new Subject<any>();
  private httpOtions = {
    headers: new HttpHeaders({ "content-type": "application/json" }),
  };

  get autoRefresh$() {
    return this._autoRefresh$;
  }
  constructor(private http: HttpClient, private httpservice: HttpService) {}
  getBookList(): Observable<any> {
    return this.httpservice.get(
      `${environment.bookApiUrl}/${environment.getBooksList}`,
      { headers: new HttpHeaders().set("token", sessionStorage.token) }
    );
  }
  getSellerBookList(): Observable<any> {
    return this.httpservice.get(
      `${environment.bookApiUrl}/${environment.getSellerBookList}`,
      { headers: new HttpHeaders().set("token", sessionStorage.token) }
    );
  }

  addBook(book: Book): Observable<any> {
    return this.httpservice
      .post(`${environment.bookApiUrl}/${environment.addbook}`, book, {
        headers: new HttpHeaders().set("token", sessionStorage.token),
      })
      .pipe(
        tap(() => {
          this._autoRefresh$.next();
        })
      );
  }

  uploadBookImage(bookId, imageData, formData): Observable<any> {
    return this.httpservice
      .post(
        `${environment.bookApiUrl}/${environment.addBookImage}?bookId=${bookId}`,
        formData,
        {
          headers: new HttpHeaders().set("token", sessionStorage.token),
          reportProgress: true,
          observe: "events",
        }
      )
      .pipe(
        tap(() => {
          this._autoRefresh$.next();
        })
      );
  }

  private getEventMessage(event: HttpEvent<any>, formData) {
    switch (event.type) {
      case HttpEventType.UploadProgress:
        return this.fileUploadProgress(event);
      case HttpEventType.Response:
        return this.apiResponse(event);
      default:
    }
  }

  private apiResponse(event) {
    return event.body;
  }

  private fileUploadProgress(event) {
    const percentageDone = Math.round((100 * event.loaded) / event.total);
    return { status: "progress", message: percentageDone };
  }

  deleteBook(bookId): Observable<any> {
    return this.httpservice
      .delete(
        `${environment.bookApiUrl}/${environment.deleteBook}?bookId=${bookId}`,
        { headers: new HttpHeaders().set("token", sessionStorage.token) }
      )
      .pipe(
        tap(() => {
          this._autoRefresh$.next();
        })
      );
  }

  setSearchBookData(message: any) {
    console.log("set service", message);
    return this.searchBookData.next({ books: message });
  }
  getSearchBookData(): Observable<any> {
    console.log("get service");
    return this.searchBookData.asObservable();
  }
}