import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusRecord } from './entity/status-record.entity';
import { StatusRecordController } from './status-record.controller';
import { StatusRecordService } from './status-record.service';

@Module({
  controllers: [StatusRecordController],
  providers: [StatusRecordService],
  imports: [TypeOrmModule.forFeature([StatusRecord])]
})
export class StatusRecordModule {}
