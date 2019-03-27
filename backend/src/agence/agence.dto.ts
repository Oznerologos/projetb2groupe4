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
  readonly mailAgence: string;

  @IsMobilePhone('fr')
  @MaxLength(20)
  @MinLength(4)
  readonly telAgence: string;

  @IsNumber()
  readonly fraisAgence: number;
}
