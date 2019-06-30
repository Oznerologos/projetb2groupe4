import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Utilisateur } from "../entity/utilisateur";
import { Adresse } from "../entity/adresse";

@Injectable({
  providedIn: "root"
})
export class InscriptionService {
  constructor(private http: HttpClient) {}
  observable: Observable<any>;

  getVilles() {
    this.observable = this.http.get("http://localhost:3000/ville");
    return this.observable;
  }

  addUser(user: [Partial<Utilisateur>, Partial<Adresse>]) {
    this.observable = this.http.post(
      "http://localhost:3000/auth/inscription",
      user
    );
    return this.observable;
  }
}
