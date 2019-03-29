import { IsString, IsDefined, IsArray } from 'class-validator';

export class ClientPostInDto {
  @IsDefined()
  @IsString()
  readonly clientNumParrainage: string;

  @IsDefined()
  @IsString()
  readonly utilisateurId: string;
}
