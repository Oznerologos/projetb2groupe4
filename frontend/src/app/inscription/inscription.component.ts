import { Component, OnInit } from "@angular/core";
import { Utilisateur } from "../entity/utilisateur";
import { Adresse } from "../entity/adresse";

@Component({
  selector: "app-inscription",
  templateUrl: "./inscription.component.html",
  styleUrls: ["./inscription.component.css"]
})
export class InscriptionComponent implements OnInit {
  constructor() {}
  utilisateurModel = new Utilisateur("", "", "", "", "", "", null);
  adresseModel = new Adresse("", "", "", null);

  sexes: string[] = ["Homme", "Femme", "Autre"];

  ngOnInit() {}

  onSubmit() {
    console.log(this.utilisateurModel);
    console.log(this.adresseModel);
  }
}
