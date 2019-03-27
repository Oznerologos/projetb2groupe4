import {
  IsString,
  IsDefined,
  MaxLength,
  MinLength,
  IsNumber,
  IsPositive,
  IsEmail,
} from 'class-validator';
import { Utilisateur } from './utilisateur.entity';

export class UserPostInDto {
  @IsEmail()
  @IsDefined()
  @MaxLength(50)
  mail: string;

  @IsString()
  @IsDefined()
  @MaxLength(50)
  name: string;

  //  @IsEnum()
  //  @IsDefined()
  //  sexe: Sexe;

  @IsString()
  @IsDefined()
  @MaxLength(11)
  numero: string;

  @IsString()
  @IsDefined()
  @MaxLength(50)
  prenom: string;
}
