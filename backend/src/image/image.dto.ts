import { IsString, IsDefined, MaxLength, MinLength } from 'class-validator';
import { Dependance } from 'src/dependance/dependance.entity';
import { Bien } from 'src/bien/bien.entity';

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
  @IsDefined()
  readonly dependanceId: string;

  @IsString()
  @IsDefined()
  readonly bienId: string;
}
