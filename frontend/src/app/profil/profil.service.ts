import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProfilService {
  urlBien = "http://localhost:3000/bien/profil/";

  constructor(private http: HttpClient) {}

  posts: Observable<any>;

  getBien(bienData: string) {
    let url: string = this.urlBien + bienData;

    this.posts = this.http.get(url, {}).pipe(
      catchError(this.handleError) // then handle the error
    );

    return this.posts;
  }

  /*
  getBienByParams(profilBien: Partial<Profil>) {
    let url: string = this.urlBien;

    this.posts = this.http.post(url, profilBien, {}).pipe(
      catchError(this.handleError) // then handle the error
    );

    return this.posts;
  }*/

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
