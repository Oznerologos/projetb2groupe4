import {
  MaxLength,
  MinLength,
  IsMobilePhone,
  IsEmail,
  IsNumber,
  IsString,
  IsDefined,
  IsArray,
} from 'class-validator';
import { Bien } from 'src/bien/bien.entity';
import { Adresse } from 'src/adresse/adresse.entity';

export class AgencePostInDto {
  @IsEmail()
  @MaxLength(30)
  @MinLength(5)
  readonly mailAgence: string;

  @IsMobilePhone('fr')
  @MaxLength(20)
  @MinLength(4)
  readonly telAgence: string;

  @IsNumber()
  readonly fraisAgence: number;

  @IsArray()
  readonly biens: Bien[];

  @IsDefined()
  @IsString()
  readonly adresse: Adresse;
}
