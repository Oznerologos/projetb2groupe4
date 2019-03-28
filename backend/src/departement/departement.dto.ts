import {
  MaxLength,
  IsString,
  IsDefined,
  IsNumber,
  IsArray,
} from 'class-validator';
import { Ville } from 'src/ville/ville.entity';

export class DepartementPostInDto {
  @IsDefined()
  @IsString()
  @MaxLength(30)
  readonly nomDepartement: string;

  @IsArray()
  readonly villes: Ville[];
}
