import {
  MaxLength,
  MinLength,
  IsMobilePhone,
  IsEmail,
  IsNumber,
  IsString,
  IsDefined,
} from 'class-validator';

export class AgencePostInDto {
  @IsEmail()
  @MaxLength(30)
  @MinLength(5)
  readonly agenceMail: string;

  @MaxLength(20)
  @MinLength(4)
  readonly agenceTel: string;

  @IsNumber()
  readonly agenceFrais: number;

  @IsDefined()
  @IsString()
  readonly agenceAdresse: string;
}
