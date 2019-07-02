export class Bien {
  constructor(
    public bienId: string,
    public bienEtage: number,
    public bienDescriptif: string,
    public bienPrixMin: number,
    public bienPrixDeVente: number,
    public bienNbPiece: number,
    public bienSuperficie: number,
    public bienType: string,
    public bienEtat: string,
    public bienTitre: string,
    public propositions: any[]
  ) {}
}
