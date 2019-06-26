import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Bien } from "../entity/bien";
import { Observable } from "rxjs";

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
