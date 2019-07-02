import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DetailBienService } from "./detail-bien.service";
import { Bien } from "../entity/bien";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Proposition } from "../entity/proposition";

@Component({
  selector: "app-detail-bien",
  templateUrl: "./detail-bien.component.html",
  styleUrls: ["./detail-bien.component.css"]
})
export class DetailBienComponent implements OnInit {
  propositionForm: FormGroup;
  submitted = false;
  public proposition: Partial<Proposition> = new Object();
  public bienId: string;
  public bien: Bien;

  public userLogged: Boolean =
    localStorage.getItem("user_token") === null ? false : true;

  constructor(
    private detailBienService: DetailBienService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.bienId = this.route.snapshot.params.id;

    this.propositionForm = this.fb.group({
      propositionPrixAcheteur: ["", [Validators.required]],
      propositionMessage: ["", [Validators.required]]
    });

    this.detailBienService
      .getBienById(this.bienId)
      .subscribe(
        response => (this.bien = response),
        error => console.error("error", error)
      );
    console.log(this);
  }

  get formControls() {
    return this.propositionForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.propositionForm.valid) {
      this.proposition.propositionPrixAcheteur = this.propositionForm.value[
        "propositionPrixAcheteur"
      ];
      this.proposition.propositionMessage = this.propositionForm.value[
        "propositionMessage"
      ];
      this.proposition.propositionBien = this.bienId;
      this.proposition.propositionPrixVendeur = this.bien.bienPrixDeVente;

      this.detailBienService.addProposition(this.proposition).subscribe(
        response => console.log("Success!", response),

        error => console.error("Error!", error)
      );
      alert("Votre proposition a été envoyé au vendeur");
    } else {
      alert("Veuillez completez le formulaire correctement");
    }
    console.log(this);
  }
}
