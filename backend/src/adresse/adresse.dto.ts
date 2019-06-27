import { MaxLength, IsDefined, IsString, IsNumber } from 'class-validator';
import { Ville } from 'src/ville/ville.entity';

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
  @IsNumber()
  readonly adresseVilleId: number;

  readonly adresseVille: Ville;
}
