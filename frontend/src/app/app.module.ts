import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { InscriptionComponent } from "./inscription/inscription.component";
import { SearchComponent } from "./search/search.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSelectModule
} from "@angular/material";

import { AjoutBienComponent } from "./ajout-bien/ajout-bien.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "inscription", component: InscriptionComponent },
  { path: "search", component: SearchComponent },
  { path: "ajout-bien", component: AjoutBienComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InscriptionComponent,
    SearchComponent,
    AjoutBienComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
