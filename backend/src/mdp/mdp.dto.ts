import { MaxLength, MinLength, IsString, IsDefined } from 'class-validator';

export class MdpPostInDto {
  @IsDefined()
  @IsString()
  @MaxLength(50)
  @MinLength(5)
  readonly mdp: string;

  @IsString()
  @IsDefined()
  readonly utilisateurId: string;
}
