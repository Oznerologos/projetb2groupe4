import { MaxLength, IsDefined, IsString } from 'class-validator';

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
}
