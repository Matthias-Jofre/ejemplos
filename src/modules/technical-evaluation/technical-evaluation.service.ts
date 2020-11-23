import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTechnicalEvaluationDto } from './dto';
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

}
