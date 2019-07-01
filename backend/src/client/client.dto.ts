import { IsString, IsDefined } from 'class-validator';

export class ClientPostInDto {
  @IsDefined()
  @IsString()
  readonly clientNumParrainage: string;

  @IsDefined()
  @IsString()
  readonly clientUtilisateur: string;
}
