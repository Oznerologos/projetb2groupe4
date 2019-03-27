import { MaxLength, IsNumber, IsString, IsDefined } from 'class-validator';

export class VillePostInDto {
  @IsDefined()
  @IsString()
  @MaxLength(50)
  nomVille: string;

  @IsDefined()
  @IsString()
  @MaxLength(20)
  codePostal: string;

  @IsDefined()
  @IsNumber()
  @MaxLength(20)
  longitude: number;

  @IsDefined()
  @IsNumber()
  @MaxLength(20)
  latitude: number;
}
