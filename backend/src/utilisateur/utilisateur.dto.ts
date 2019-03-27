import {
  IsString,
  IsDefined,
  MaxLength,
  MinLength,
  IsNumber,
  IsPositive,
  IsEmail,
  IsEnum,
} from 'class-validator';
import { Utilisateur } from './utilisateur.entity';
import { EnumSexe } from 'src/enum/sexe.enum';

// @ApiModelProperty({ enum: ['Femme', 'Homme', 'Autre']})
// role: Sexe;

export class UserPostInDto {
  @IsEmail()
  @IsDefined()
  @MaxLength(50)
  mail: string;

  @IsString()
  @IsDefined()
  @MaxLength(50)
  name: string;

  @IsEnum(EnumSexe)
  @IsDefined()
  sexe: EnumSexe;

  @IsString()
  @IsDefined()
  @MaxLength(11)
  numero: string;

  @IsString()
  @IsDefined()
  @MaxLength(50)
  prenom: string;
}
