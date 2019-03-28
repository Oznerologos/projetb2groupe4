import { IsString, IsDefined, IsArray } from 'class-validator';
import { Agent } from 'http';
import { Bien } from 'src/bien/bien.entity';
import { Utilisateur } from 'src/utilisateur/utilisateur.entity';

export class AgentPostInDto {
  @IsString()
  readonly descriptionAgent: string;

  @IsDefined()
  readonly agent: Agent;

  @IsArray()
  readonly biens: Bien[];

  @IsDefined()
  readonly utilisateur: Utilisateur;
}
