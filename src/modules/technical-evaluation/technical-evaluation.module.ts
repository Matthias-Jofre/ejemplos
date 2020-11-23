import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnicalEvaluation } from './entity/technical-evaluation.entity';
import { TechnicalEvaluationController } from './technical-evaluation.controller';
import { TechnicalEvaluationService } from './technical-evaluation.service';

@Module({
  controllers: [TechnicalEvaluationController],
  providers: [TechnicalEvaluationService],
  imports: [TypeOrmModule.forFeature([TechnicalEvaluation])]
})
export class TechnicalEvaluationModule {}
