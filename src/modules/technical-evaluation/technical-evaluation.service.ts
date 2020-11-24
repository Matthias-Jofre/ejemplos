import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateWriteOpResult } from 'typeorm';
import { CreateTechnicalEvaluationDto, UpdateTechnicalEvaluationDto } from './dto';
import { TechnicalEvaluation } from './entity/technical-evaluation.entity';

@Injectable()
export class TechnicalEvaluationService {
    constructor(
        @InjectRepository(TechnicalEvaluation) private readonly technicalEvaluationRepository: Repository<TechnicalEvaluation>,
    ){}

    async createTechnicalEvaluation(createTechnicalEvaluationDto: CreateTechnicalEvaluationDto): Promise<TechnicalEvaluation> {
        console.log(await this.technicalEvaluationRepository.findOne(undefined))  
        //if ((await this.serviceOrderRepository.findOne(createServiceOrderDto.id)) === undefined) {
              const technicalEvaluation = this.technicalEvaluationRepository.create(createTechnicalEvaluationDto);
              return this.technicalEvaluationRepository.save(technicalEvaluation);
        //    }
        //    throw new HttpException(
        //      {
        //        status: HttpStatus.CONFLICT,
        //        error: 'User already exists!',
        //      },
        //      HttpStatus.CONFLICT,
        //    );
      }
  
      async getAllTechnicalEvaluation(): Promise<TechnicalEvaluation[]> {
          return await this.technicalEvaluationRepository.find();
      }   

      async updateTechnicalEvaluation(updateTechnicalEvaluationDto: UpdateTechnicalEvaluationDto): Promise<TechnicalEvaluation> {
        if (!updateTechnicalEvaluationDto.id)
          throw new HttpException(  
            {
              status: HttpStatus.BAD_REQUEST,
              error: 'evaluationId attribute is required!',
            },
            HttpStatus.BAD_REQUEST,
          );
      
        const updated = await this.technicalEvaluationRepository.update(
            updateTechnicalEvaluationDto.id,
            updateTechnicalEvaluationDto,
          );
      
        if (updated.affected > 0)
          return await this.technicalEvaluationRepository.findOne(updateTechnicalEvaluationDto.id);
      
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'User not found!',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      async deleteTechnicalEvaluationById(id: number): Promise<TechnicalEvaluation> {
        const technicalEvaluation = await this.technicalEvaluationRepository.findOne(id);
        if (technicalEvaluation !== undefined) {
          const deleted = await this.technicalEvaluationRepository.delete(id);
    
          if (deleted.affected > 0) return technicalEvaluation;
        }
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'TechnicalEvaluation not found!',
          },
          HttpStatus.NOT_FOUND,
        );
      }

}
