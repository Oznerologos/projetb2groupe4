import { IsNumber, IsDefined, IsEnum } from 'class-validator';
import { EnumValidite } from 'src/enum/validite.enum';

export class PropositionPostInDto {
  @IsNumber()
  @IsDefined()
  readonly prixVendeur: number;

  @IsNumber()
  @IsDefined()
  readonly prixAcheteur: number;

  @IsEnum(EnumValidite)
  readonly etatProposition: EnumValidite;
}
