import { MaxLength, IsDefined, IsString } from 'class-validator';

export class AdressePostInDto {
  @IsString()
  @IsDefined()
  @MaxLength(20)
  readonly adresseCodePostal: string;

  @IsString()
  @IsDefined()
  @MaxLength(100)
  readonly adresseNomRue: string;

  @IsString()
  @MaxLength(10)
  readonly adresseNumRue: string;

  @IsDefined()
  @IsString()
  readonly adresseVille: string;
}
