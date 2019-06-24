import { Component, OnInit } from "@angular/core";
import { SearchService } from "./search.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SearchBienDto } from "./search.dto";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  public listeBienType: string[] = ["NONE", "Maison", "Appartement"];
  public searchResult: [] = [];
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
    console.log(this);
    let Titre: string = this.searchForm.value["bienTitre"];
    let parametres: Partial<SearchBienDto>;
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
  }
}
