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
  readonly dependanceSuperficie: number;

  @IsString()
  @MinLength(20)
  @IsDefined()
  readonly dependanceDescriptif: string;

  @IsEnum(EnumTypeDependance)
  readonly dependanceType: EnumTypeDependance;

  @IsString()
  @IsDefined()
  readonly bienId: string;
}
