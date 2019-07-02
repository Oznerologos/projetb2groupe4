import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Bien } from "../entity/bien";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Adresse } from "../entity/adresse";

@Injectable({
  providedIn: "root"
})
export class AjoutBienService {
  constructor(private http: HttpClient) {}

  _url = "http://localhost:3000/bien/ajout/";

  posts: Observable<any>;

  getVilles() {
    this.posts = this.http.get("http://localhost:3000/ville");
    return this.posts;
  }

  postAjoutBien(bien: [Partial<Bien>, Partial<Adresse>]) {
    console.log(bien);
    this.posts = this.http
      .post(this._url, bien, {
        headers: {
          Authorization: "bearer " + localStorage.getItem("user_token")
        }
      })
      .pipe(catchError(this.handleError)); // then handle the error;
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
