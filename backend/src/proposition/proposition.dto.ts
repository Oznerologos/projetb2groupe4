import { IsNumber, IsDefined, IsEnum, IsString } from 'class-validator';
import { EnumValidite } from 'src/enum/validite.enum';
import { Client } from 'src/client/client.entity';
import { Bien } from 'src/bien/bien.entity';

export class PropositionPostInDto {
  @IsNumber()
  @IsDefined()
  readonly prixVendeur: number;

  @IsNumber()
  @IsDefined()
  readonly prixAcheteur: number;

  @IsEnum(EnumValidite)
  readonly etatProposition: EnumValidite;

  @IsDefined()
  @IsString()
  readonly client: Client;

  @IsDefined()
  @IsString()
  readonly bien: Bien;
}
