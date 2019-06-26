import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Bien } from "../entity/bien";
import { AjoutBienService } from "./ajout-bien.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-ajout-bien",
  templateUrl: "./ajout-bien.component.html",
  styleUrls: ["./ajout-bien.component.css"]
})
export class AjoutBienComponent implements OnInit {
  constructor(private readonly ajoutBienService: AjoutBienService) {}
  ajoutBienForm: NgForm;
  public ajoutBienModel: Partial<Bien> = new Object();

  dependances = ["Aucune", "Piscine", "Garage", "jardin", "Sous sol"];
  /*
  ajoutBien = new Bien(
    "Maison",
    "https://v.seloger.com/s/crop/310x225/visuels/0/m/l/4/0ml42xbt1n3itaboek3qec5dtskdgw6nlscu7j69k.jpg",
    2,
    "Dans lotissement fermé, très bien entretenu, datant des années 2000, à proximité de la gare de la Blancarde dans le 12ème arrondissement. Belle villa indépendante de 138m² sur une parcelle de 450m².",
    300000,
    350000,
    "GARAGE",
    "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjgnNzTruPiAhW1A2MBHW3-C6YQjRx6BAgBEAU&url=https%3A%2F%2Fwww.seloger.com%2Fimmobilier%2Fachat%2Fimmo-chanteloup-les-vignes-78%2Fbien-maison%2F&psig=AOvVaw0pdo7wopjNzYMNpppUx-9r&ust=1560409001717179"
  );

  */
  ngOnInit() {}

  onSubmit() {
    this.ajoutBienModel.description =
      this.ajoutBienForm["descriptionBien"] || null;

    this.ajoutBienModel.image = this.ajoutBienForm["imageBien"] || null;

    this.ajoutBienModel.imageDependance =
      this.ajoutBienForm["imageDependance"] || null;

    this.ajoutBienModel.nomDependance =
      this.ajoutBienForm["nomDependance"] || null;

    this.ajoutBienModel.nombreEtage = this.ajoutBienForm["nombreEtage"] || 0;

    this.ajoutBienModel.prixMinimum = this.ajoutBienForm["prixMinimum"] || 0;

    this.ajoutBienModel.prixVente = this.ajoutBienForm["prixDeVente"] || 0;

    this.ajoutBienModel.typeBien = this.ajoutBienForm["typeBien"] || null;
    console.log(this);
    this.ajoutBienService
      .postAjoutBien(this.ajoutBienModel)
      .subscribe(
        response => console.log("Success!", response),
        error => console.error("Error!", error)
      );
  }
}
