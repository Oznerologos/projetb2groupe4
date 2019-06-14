import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { InscriptionComponent } from "./inscription/inscription.component";
import {
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSelectModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { AjoutBienComponent } from "./ajout-bien/ajout-bien.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "inscription", component: InscriptionComponent },
  { path: "ajout-bien", component: AjoutBienComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InscriptionComponent,
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
