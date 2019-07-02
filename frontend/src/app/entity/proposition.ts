export class Proposition {
  constructor(
    public propositionId: string,
    public propositionDate: Date,
    public propositionPrixVendeur: number,
    public propositionPrixAcheteur: number,
    public propositionEtat: string,
    public propositionClient: string,
    public propositionBien: string,
    public propositionMessage: string
  ) {}
}
