import {
  IsString,
  IsDefined,
  MaxLength,
  IsEmail,
  IsEnum,
  IsArray,
} from 'class-validator';
import { EnumSexe } from 'src/enum/sexe.enum';
import { Adresse } from 'src/adresse/adresse.entity';
import { Agent } from 'https';
import { Mdp } from 'src/mdp/mdp.entity';
import { Client } from 'src/client/client.entity';

export class UserPostInDto {
  @IsEmail()
  @IsDefined()
  @MaxLength(50)
  readonly mailUtilisateur: string;

  @IsString()
  @IsDefined()
  @MaxLength(50)
  readonly nomUtilisateur: string;

  @IsEnum(EnumSexe)
  @IsDefined()
  readonly sexe: EnumSexe;

  @IsString()
  @IsDefined()
  @MaxLength(11)
  readonly telUtilisateur: string;

  @IsString()
  @IsDefined()
  @MaxLength(50)
  readonly prenomUtilisateur: string;

  @IsDefined()
  @IsString()
  readonly adresse: Adresse;

  @IsArray()
  readonly agents: Agent[];

  @IsArray()
  readonly mdps: Mdp[];

  @IsArray()
  readonly clients: Client[];
}
