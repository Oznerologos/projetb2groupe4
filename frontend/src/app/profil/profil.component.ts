import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProfilService } from "./profil.service";
import { Utilisateur } from "../entity/utilisateur";
import { Bien } from "../entity/bien";
import { Adresse } from "../entity/adresse";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.css"]
})
export class ProfilComponent implements OnInit {
  utilisateurForm: FormGroup;
  public profilResult: [] = [];
  public utilisateur: Partial<Utilisateur> = new Object();
  public adresse: Partial<Adresse> = new Object();
  public biens: Bien[];

  sexes: [string, string][] = [
    ["Homme", "h"],
    ["Femme", "f"],
    ["Autre", "autre"]
  ];

  villes: [] = [];

  constructor(
    private fb: FormBuilder,
    private readonly profilService: ProfilService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.profilService
      .getUtilisateur()
      .subscribe(
        response => (
          (this.utilisateur = response),
          this.profilService
            .getAdresse(response.utilisateurId)
            .subscribe(response => (this.adresse = response)),
          this.profilService
            .getBiens(response.utilisateurId)
            .subscribe(response => (this.biens = response))
        )
      );

    this.utilisateurForm = this.fb.group(
      {
        utilisateurNom: [
          this.utilisateur.utilisateurNom,
          [Validators.required]
        ],
        utilisateurPrenom: [
          this.utilisateur.utilisateurPrenom,
          [Validators.required]
        ],
        utilisateurMail: [
          this.utilisateur.utilisateurMail,
          [Validators.required, Validators.email]
        ],
        utilisateurMotDePasseOld: ["", [Validators.required]],
        utilisateurMotDePasse: ["", [Validators.required]],
        utilisateurMotDePasseVerif: [""],
        utilisateurTel: [
          this.utilisateur.utilisateurTel,
          [Validators.required]
        ],
        utilisateurSexe: [
          this.utilisateur.utilisateurSexe,
          [Validators.required]
        ],

        adresseCodePostal: [
          this.adresse.adresseCodePostal,
          [Validators.required]
        ],
        adresseNomRue: [this.adresse.adresseNomRue, [Validators.required]],
        adresseNumRue: [this.adresse.adresseNumRue, [Validators.required]],
        adresseVilleId: [this.adresse.adresseVilleId, [Validators.required]]
      },
      { validator: this.checkPasswords }
    );

    console.log(this);
  }

  checkPasswords(utilisateurForm: FormGroup) {
    let oldPass = utilisateurForm.value["utilisateurMotDePasseOld"];
    let pass = utilisateurForm.value["utilisateurMotDePasse"];
    let confirmPass = utilisateurForm.value["utilisateurMotDePasseVerif"];

    return pass === confirmPass ? null : { notSame: true };
  }

  get formControls() {
    return this.utilisateurForm.controls;
  }

  onSubmit() {
    if (this.utilisateurForm.valid) {
      this.utilisateur.utilisateurNom = this.utilisateurForm.value[
        "utilisateurNom"
      ];
      this.utilisateur.utilisateurPrenom = this.utilisateurForm.value[
        "utilisateurPrenom"
      ];
      this.utilisateur.utilisateurMail = this.utilisateurForm.value[
        "utilisateurMail"
      ];
      this.utilisateur.utilisateurMotDePasse = this.utilisateurForm.value[
        "utilisateurMotDePasse"
      ];
      this.utilisateur.utilisateurTel = this.utilisateurForm.value[
        "utilisateurTel"
      ];
      this.utilisateur.utilisateurSexe = this.utilisateurForm.value[
        "utilisateurSexe"
      ];

      this.adresse.adresseCodePostal = this.utilisateurForm.value[
        "adresseCodePostal"
      ];
      this.adresse.adresseNomRue = this.utilisateurForm.value["adresseNomRue"];
      this.adresse.adresseNumRue = this.utilisateurForm.value["adresseNumRue"];
      this.adresse.adresseVilleId = this.utilisateurForm.value[
        "adresseVilleId"
      ];

      this.profilService
        .updateUtilisateur([this.utilisateur, this.adresse])
        .subscribe(
          response => console.log(response),
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
}
