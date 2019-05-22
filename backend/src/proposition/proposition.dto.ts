import { IsNumber, IsDefined, IsEnum, IsString } from 'class-validator';
import { EnumValidite } from 'src/enum/validite.enum';

export class PropositionPostInDto {
  @IsNumber()
  @IsDefined()
  readonly propositionPrixVendeur: number;

  @IsNumber()
  @IsDefined()
  readonly propositionPrixAcheteur: number;

  @IsEnum(EnumValidite)
  readonly propositionEtat: EnumValidite;

  @IsDefined()
  @IsString()
  readonly propositionClient: string;

  @IsDefined()
  @IsString()
  readonly propositionBien: string;

  @IsString()
  readonly propositionMessage: string;
}
