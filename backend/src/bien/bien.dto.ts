import { IsString, IsDefined, MaxLength, MinLength, IsNumber, IsPositive } from "class-validator";

export class BienPostInDto{

    @IsNumber()
    @IsDefined()
    etage: number;


    @IsString()
    @IsDefined()
    alt_image: string;

    @IsString()
    @IsDefined()
    @MinLength(50)
    descriptif: string;

    @IsNumber()
    @IsPositive()
    @IsDefined()
    prixMin: number;
    
    @IsNumber()
    @IsPositive()
    @IsDefined()
    prixDeVente: number;

    @IsNumber()
    @IsDefined()
    nbPiece: number;

    @IsNumber()
    @IsDefined()
    superficieBien: number;

    
    //typeBien: Enum;
    //etatBien:Enum;

    @IsDefined()
    @IsString()
    @MaxLength(50)
    titreBien: string;
}

