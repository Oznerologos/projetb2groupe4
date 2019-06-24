import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
<<<<<<< HEAD
import { Bien } from "../bien";
import { Observable } from "rxjs";
=======
import { Bien } from "../entity/bien";
>>>>>>> 13cd568f93dbbed6fd2f1b013d2374ba96270438

@Injectable({
  providedIn: "root"
})
export class AjoutBienService {
  _url = "localhost:3000/bien";
  constructor(private _http: HttpClient) {}

  posts: Observable<any>;

  postAjoutBien(bien: Bien) {
    this.posts = this._http.post<any>(this._url, bien);
    return this.posts;
  }
}
