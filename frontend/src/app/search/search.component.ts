import { Component, OnInit } from "@angular/core";
import { SearchService } from "./search.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SearchBien } from "../entity/searchBien";
import { Observable } from "rxjs";
import { startWith, map } from "rxjs/operators";
import { Departement } from "../entity/departement";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  public listeBienType: string[] = ["Appartement", "Maison"];
  public searchResult: [] = [];
  public listeDepartement: Departement[];
  public filtredListeDepartement: Observable<Departement[]>;
  public searchBien: Partial<SearchBien> = new Object();

  constructor(
    private fb: FormBuilder,
    private readonly searchService: SearchService
  ) {
    /*this.filtredListeDepartement = this.searchForm.value[
      "bienDepartement"
    ].valueChanges.pipe(
      startWith(""),
      map(dep => (dep ? this.filtredDep(dep) : this.listeDepartement.slice()))
    );*/
  }

  /*private filtredDep(value: string): Departement[] {
    const filterValue = value.toLowerCase();

    return this.listeDepartement.filter(
      dep => dep.name.toLowerCase().indexOf(filterValue) === 0
    );
  }*/

  ngOnInit() {
    this.searchForm = this.fb.group({
      bienPrixDeVenteMin: ["", [Validators.required]],
      bienPrixDeVenteMax: ["", [Validators.required]],
      bienTitre: ["", [Validators.required, Validators.minLength(0)]],
      bienType: ["", [Validators.required]],
      bienDepartement: ["", [Validators.required]]
    });

    console.log(this);
  }

  promise = new Promise((resolve, reject) => {
    resolve(this.getVilles());
  });

  async getVilles() {
    await this.searchService
      .getDepartements()
      .then(data =>
        data.subscribe(response => (this.listeDepartement = response))
      );
  }

  onSubmit() {
    this.searchBien.bienPrixDeVenteMin =
      this.searchForm.value["bienPrixDeVenteMin"] || 0;
    this.searchBien.bienPrixDeVenteMax =
      this.searchForm.value["bienPrixDeVenteMax"] || 9999999999;
    this.searchBien.bienNbPieceMin =
      this.searchForm.value["bienNbPieceMin"] || 0;
    this.searchBien.bienNbPieceMax =
      this.searchForm.value["bienNbPieceMax"] || 999;
    this.searchBien.bienSuperficieMin =
      this.searchForm.value["bienSuperficieMin"] || 0;
    this.searchBien.bienSuperficieMax =
      this.searchForm.value["bienSuperficieMax"] || 9999999;
    this.searchBien.bienType = this.searchForm.value["bienType"] || "Maison";
    this.searchBien.bienEtat = this.searchForm.value["bienEtat"] || "Non Vendu";
    this.searchBien.bienTitre = this.searchForm.value["bienTitre"] || "";
    this.searchBien.bienDepartement =
      this.searchForm.value["bienDepartement"] || null;
    console.log(this);
    this.searchService
      .getBienByParams(this.searchBien)
      .subscribe(
        response => (this.searchResult = response),
        error => console.error("Error!", error)
      );
    console.log("Success!" + this.searchResult);
  }
}
