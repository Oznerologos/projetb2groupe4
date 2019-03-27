import { IsString } from 'class-validator';

export class AgentPostInDto {
  @IsString()
  readonly descriptionAgent: string;
}
