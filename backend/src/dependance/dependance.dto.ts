import {
  IsString,
  IsDefined,
  IsNumber,
  MinLength,
  IsEnum,
} from 'class-validator';
import { EnumTypeDependance } from 'src/enum/type-dependance.enum';

export class CreateDependanceDto {
  @IsNumber()
  @IsDefined()
  readonly superficieDep: number;

  @IsString()
  @MinLength(20)
  @IsDefined()
  readonly descriptif: string;

  @IsEnum(EnumTypeDependance)
  type: EnumTypeDependance;
}
