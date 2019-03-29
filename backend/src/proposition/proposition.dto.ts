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
  readonly clientId: string;

  @IsDefined()
  @IsString()
  readonly bienId: string;
}
