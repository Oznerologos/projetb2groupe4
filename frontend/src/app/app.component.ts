import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "frontend";

  constructor(private router: Router) {}

  ngOnInit() {
<<<<<<< HEAD
    // this.router.navigate(["/home"]);
=======
    //this.router.navigate(["/home"]);
>>>>>>> 0d5ed5040315913e561f299cfd96aaa7290679e9
  }

  public userLogged: Boolean =
    localStorage.getItem("user_token") === null ? false : true;
}
