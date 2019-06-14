import { Departement } from "./departement";

export class Ville {
  constructor(
    public villeNom: string,
    public villeCodePostal: string,
    public villeLongitude: number,
    public villeLatitude: number,
    public departement: Departement
  ) {}
}
