import { IsString, IsDefined, MaxLength, MinLength, IsNumber, IsPositive } from "class-validator";
import { Utilisateur } from "./utilisateur.entity";

//@ApiModelProperty({ enum: ['Femme', 'Homme', 'Autre']})
//role: Sexe;

export class UserPostInDto{

    @IsString()
    @IsDefined()
    @MaxLength(50)
    mail: string;

    @IsString()
    @IsDefined()
    @MaxLength(50)
    name: string;

  //  @IsString()
  //  @IsDefined()
  //  sexe: Sexe;

    @IsString()
    @IsDefined()
    @MaxLength(11)
    numero: string;

    @IsString()
    @IsDefined()
    @MaxLength(50)   
    prenom: string;

    
    // On ne met pas la Primary Key elle est calculée par typeorm
    // date: Date; On ne la met pas car par défault, on a un new date donc pas la peine, on s'en occupe déja.

}

// Il force le developpeur a avoir certain type de variable et pas autre chose.
// Il vérifie les types