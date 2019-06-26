export class SearchBien {
  constructor(
    public bienPrixDeVenteMin: number | null,
    public bienPrixDeVenteMax: number | null,
    public bienNbPieceMin: number | null,
    public bienNbPieceMax: number | null,
    public bienSuperficieMin: number | null,
    public bienSuperficieMax: number | null,
    public bienType: string | null,
    public bienEtat: string | null,
    public bienTitre: string | null,
    public bienVille: string | null
  ) {}
}
