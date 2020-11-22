import { IsEmpty, IsNotEmpty, IsOptional} from "class-validator";

export class CreateServiceOrderDto {
    
    @IsEmpty({ message: 'El campo "id" no debe estar vacío.' })
    @IsOptional()
    id?: number;
}