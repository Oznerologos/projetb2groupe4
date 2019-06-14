import { Component, OnInit } from "@angular/core";
import { SearchService } from "./search.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { trimTrailingNulls } from "@angular/compiler/src/render3/view/util";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private readonly searchService: SearchService
  ) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      bienTitre: [
        "",
        [
          /*Validators.required, Validators.minLength(0)*/
        ]
      ]
    });
  }

  get bienTitre() {
    return this.searchForm.get("bienTitre");
  }

  onSubmit() {
    console.log(this);
    let value: string = this.searchForm.value["bienTitre"];
    if (!value.trim()) {
      value = "getAllBien";
    }
    this.searchService
      .getBien(value)
      .subscribe(
        response => console.log("Success!", response),
        error => console.error("Error!", error)
      );
  }
}
