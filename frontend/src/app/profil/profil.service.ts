import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Utilisateur } from "../entity/utilisateur";
import { Adresse } from "../entity/adresse";

@Injectable({
  providedIn: "root"
})
export class ProfilService {
  constructor(private http: HttpClient) {}

  posts: Observable<any>;

  getUtilisateur() {
    let url: string = "http://localhost:3000/utilisateur/token/";

    this.posts = this.http
      .get(url, {
        headers: {
          Authorization: "bearer " + localStorage.getItem("user_token")
        }
      })
      .pipe(
        catchError(this.handleError) // then handle the error
      );

    return this.posts;
  }

  getAdresse(utilisateurId: string) {
    let url: string =
      "http://localhost:3000/adresse/" + utilisateurId + "/utilisateur";

    this.posts = this.http
      .get(url, {
        headers: {
          Authorization: "bearer " + localStorage.getItem("user_token")
        }
      })
      .pipe(
        catchError(this.handleError) // then handle the error
      );

    return this.posts;
  }

  getBiens(utilisateurId: string) {
    let url: string =
      "http://localhost:3000/bien/" + utilisateurId + "/utilisateur";

    this.posts = this.http
      .get(url, {
        headers: {
          Authorization: "bearer " + localStorage.getItem("user_token")
        }
      })
      .pipe(
        catchError(this.handleError) // then handle the error
      );

    return this.posts;
  }

  updateUtilisateur(utilisateur: [Partial<Utilisateur>, Partial<Adresse>]) {
    let url: string = "http://localhost:3000/utilisateur/token/update/";

    this.posts = this.http
      .put(url, utilisateur, {
        headers: {
          Authorization: "bearer " + localStorage.getItem("user_token")
        }
      })
      .pipe(
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
