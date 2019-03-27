import {
  MaxLength,
  MinLength,
  IsMobilePhone,
  IsEmail,
  IsNumber,
} from 'class-validator';

export class AgencePostInDto {
  @IsEmail()
  @MaxLength(30)
  @MinLength(5)
  mailAgence: string;

  @IsMobilePhone('fr')
  @MaxLength(20)
  @MinLength(4)
  telAgence: string;

  @IsNumber()
  fraisAgence: number;
}
