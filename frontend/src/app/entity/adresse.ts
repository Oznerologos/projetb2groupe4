import { Ville } from "./ville";

export class Adresse {
  constructor(
    public adresseNomRue: string,
    public adresseNumRue: string,
    public adresseVille: Ville
  ) {}
}
