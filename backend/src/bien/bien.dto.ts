import {
  IsString,
  IsDefined,
  MaxLength,
  MinLength,
  IsNumber,
  IsPositive,
  IsEnum,
  IsArray,
} from 'class-validator';
import { EnumTypeBien } from 'src/enum/type-bien.enum';
import { EnumEtatBien } from 'src/enum/etat-bien.enum';
import { Dependance } from 'src/dependance/dependance.entity';
import { Image } from 'src/image/image.entity';
import { Agent } from 'src/agent/agent.entity';
import { Agence } from 'src/agence/agence.entity';
import { Client } from 'src/client/client.entity';

export class BienPostInDto {
  @IsNumber()
  @IsDefined()
  readonly etage: number;

  @IsString()
  @IsDefined()
  @MinLength(50)
  readonly descriptif: string;

  @IsNumber()
  @IsPositive()
  @IsDefined()
  readonly prixMin: number;

  @IsNumber()
  @IsPositive()
  @IsDefined()
  readonly prixDeVente: number;

  @IsNumber()
  @IsDefined()
  readonly nbPiece: number;

  @IsNumber()
  @IsDefined()
  readonly superficieBien: number;

  @IsEnum(EnumTypeBien)
  @IsDefined()
  readonly typeBien: EnumTypeBien;

  @IsEnum(EnumEtatBien)
  @IsDefined()
  readonly etatBien: EnumEtatBien;

  @IsDefined()
  @IsString()
  @MaxLength(50)
  readonly titreBien: string;

  @IsArray()
  readonly dependances: Dependance[];

  @IsArray()
  readonly images: Image[];

  @IsDefined()
  @IsString()
  readonly agent: Agent;

  @IsString()
  @IsDefined()
  readonly agence: Agence;

  @IsDefined()
  @IsString()
  readonly client: Client;

  @IsArray()
  readonly clients: Client[];
}
