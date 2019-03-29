import { MaxLength, IsString, IsDefined } from 'class-validator';

export class DepartementPostInDto {
  @IsDefined()
  @IsString()
  @MaxLength(30)
  readonly departementNom: string;
}
