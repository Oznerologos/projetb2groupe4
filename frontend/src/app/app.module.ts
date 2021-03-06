import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { InscriptionComponent } from "./inscription/inscription.component";
import { SearchComponent } from "./search/search.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import {
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSelectModule,
  MatAutocompleteModule
} from "@angular/material";

import { AjoutBienComponent } from "./ajout-bien/ajout-bien.component";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";
import { LoginComponent } from "./login/login.component";
import { ProfilComponent } from "./profil/profil.component";
import { AProposComponent } from "./a-propos/a-propos.component";
import { PolitiqueConfidentialComponent } from "./politique-confidential/politique-confidential.component";
import { DetailBienComponent } from "./detail-bien/detail-bien.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "inscription", component: InscriptionComponent },
  { path: "search", component: SearchComponent },
  { path: "ajout-bien", component: AjoutBienComponent },
  { path: "login", component: LoginComponent },
  { path: "profil", component: ProfilComponent },
  { path: "a-propos", component: AProposComponent },
  { path: "politique", component: PolitiqueConfidentialComponent },
  { path: "bien/:id", component: DetailBienComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InscriptionComponent,
    SearchComponent,
    AjoutBienComponent,
    LoginComponent,
    ProfilComponent,
    AProposComponent,
    PolitiqueConfidentialComponent,
    DetailBienComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
