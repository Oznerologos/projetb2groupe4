import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DetailBienService } from "./detail-bien.service";
import { Bien } from "../entity/bien";

@Component({
  selector: "app-detail-bien",
  templateUrl: "./detail-bien.component.html",
  styleUrls: ["./detail-bien.component.css"]
})
export class DetailBienComponent implements OnInit {
  public bienId: string;
  public bien: Bien;
  constructor(
    private detailBienService: DetailBienService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.bienId = this.route.snapshot.params.id;

    this.detailBienService
      .getBienById(this.bienId)
      .subscribe(
        response => (this.bien = response),
        error => console.error("error", error)
      );
    console.log(this);
  }
}
