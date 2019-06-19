import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Bien } from "../bien";

@Injectable({
  providedIn: "root"
})
export class AjoutBienService {
  _url = "";
  constructor(private _http: HttpClient) {}

  enroll(bien: Bien) {
    return this._http.post<any>(this._url, bien);
  }
}
