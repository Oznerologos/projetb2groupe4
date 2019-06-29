import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "frontend";

  public userLogged: Boolean =
    localStorage.getItem("user_token") === null ? false : true;
}
