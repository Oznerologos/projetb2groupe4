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
import { Adresse } from 'src/adresse/adresse.entity';

export class SearchBienDto {
  @IsNumber()
  @IsDefined()
  readonly bienEtage: number;

  @IsNumber()
  @IsPositive()
  @IsDefined()
  readonly bienPrixDeVente: number;

  @IsNumber()
  @IsDefined()
  readonly bienNbPieceMin: number;

  @IsNumber()
  @IsDefined()
  readonly bienNbPieceMax: number;

  @IsNumber()
  @IsDefined()
  readonly bienSuperficie: number;

  @IsEnum(EnumTypeBien)
  @IsDefined()
  readonly bienType: EnumTypeBien;

  @IsEnum(EnumEtatBien)
  @IsDefined()
  readonly bienEtat: EnumEtatBien;

  @IsDefined()
  @IsString()
  @MaxLength(50)
  readonly bienTitre: string;

  readonly bienAdresse: Adresse;
}
