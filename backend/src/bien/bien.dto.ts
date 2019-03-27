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
  etage: number;

  @IsString()
  @IsDefined()
  @MinLength(50)
  descriptif: string;

  @IsNumber()
  @IsPositive()
  @IsDefined()
  prixMin: number;

  @IsNumber()
  @IsPositive()
  @IsDefined()
  prixDeVente: number;

  @IsNumber()
  @IsDefined()
  nbPiece: number;

  @IsNumber()
  @IsDefined()
  superficieBien: number;

  @IsEnum(EnumTypeBien)
  @IsDefined()
  typeBien: EnumTypeBien;

  @IsEnum(EnumEtatBien)
  @IsDefined()
  etatBien: EnumEtatBien;

  @IsDefined()
  @IsString()
  @MaxLength(50)
  titreBien: string;
}
