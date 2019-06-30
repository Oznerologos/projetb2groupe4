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
    this.utilisateurForm = this.fb.group(
      {
        utilisateurNom: ["", [Validators.required]],
        utilisateurPrenom: ["", [Validators.required]],
        utilisateurMail: ["", [Validators.required, Validators.email]],
        utilisateurMotDePasseOld: [""],
        utilisateurMotDePasse: [""],
        utilisateurMotDePasseVerif: [""],
        utilisateurTel: [
          this.utilisateur.utilisateurTel,
          [Validators.required]
        ],
        utilisateurSexe: ["", [Validators.required]],

        adresseCodePostal: ["", [Validators.required]],
        adresseNomRue: ["", [Validators.required]],
        adresseNumRue: ["", [Validators.required]],
        adresseVilleId: ["", [Validators.required]]
      },
      { validator: this.checkPasswords }
    );

    this.profilService
      .getUtilisateur()
      .subscribe(
        response => (
          (this.utilisateur = response),
          this.profilService
            .getAdresse(response.utilisateurId)
            .subscribe(
              response => (
                (this.adresse = response),
                this.utilisateurForm
                  .get("adresseCodePostal")
                  .setValue(this.adresse.adresseCodePostal),
                this.utilisateurForm
                  .get("adresseNomRue")
                  .setValue(this.adresse.adresseNomRue),
                this.utilisateurForm
                  .get("adresseNumRue")
                  .setValue(this.adresse.adresseNumRue),
                this.utilisateurForm
                  .get("adresseVilleId")
                  .setValue(this.adresse.adresseVilleId)
              )
            ),
          this.profilService
            .getBiens(response.utilisateurId)
            .subscribe(response => (this.biens = response)),
          this.utilisateurForm
            .get("utilisateurNom")
            .setValue(this.utilisateur.utilisateurNom),
          this.utilisateurForm
            .get("utilisateurPrenom")
            .setValue(this.utilisateur.utilisateurPrenom),
          this.utilisateurForm
            .get("utilisateurMail")
            .setValue(this.utilisateur.utilisateurMail),
          this.utilisateurForm
            .get("utilisateurTel")
            .setValue(this.utilisateur.utilisateurTel),
          this.utilisateurForm
            .get("utilisateurSexe")
            .setValue(this.utilisateur.utilisateurSexe)
        )
      );

    this.profilService
      .getVilles()
      .subscribe(
        response => (this.villes = response),
        error => console.error("error!", error)
      );

    console.log(this);
  }

  checkPasswords(utilisateurForm: FormGroup) {
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
      let oldPass = this.utilisateurForm.value["utilisateurMotDePasseOld"];
      if (
        this.profilService
          .checkPassword([this.utilisateur.utilisateurId, oldPass])
          .subscribe(
            response => console.log(response),
            error => console.error("error!", error)
          )
      ) {
        this.utilisateur.utilisateurMotDePasse = this.utilisateurForm.value[
          "utilisateurMotDePasse"
        ];
      } else {
        this.toastr.error("Ancien mot de passe incorrect", "Error");
      }
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
        .updateUtilisateur([
          this.utilisateur.utilisateurId,
          this.utilisateur,
          this.adresse
        ])
        .subscribe(
          response => console.log(response),
          error => console.error("error!", error)
        );
    } else {
      this.toastr.error("Veuillez completez le formulaire correctement");
    }
    console.log(this);
  }
}
