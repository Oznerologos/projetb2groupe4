import { Adresse } from "./adresse";

export class Utilisateur {
  constructor(
    public utilisateurNom: string,
    public utilisateurPrenom: string,
    public utilisateurMail: string,
    public utilisateurMdp: string,
    public utilisateurNumero: string,
    public utilisateurSexe: string,
    public utilisateurAdresse: Adresse
  ) {}
}
