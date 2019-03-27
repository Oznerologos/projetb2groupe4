import { MaxLength, IsDefined, IsString } from 'class-validator';

export class AdressePostInDto {
  @IsString()
  @IsDefined()
  @MaxLength(20)
  codePostal: string;

  @IsString()
  @IsDefined()
  @MaxLength(100)
  nomRue: string;

  @IsString()
  @MaxLength(10)
  numRue: string;
}
