import { IsEmpty, IsNotEmpty, IsString } from "class-validator";

export class CreateStatusRecordDto {
    
    @IsNotEmpty({ message: 'El campo "id" no debe estar vacío.' })
    id!: number;

    @IsString({ message: 'El campo "actualState" debe ser string.' })
    @IsNotEmpty({ message: 'El campo "actualState" no debe estar vacío.' })
    actualState!: string;
    
    @IsString({ message: 'El campo "previousState" debe ser string.' })
    @IsNotEmpty({ message: 'El campo "previousState" no debe estar vacío.' })
    previousState!: string;
}