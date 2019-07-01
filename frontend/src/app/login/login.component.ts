import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Login } from "../entity/login";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public loginResult: JSON = JSON;
  public login: Login = new Login(null, null);
  submitted = false;

  public userLogged: Boolean =
    localStorage.getItem("user_token") === null ? false : true;

  constructor(
    private fb: FormBuilder,
    private readonly loginService: LoginService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      utilisateurMail: ["", [Validators.required, Validators.email]],
      utilisateurMotDePasse: ["", [Validators.required, Validators.pattern("")]]
    });

    console.log(this);
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      this.login.utilisateurMail = this.loginForm.value["utilisateurMail"];
      this.login.utilisateurMotDePasse = this.loginForm.value[
        "utilisateurMotDePasse"
      ];

      console.log(this);

      this.loginService
        .login(this.login)
        .subscribe(
          response => (
            (this.loginResult = response),
            response["status"] == 404
              ? console.error("Error 404 !")
              : localStorage.setItem(
                  "user_token",
                  JSON.stringify(response["access_token"]).split('"')[1]
                ),
            this.redirect(response["status"])
          ),
          error => console.error("Error!", error)
        );
      console.log("Success!" + this.loginResult);
    } else {
      this.toastr.error("Adresse mail ou mot de passe incorrect", "Error");
    }
    console.log(localStorage);
  }

  redirect(status) {
    if (status == 200) {
      location.reload();
      this.router.navigate(["/home"]);
    }
  }

  logout() {
    console.log("Tentative de déconnexion");

    localStorage.removeItem("user_token");
    location.reload();
    this.router.navigate(["/home"]);
  }
}
