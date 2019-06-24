export class Bien {
  constructor(
    public typeBien: string,
    public image: string,
    public nombreEtage: number,
    public description: string,
    public prixVente: number,
    public prixMinimum: number,
    public nomDependance: string,
    public imageDependance: string
  ) {}
}
