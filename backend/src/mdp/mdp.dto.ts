import { MaxLength, MinLength, IsString, IsDefined } from 'class-validator';

export class MdpPostInDto {
  @IsDefined()
  @IsString()
  @MaxLength(50)
  @MinLength(5)
  mdp: string;
}
