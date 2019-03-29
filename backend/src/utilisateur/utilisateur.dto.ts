import {
  IsString,
  IsDefined,
  MaxLength,
  IsEmail,
  IsEnum,
} from 'class-validator';
import { EnumSexe } from 'src/enum/sexe.enum';
import { Adresse } from 'src/adresse/adresse.entity';

export class UtilisateurPostInDto {
  @IsEmail()
  @IsDefined()
  @MaxLength(50)
  readonly utilisateurMail: string;

  @IsString()
  @IsDefined()
  @MaxLength(50)
  readonly utilisateurNom: string;

  @IsEnum(EnumSexe)
  @IsDefined()
  readonly utilisateurSexe: EnumSexe;

  @IsString()
  @IsDefined()
  @MaxLength(11)
  readonly utilisateurTel: string;

  @IsString()
  @IsDefined()
  @MaxLength(50)
  readonly utilisateurPrenom: string;

  @IsDefined()
  @IsString()
  readonly adresse: Adresse;
}
