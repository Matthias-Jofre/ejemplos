import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateTechnicalEvaluationDto } from './dto';
import { TechnicalEvaluationService } from './technical-evaluation.service';

@Controller('technical-evaluation')
export class TechnicalEvaluationController {
    constructor(private readonly _technicalEvaluation: TechnicalEvaluationService,
        ) { }
      
    @Get()
    async getAllTechnicalEvaluation(@Res() response: Response) {
        try {
            const technicalEvaluations = await this._technicalEvaluation.getAllTechnicalEvaluation();
            return response.status(HttpStatus.OK).json({ ok: true, technicalEvaluations });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
        }
    }
      
    @Post()
    async createTechnicalEvaluation(@Res() response: Response, @Body() createTechnicalEvaluationDto: CreateTechnicalEvaluationDto,
    ) {
        try {
            const technicalEvaluation = await this._technicalEvaluation.createTechnicalEvaluation(createTechnicalEvaluationDto);
              return response.status(HttpStatus.OK).json({ ok: true, technicalEvaluation });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
        }
    }
}
