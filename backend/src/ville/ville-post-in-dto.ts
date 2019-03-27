import {
  MaxLength,
  MinLength,
  IsMobilePhone,
  IsEmail,
  IsNumber,
} from 'class-validator';

export class VillePostInDto {
  @IsEmail()
  @MaxLength(30)
  @MinLength(5)
  mailVille: string;

  @IsMobilePhone('fr')
  @MaxLength(20)
  @MinLength(4)
  telVille: string;

  @IsNumber()
  fraisVille: number;
}
