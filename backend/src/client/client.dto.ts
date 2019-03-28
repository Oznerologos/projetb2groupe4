import { IsString, IsDefined, IsArray } from 'class-validator';
import { Proposition } from 'src/proposition/proposition.entity';
import { Bien } from 'src/bien/bien.entity';
import { Utilisateur } from 'src/utilisateur/Utilisateur.entity';

export class ClientPostInDto {
  @IsDefined()
  @IsString()
  readonly numParrainage: string;

  @IsArray()
  readonly propositions: Proposition[];

  @IsArray()
  readonly biens: Bien[];

  @IsDefined()
  readonly utilisateur: Utilisateur;
}
