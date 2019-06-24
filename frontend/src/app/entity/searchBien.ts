export class SearchBien {
  constructor(
    public bienEtage: number | null,
    public bienPrixDeVente: number | null,
    public bienNbPieceMin: number | null,
    public bienNbPieceMax: number | null,
    public bienSuperficie: number | null,
    public bienType: string | null,
    public bienEtat: string | null,
    public bienTitre: string | null,
    public bienAdresse: string | null
  ) {}
}
