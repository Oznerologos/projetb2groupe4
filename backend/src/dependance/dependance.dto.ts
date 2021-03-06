import {
  IsString,
  IsDefined,
  IsNumber,
  MinLength,
  IsEnum,
} from 'class-validator';
import { EnumTypeDependance } from 'src/enum/type-dependance.enum';
import { Image } from 'src/image/image.entity';

export class DependancePostInDto {
  @IsNumber()
  @IsDefined()
  readonly dependanceSuperficie: number;

  @IsString()
  @MinLength(20)
  @IsDefined()
  readonly dependanceDescriptif: string;

  @IsEnum(EnumTypeDependance)
  @IsDefined()
  readonly dependanceType: EnumTypeDependance;

  @IsString()
  @IsDefined()
  readonly dependanceBien: string;

  readonly dependanceImages: Image[];
}
