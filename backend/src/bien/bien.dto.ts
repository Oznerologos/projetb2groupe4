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
import { Image } from 'src/image/image.entity';
import { Adresse } from 'src/adresse/adresse.entity';

export class BienPostInDto {
  @IsNumber()
  @IsDefined()
  readonly bienEtage: number;

  @IsString()
  @IsDefined()
  readonly bienDescriptif: string;
  @IsNumber()
  @IsPositive()
  @IsDefined()
  readonly bienPrixMin: number;

  @IsNumber()
  @IsPositive()
  @IsDefined()
  readonly bienPrixDeVente: number;

  @IsNumber()
  @IsDefined()
  readonly bienNbPiece: number;

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

  @IsDefined()
  @IsString()
  readonly bienAgent: string;

  @IsString()
  @IsDefined()
  readonly bienAgence: string;

  @IsDefined()
  @IsString()
  readonly bienClient: string;

  readonly bienImages: Image[];

  readonly bienAdresse: Adresse;

  @IsDefined()
  @IsString()
  readonly bienAdresseId: string;
}
