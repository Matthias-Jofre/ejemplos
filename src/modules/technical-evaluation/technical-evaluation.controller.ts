import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateTechnicalEvaluationDto, UpdateTechnicalEvaluationDto } from './dto';
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

    @Put()
    async updateTechnicalEvaluation(@Res() response: Response, @Body() updateTechnicalEvaluationDto: UpdateTechnicalEvaluationDto,
    ) {
      try {
        const technicalEvaluation = await this._technicalEvaluation.updateTechnicalEvaluation(updateTechnicalEvaluationDto);
          return response.status(HttpStatus.OK).json({ok: true, technicalEvaluation})
      } catch (error) {
        return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
      }
    }

    @Delete()
    async deleteTechnicalEvaluationById(@Res() response: Response, @Query() queries: { id: number; view?: string },
    ) {
      try {
        const technicalEvaluation = await this._technicalEvaluation.deleteTechnicalEvaluationById(queries.id);
          return response.status(HttpStatus.OK).json({ok: true, technicalEvaluation})
      } catch (error) {
        return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
      }
    }

}
