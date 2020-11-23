import { PartialType } from "@nestjs/mapped-types";
import { CreateTechnicalEvaluationDto } from "./create-technical-evaluation.dto";

export class UpdateTechnicalEvaluation extends PartialType(CreateTechnicalEvaluationDto) {}