import { Component, OnInit } from "@angular/core";
import { SearchService } from "./search.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SearchBien } from "../entity/searchBien";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  public listeBienType: string[] = ["NONE", "Maison", "Appartement"];
  public searchResult: [] = [];
  public searchBien: Partial<SearchBien> = new Object();
  constructor(
    private fb: FormBuilder,
    private readonly searchService: SearchService
  ) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      bienTitre: ["", [Validators.required, Validators.minLength(0)]],
      bienType: ["", [Validators.required]]
    });
  }

  get bienTitre() {
    return this.searchForm.get("bienTitre");
  }

  get bienType() {
    return this.searchForm.get("bienType");
  }

  onSubmit() {
    this.searchBien.bienEtage = this.searchForm.value["bienEtage"] || null;
    this.searchBien.bienPrixDeVente =
      this.searchForm.value["bienPrixDeVente"] || null;
    this.searchBien.bienNbPieceMin =
      this.searchForm.value["bienNbPieceMin"] || null;
    this.searchBien.bienNbPieceMax =
      this.searchForm.value["bienNbPieceMax"] || null;
    this.searchBien.bienSuperficie =
      this.searchForm.value["bienSuperficie"] || null;
    this.searchBien.bienType = this.searchForm.value["bienType"] || null;
    this.searchBien.bienEtat = this.searchForm.value["bienEtat"] || null;
    this.searchBien.bienTitre = this.searchForm.value["bienTitre"] || null;
    this.searchBien.bienAdresse = this.searchForm.value["bienAdresse"] || null;
    console.log(this);
    let Titre: string = this.searchForm.value["bienTitre"];
    /*
    let parametres: Partial<SearchBien>;
    if (!Titre.trim()) {
      Titre = "getAllBien";
    }
    this.searchService
      .getBien(Titre)
      .subscribe(
        response => (this.searchResult = response),
        error => console.error("Error!", error)
      );
    console.log("Success!" + this.searchResult);
    */
    this.searchService
      .getBienByParams(this.searchBien)
      .subscribe(
        response => (this.searchResult = response),
        error => console.error("Error!", error)
      );
    console.log("Success!" + this.searchResult);
  }
}
