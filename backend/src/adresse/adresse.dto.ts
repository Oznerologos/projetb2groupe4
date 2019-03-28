import { MaxLength, IsDefined, IsString, IsArray } from 'class-validator';
import { Ville } from 'src/ville/ville.entity';
import { Utilisateur } from 'src/utilisateur/Utilisateur.entity';
import { Agence } from 'src/agence/agence.entity';

export class AdressePostInDto {
  @IsString()
  @IsDefined()
  @MaxLength(20)
  readonly codePostal: string;

  @IsString()
  @IsDefined()
  @MaxLength(100)
  readonly nomRue: string;

  @IsString()
  @MaxLength(10)
  readonly numRue: string;

  @IsDefined()
  @IsString()
  readonly ville: Ville;

  @IsArray()
  readonly utilisateurs: Utilisateur[];

  @IsArray()
  readonly agences: Agence[];
}
