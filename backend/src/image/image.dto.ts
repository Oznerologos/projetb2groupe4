import { IsString, IsDefined, MaxLength, MinLength } from 'class-validator';

export class ImagePostInDto {
  @IsString()
  @IsDefined()
  @MaxLength(150)
  @MinLength(5)
  readonly imageLien: string;

  @IsString()
  @IsDefined()
  readonly imageAlt: string;

  @IsString()
  readonly imageDependance: string;

  @IsString()
  readonly imageBien: string;
}
