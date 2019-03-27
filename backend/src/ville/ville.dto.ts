import { MaxLength, IsNumber, IsString, IsDefined } from 'class-validator';

export class VillePostInDto {
  @IsDefined()
  @IsString()
  @MaxLength(50)
  readonly nomVille: string;

  @IsDefined()
  @IsString()
  @MaxLength(20)
  readonly codePostal: string;

  @IsDefined()
  @IsNumber()
  @MaxLength(20)
  readonly longitude: number;

  @IsDefined()
  @IsNumber()
  @MaxLength(20)
  readonly latitude: number;
}
