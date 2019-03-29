import { MaxLength, IsString, IsDefined } from 'class-validator';
import { Departement } from 'src/departement/departement.entity';

export class VillePostInDto {
  @IsDefined()
  @IsString()
  @MaxLength(50)
  readonly villeNom: string;

  @IsDefined()
  @IsString()
  @MaxLength(20)
  readonly villeCodePostal: string;

  @IsDefined()
  readonly villeLongitude: number;

  @IsDefined()
  readonly villeLatitude: number;

  @IsDefined()
  readonly villeDepartement: Departement;
}
