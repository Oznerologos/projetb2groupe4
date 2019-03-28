import { MaxLength, MinLength, IsString, IsDefined } from 'class-validator';
import { Utilisateur } from 'src/utilisateur/Utilisateur.entity';

export class MdpPostInDto {
  @IsDefined()
  @IsString()
  @MaxLength(50)
  @MinLength(5)
  readonly mdp: string;

  @IsString()
  @IsDefined()
  readonly utilisateur: Utilisateur;
}
