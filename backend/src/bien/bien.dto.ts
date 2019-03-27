import { IsString, IsDefined, MaxLength, MinLength, IsNumber, IsPositive } from "class-validator";

export class BienPostInDto{

    @IsString()
    @IsDefined()
    @MaxLength(150)
    @MinLength(5)
    lien_image: string;

  //  @IsNumber()
  //  @IsPositive()
  //  size: number;

    @IsString()
    @IsDefined()
    alt_image: string;

    
 
}

