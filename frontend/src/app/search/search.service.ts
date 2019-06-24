import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class SearchService {
  urlBien = "http://localhost:3000/bien/search/";

  constructor(private http: HttpClient) {}

  posts: Observable<any>;

  getBien(bienData: string) {
    let url: string = this.urlBien + bienData;

    this.posts = this.http.get(url, {}).pipe(
      catchError(this.handleError) // then handle the error
    );

    return this.posts;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
