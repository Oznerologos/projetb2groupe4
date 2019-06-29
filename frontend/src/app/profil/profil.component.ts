import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ProfilService } from "./profil.service";
import { Utilisateur } from "../entity/utilisateur";

@Component({
  selector: "app-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.css"]
})
export class ProfilComponent implements OnInit {
  profilForm: FormGroup;
  public profilResult: [] = [];
  public utilisateur: Partial<Utilisateur> = new Object();

  constructor(
    private fb: FormBuilder,
    private readonly profilService: ProfilService
  ) {}

  ngOnInit() {
    this.profilForm = this.fb.group({});

    console.log(this);
  }

  onSubmit() {
    /*this.profil.bienPrixDeVenteMin =
      this.profilForm.value["bienPrixDeVenteMin"] || 0;
    
    console.log(this);
    this.profilService
      .getBienByParams(this.profil)
      .subscribe(
        response => (this.profilResult = response),
        error => console.error("Error!", error)
      );
    console.log("Success!" + this.profilResult);*/
  }
}
