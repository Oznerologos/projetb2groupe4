import { IsString, IsDefined, MaxLength, MinLength } from 'class-validator';
import { Dependance } from 'src/dependance/dependance.entity';
import { Bien } from 'src/bien/bien.entity';

export class ImagePostInDto {
  @IsString()
  @IsDefined()
  @MaxLength(150)
  @MinLength(5)
  readonly lienImage: string;

  @IsString()
  @IsDefined()
  readonly altImage: string;

  @IsString()
  @IsDefined()
  readonly dependance: Dependance;

  @IsString()
  @IsDefined()
  readonly bien: Bien;
}
