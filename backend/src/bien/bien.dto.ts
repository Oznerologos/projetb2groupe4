import {
  IsString,
  IsDefined,
  MaxLength,
  MinLength,
  IsNumber,
  IsPositive,
  IsEnum,
} from 'class-validator';
import { EnumTypeBien } from 'src/enum/type-bien.enum';
import { EnumEtatBien } from 'src/enum/etat-bien.enum';
import { Agent } from 'src/agent/agent.entity';
import { Agence } from 'src/agence/agence.entity';
import { Client } from 'src/client/client.entity';

export class BienPostInDto {
  @IsNumber()
  @IsDefined()
  readonly bienEtage: number;

  @IsString()
  @IsDefined()
  @MinLength(50)
  readonly bienDescriptif: string;

  @IsNumber()
  @IsPositive()
  @IsDefined()
  readonly bienPrixMin: number;

  @IsNumber()
  @IsPositive()
  @IsDefined()
  readonly bienPrixDeVente: number;

  @IsNumber()
  @IsDefined()
  readonly bienNbPiece: number;

  @IsNumber()
  @IsDefined()
  readonly bienSuperficie: number;

  @IsEnum(EnumTypeBien)
  @IsDefined()
  readonly bienType: EnumTypeBien;

  @IsEnum(EnumEtatBien)
  @IsDefined()
  readonly bienEtat: EnumEtatBien;

  @IsDefined()
  @IsString()
  @MaxLength(50)
  readonly bienTitre: string;

  @IsDefined()
  @IsString()
  readonly agentId: string;

  @IsString()
  @IsDefined()
  readonly agenceId: string;

  @IsDefined()
  @IsString()
  readonly clientId: string;
}
