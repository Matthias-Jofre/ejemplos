import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStatusRecordDto, UpdateStatusRecordDto } from './dto';
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

    async updateStatusRecord(updateStatusRecordDto: UpdateStatusRecordDto): Promise<StatusRecord> {
        if (!updateStatusRecordDto.id)
          throw new HttpException(  
            {
              status: HttpStatus.BAD_REQUEST,
              error: 'id attribute is required!',
            },
            HttpStatus.BAD_REQUEST,
          );
    
        const updated = await this.statusRecordRepository.update(
            updateStatusRecordDto.id,
            updateStatusRecordDto,
        );
    
        if (updated.affected > 0)
          return await this.statusRecordRepository.findOne(updateStatusRecordDto.id);
    
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'User not found!',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      async deleteStatusRecordById(id: number): Promise<StatusRecord> {
        const statusRecord = await this.statusRecordRepository.findOne(id);
        if (statusRecord !== undefined) {
          const deleted = await this.statusRecordRepository.delete(id);
    
          if (deleted.affected > 0) return statusRecord;
        }
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'StatusRecord not found!',
          },
          HttpStatus.NOT_FOUND,
        );
    }

}
