export class Utilisateur {
  constructor(
    public utilisateurId: string,
    public utilisateurMail: string,
    public utilisateurNom: string,
    public utilisateurPrenom: string,
    public utilisateurMotDePasse: string,
    public utilisateurTel: string,
    public utilisateurSexe: string
  ) {}
}
