import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProfilService } from "./profil.service";
import { Utilisateur } from "../entity/utilisateur";
import { Bien } from "../entity/bien";
import { Adresse } from "../entity/adresse";
import { Router } from "@angular/router";
import { Proposition } from "../entity/proposition";

@Component({
  selector: "app-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.css"]
})
export class ProfilComponent implements OnInit {
  utilisateurForm: FormGroup;
  mdpForm: FormGroup;
  propositionForm: FormGroup;
  public profilResult: [] = [];
  public utilisateur: Partial<Utilisateur> = new Object();
  public adresse: Partial<Adresse> = new Object();
  public mdp: string;
  public biens: Bien[];
  public proposition: Partial<Proposition> = new Object();

  sexes: [string, string][] = [
    ["Homme", "h"],
    ["Femme", "f"],
    ["Autre", "autre"]
  ];

  villes: [] = [];

  constructor(
    private fb: FormBuilder,
    private readonly profilService: ProfilService,
    private router: Router
  ) {}

  ngOnInit() {
    if (localStorage.getItem("user_token") === null) {
      alert("Votre session a expiré !");
      location.reload();
      this.router.navigate(["/home"]);
    }

    this.utilisateurForm = this.fb.group({
      utilisateurNom: ["", [Validators.required]],
      utilisateurPrenom: ["", [Validators.required]],
      utilisateurMail: ["", [Validators.required, Validators.email]],

      utilisateurTel: [this.utilisateur.utilisateurTel, [Validators.required]],
      utilisateurSexe: ["", [Validators.required]],

      adresseCodePostal: ["", [Validators.required]],
      adresseNomRue: ["", [Validators.required]],
      adresseNumRue: ["", [Validators.required]],
      adresseVilleId: ["", [Validators.required]]
    });

    this.mdpForm = this.fb.group(
      {
        utilisateurMotDePasseOld: ["", [Validators.required]],
        utilisateurMotDePasse: ["", [Validators.required]],
        utilisateurMotDePasseVerif: ["", [Validators.required]]
      },
      { validator: this.checkPasswords }
    );

    this.propositionForm = this.fb.group(
      {
        propositionPrixVendeur: ["", [Validators.required]],
        propositionMessage: ["", [Validators.required]]
      },
      {}
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
            .subscribe(
              response => (
                (this.biens = response), this.getBienPropositions(response)
              )
            ),
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

  getBienPropositions(biens: Bien[]) {
    for (let i = 0; i < biens.length; i++) {
      this.profilService
        .getPropositions(biens[i].bienId)
        .subscribe(
          response => (this.biens[i].propositions = response),
          error => console.error("error!", error)
        );
    }
  }

  checkPasswords(group: FormGroup) {
    let pass = group.value["utilisateurMotDePasse"];
    let confirmPass = group.value["utilisateurMotDePasseVerif"];

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
          response => (console.log(response), this.verifUpdate(response)),
          error => console.error("error!", error)
        );
    } else {
      alert("Veuillez complétez le formulaire correctement !");
    }
    console.log(this);
  }

  verifUpdate(result) {
    if (result != null) {
      alert("Informations mises à jour avec succès !");
    } else {
      alert("L'adresse mail n'est pas disponible !");
    }
  }

  onSubmitMdp() {
    if (this.mdpForm.valid) {
      let oldPass = this.mdpForm.value["utilisateurMotDePasseOld"];

      this.profilService
        .checkPassword([this.utilisateur.utilisateurId, oldPass])
        .subscribe(
          response => (console.log(response), this.updateMdp(response)),
          error => console.error("error!", error)
        );
    } else {
      alert("Veuillez complétez le formulaire correctement !");
    }
    console.log(this);
  }

  updateMdp(result) {
    if (result == true) {
      this.mdp = this.mdpForm.value["utilisateurMotDePasse"];
      this.profilService
        .updateMdp([this.utilisateur.utilisateurId, this.mdp])
        .subscribe(
          response => console.log(response),
          error => console.error("error!", error)
        );
      alert("Mot de passe mis à jour avec Succès !");
    } else {
      alert("Ancien mot de passe incorrect !");
    }
  }

  supprimerUtilisateur() {
    this.profilService
      .deleteUtilisateur(this.utilisateur.utilisateurId)
      .subscribe(
        response => console.log(response),
        error => console.error("error!", error)
      );
    localStorage.removeItem("user_token");
    alert("Votre compte a été supprimé avec succès !");
    location.reload();
    this.router.navigate(["/home"]);
  }

  supprimerBien(bienId: string) {
    this.profilService
      .deleteBien(bienId)
      .subscribe(
        response => console.log(response),
        error => console.error("error!", error)
      );
    location.reload();
    alert("Le bien a été supprimé avec succès !");
  }

  putProposition(propositionClient, propositionBien, propositionPrixAcheteur) {
    this.proposition.propositionPrixVendeur = this.propositionForm.value[
      "propositionPrixVendeur"
    ];
    this.proposition.propositionMessage = this.propositionForm.value[
      "propositionMessage"
    ];
    this.proposition.propositionBien = propositionBien;
    this.proposition.propositionPrixAcheteur = propositionPrixAcheteur;
    this.proposition.propositionClient = propositionClient;

    this.profilService.addProposition(this.proposition).subscribe(
      response => console.log("Success!", response),

      error => console.error("Error!", error)
    );
    alert("Votre réponse a été envoyée avec succès !");
  }
}
