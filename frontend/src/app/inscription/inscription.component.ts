import { Component, OnInit } from "@angular/core";
import { Utilisateur } from "../entity/utilisateur";
import { Adresse } from "../entity/adresse";
import { HttpClient } from "@angular/common/http";
import { InscriptionService } from "./inscription.service";

@Component({
  selector: "app-inscription",
  templateUrl: "./inscription.component.html",
  styleUrls: ["./inscription.component.css"]
})
export class InscriptionComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private readonly inscriptionService: InscriptionService
  ) {}
  utilisateurModel = new Utilisateur("", "", "", "", "", "");
  adresseModel = new Adresse("", "", "", null);

  sexes: [string, string][] = [
    ["Homme", "h"],
    ["Femme", "f"],
    ["Autre", "autre"]
  ];

  villes: [] = [];

  ngOnInit() {
    this.inscriptionService
      .getVilles()
      .subscribe(
        response => (this.villes = response),
        error => console.error("error!", error)
      );
  }

  onSubmit() {
    this.inscriptionService
      .addUser([this.utilisateurModel, this.adresseModel])
      .subscribe(
        response => console.log(response),
        error => console.error("error!", error)
      );
    console.log(this);
  }
}
