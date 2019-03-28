import {
  MaxLength,
  IsNumber,
  IsString,
  IsDefined,
  IsArray,
} from 'class-validator';
import { Adresse } from 'src/adresse/adresse.entity';
import { Departement } from 'src/departement/departement.entity';

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
  readonly longitude: number;

  @IsDefined()
  @IsNumber()
  readonly latitude: number;

  @IsDefined()
  readonly departement: Departement;

  readonly adresses: Adresse[];
}
