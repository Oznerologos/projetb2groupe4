import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inscription",
  templateUrl: "./inscription.component.html",
  styleUrls: ["./inscription.component.css"]
})
export class InscriptionComponent implements OnInit {
  constructor() {}
  sexes: string[] = ["Homme", "Femme", "Autre"];
  ngOnInit() {}

  onSubmit() {}
}
