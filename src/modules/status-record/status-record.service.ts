import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStatusRecordDto } from './dto';
import { StatusRecord } from './entity/status-record.entity';

@Injectable()
export class StatusRecordService {

    constructor(
        @InjectRepository(StatusRecord) private readonly statusRecordRepository: Repository<StatusRecord>,
    )   {}

    async createStatusRecord(createStatusRecordDto: CreateStatusRecordDto): Promise<StatusRecord> {
        console.log(await this.statusRecordRepository.findOne(undefined))  
        //if ((await this.serviceOrderRepository.findOne(createServiceOrderDto.id)) === undefined) {
              const status = this.statusRecordRepository.create(createStatusRecordDto);
              return this.statusRecordRepository.save(status);
        //    }
        //    throw new HttpException(
        //      {
        //        status: HttpStatus.CONFLICT,
        //        error: 'User already exists!',
        //      },
        //      HttpStatus.CONFLICT,
        //    );
      }

    async getAllStatusRecord(): Promise<StatusRecord[]> {
        return await this.statusRecordRepository.find();
    }          

}
