import { IsString, IsDefined, IsArray } from 'class-validator';

export class AgentPostInDto {
  @IsString()
  readonly agentDescription: string;

  @IsDefined()
  @IsString()
  readonly agentAgence: string;

  @IsDefined()
  @IsString()
  readonly utilisateurId: string;
}
