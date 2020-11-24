import { IsNotEmpty, IsString } from "class-validator";

export class CreateTechnicalEvaluationDto{
    @IsNotEmpty({ message: 'El campo "evaluationId" no debe estar vacío.' })
    id!: number;

    @IsString({ message: 'El campo "description" debe ser string.' })
    @IsNotEmpty({ message: 'El campo "description" no debe estar vacío.' })
    description!: string;
}