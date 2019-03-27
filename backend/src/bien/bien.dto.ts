import {
  IsString,
  IsDefined,
  MaxLength,
  MinLength,
  IsNumber,
  IsPositive,
  IsEnum,
} from 'class-validator';
import { EnumTypeBien } from 'src/enum/type-bien.enum';
import { EnumEtatBien } from 'src/enum/etat-bien.enum';

export class BienPostInDto {
  @IsNumber()
  @IsDefined()
  readonly etage: number;

  @IsString()
  @IsDefined()
  @MinLength(50)
  readonly descriptif: string;

  @IsNumber()
  @IsPositive()
  @IsDefined()
  readonly prixMin: number;

  @IsNumber()
  @IsPositive()
  @IsDefined()
  readonly prixDeVente: number;

  @IsNumber()
  @IsDefined()
  readonly nbPiece: number;

  @IsNumber()
  @IsDefined()
  readonly superficieBien: number;

  @IsEnum(EnumTypeBien)
  @IsDefined()
  readonly typeBien: EnumTypeBien;

  @IsEnum(EnumEtatBien)
  @IsDefined()
  readonly etatBien: EnumEtatBien;

  @IsDefined()
  @IsString()
  @MaxLength(50)
  readonly titreBien: string;
}
