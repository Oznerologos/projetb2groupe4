import {
  IsString,
  IsDefined,
  MaxLength,
  IsNumber,
  IsPositive,
  IsEnum,
} from 'class-validator';
import { EnumTypeBien } from 'src/enum/type-bien.enum';
import { EnumEtatBien } from 'src/enum/etat-bien.enum';

export class SearchBienDto {
  @IsNumber()
  @IsPositive()
  readonly bienPrixDeVenteMin: number;

  @IsNumber()
  @IsPositive()
  readonly bienPrixDeVenteMax: number;

  @IsNumber()
  readonly bienNbPieceMin: number;

  @IsNumber()
  readonly bienNbPieceMax: number;

  @IsNumber()
  readonly bienSuperficieMin: number;

  @IsNumber()
  readonly bienSuperficieMax: number;

  @IsEnum(EnumTypeBien)
  readonly bienType: EnumTypeBien;

  @IsEnum(EnumEtatBien)
  readonly bienEtat: EnumEtatBien;

  @IsString()
  @MaxLength(50)
  readonly bienTitre: string;

  readonly bienVille: string;
}
