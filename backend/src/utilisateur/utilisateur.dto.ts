import {
  IsString,
  IsDefined,
  MaxLength,
  IsEmail,
  IsEnum,
  MinLength,
} from 'class-validator';
import { EnumSexe } from 'src/enum/sexe.enum';

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

  @IsDefined()
  @IsString()
  @MinLength(5)
  readonly utilisateurMotDePasse: string;

  @IsString()
  @IsDefined()
  @MaxLength(11)
  readonly utilisateurTel: string;

  @IsString()
  @IsDefined()
  @MaxLength(50)
  readonly utilisateurPrenom: string;

  @IsDefined()
  readonly utilisateurAdresse: string;

  /*@IsDefined()
  readonly mdp: Mdp;*/
}
