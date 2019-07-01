import { Component, OnInit } from "@angular/core";
import { Utilisateur } from "../entity/utilisateur";
import { Adresse } from "../entity/adresse";
import { InscriptionService } from "./inscription.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-inscription",
  templateUrl: "./inscription.component.html",
  styleUrls: ["./inscription.component.css"]
})
export class InscriptionComponent implements OnInit {
  inscriptionForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private readonly inscriptionService: InscriptionService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  utilisateur: Partial<Utilisateur> = new Object();
  adresse: Partial<Adresse> = new Object();

  sexes: [string, string][] = [
    ["Homme", "h"],
    ["Femme", "f"],
    ["Autre", "autre"]
  ];

  villes: [] = [];

  inscriptionResult: JSON = null;

  ngOnInit() {
    this.inscriptionForm = this.fb.group(
      {
        utilisateurNom: ["", [Validators.required]],
        utilisateurPrenom: ["", [Validators.required]],
        utilisateurMail: ["", [Validators.required, Validators.email]],
        utilisateurMotDePasse: ["", [Validators.required]],
        utilisateurMotDePasseVerif: [""],
        utilisateurTel: ["", [Validators.required]],
        utilisateurSexe: ["", [Validators.required]],

        adresseCodePostal: ["", [Validators.required]],
        adresseNomRue: ["", [Validators.required]],
        adresseNumRue: ["", [Validators.required]],
        adresseVilleId: ["", [Validators.required]]
      },
      { validator: this.checkPasswords }
    );

    this.inscriptionService
      .getVilles()
      .subscribe(
        response => (this.villes = response),
        error => console.error("error!", error)
      );
  }

  checkPasswords(inscriptionForm: FormGroup) {
    let pass = inscriptionForm.value["utilisateurMotDePasse"];
    let confirmPass = inscriptionForm.value["utilisateurMotDePasseVerif"];

    return pass === confirmPass ? null : { notSame: true };
  }

  get formControls() {
    return this.inscriptionForm.controls;
  }

  onSubmit() {
    if (this.inscriptionForm.valid) {
      this.utilisateur.utilisateurNom = this.inscriptionForm.value[
        "utilisateurNom"
      ];
      this.utilisateur.utilisateurPrenom = this.inscriptionForm.value[
        "utilisateurPrenom"
      ];

      this.utilisateur.utilisateurMail = this.inscriptionForm.value[
        "utilisateurMail"
      ];

      this.utilisateur.utilisateurMotDePasse = this.inscriptionForm.value[
        "utilisateurMotDePasse"
      ];
      this.utilisateur.utilisateurTel = this.inscriptionForm.value[
        "utilisateurTel"
      ];
      this.utilisateur.utilisateurSexe = this.inscriptionForm.value[
        "utilisateurSexe"
      ];

      this.adresse.adresseCodePostal = this.inscriptionForm.value[
        "adresseCodePostal"
      ];
      this.adresse.adresseNomRue = this.inscriptionForm.value["adresseNomRue"];
      this.adresse.adresseNumRue = this.inscriptionForm.value["adresseNumRue"];
      this.adresse.adresseVilleId = this.inscriptionForm.value[
        "adresseVilleId"
      ];

      this.inscriptionService
        .addUser([this.utilisateur, this.adresse])
        .subscribe(
          response => (
            (this.inscriptionResult = response),
            console.log(response),
            this.redirect(this.inscriptionResult)
          ),
          error => console.error("error!", error)
        );
    } else {
      this.toastr.error(
        "Veuillez completez le formulaire correctement",
        "Error"
      );
    }

    console.log(this);
  }

  redirect(result) {
    if (result != null) {
      location.reload();
      this.router.navigate(["/home"]);
    } else {
      this.toastr.error("l'adresse mail est déjà utilisée", "Error");
    }
  }
}
