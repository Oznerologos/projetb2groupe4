import { IsString, IsDefined, IsNumber, MinLength } from 'class-validator';

export class CreateDependanceDto {
  @IsNumber()
  @IsDefined()
  readonly superficieDep: number;

  @IsString()
  @MinLength(20)
  @IsDefined()
  readonly descriptif: string;
}
