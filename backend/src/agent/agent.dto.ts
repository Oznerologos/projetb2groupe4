import { IsString } from 'class-validator';

export class AgentPostInDto {
  @IsString()
  descriptionAgent: string;
}
