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
import { Bien } from 'src/bien/bien.entity';

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
  readonly bien: Bien;

  @IsArray()
  @IsDefined()
  readonly images: Image[];
}
