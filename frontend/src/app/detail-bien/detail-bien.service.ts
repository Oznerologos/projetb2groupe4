import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Proposition } from "../entity/proposition";

@Injectable({
  providedIn: "root"
})
export class DetailBienService {
  constructor(private http: HttpClient) {}

  bien: Observable<any>;

  getBienById(bienId: string) {
    let url: string = "http://localhost:3000/bien/" + bienId;
    this.bien = this.http.get(url);
    return this.bien;
  }

  addProposition(proposition: Partial<Proposition>) {
    let url: string = "http://localhost:3000/proposition/";
    this.bien = this.http.post(url, proposition, {
      headers: {
        Authorization: "bearer " + localStorage.getItem("user_token")
      }
    });
    return this.bien;
  }
}
