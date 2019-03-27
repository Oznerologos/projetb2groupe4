import { IsString, IsDefined, MaxLength, MinLength } from 'class-validator';

export class ImagePostInDto {
  @IsString()
  @IsDefined()
  @MaxLength(150)
  @MinLength(5)
  readonly lienImage: string;

  @IsString()
  @IsDefined()
  readonly altImage: string;
}
