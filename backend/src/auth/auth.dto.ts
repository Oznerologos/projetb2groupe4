import {
  IsString,
  IsDefined,
  MaxLength,
  IsEmail,
  MinLength,
} from 'class-validator';

export class AuthPostInDto {
  @IsEmail()
  @IsDefined()
  @MaxLength(50)
  readonly utilisateurMail: string;

  @IsDefined()
  @IsString()
  @MinLength(5)
  readonly utilisateurMotDePasse: string;
}
