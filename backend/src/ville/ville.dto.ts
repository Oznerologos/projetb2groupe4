import {
  MaxLength,
  IsNumber,
  IsString,
  IsDefined,
  IsArray,
} from 'class-validator';
import { Adresse } from 'src/adresse/adresse.entity';

export class VillePostInDto {
  @IsDefined()
  @IsString()
  @MaxLength(50)
  readonly nomVille: string;

  @IsDefined()
  @IsString()
  @MaxLength(20)
  readonly codePostal: string;

  @IsDefined()
  @IsNumber()
  @MaxLength(20)
  readonly longitude: number;

  @IsDefined()
  @IsNumber()
  @MaxLength(20)
  readonly latitude: number;

  @IsDefined()
  @IsNumber()
  readonly departement: number;

  @IsArray()
  readonly adresses: Adresse[];
}
