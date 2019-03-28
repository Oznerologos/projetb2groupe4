import {
  IsString,
  IsDefined,
  IsNumber,
  MinLength,
  IsEnum,
  IsArray,
} from 'class-validator';
import { EnumTypeDependance } from 'src/enum/type-dependance.enum';
import { Image } from 'src/image/image.entity';

export class CreateDependanceDto {
  @IsNumber()
  @IsDefined()
  readonly superficieDep: number;

  @IsString()
  @MinLength(20)
  @IsDefined()
  readonly descriptif: string;

  @IsEnum(EnumTypeDependance)
  readonly typeDep: EnumTypeDependance;

  @IsString()
  @IsDefined()
  readonly bien: string;

  @IsArray()
  @IsDefined()
  readonly images: Image[];
}
