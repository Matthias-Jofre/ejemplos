import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { StatusRecord } from './entity/status-record.entity';
import { Response } from 'express';
import { StatusRecordService } from './status-record.service';
import { CreateStatusRecordDto } from './dto';

@Controller('status-record')
export class StatusRecordController {
    constructor(private readonly _statusRecord: StatusRecordService, 
        ){}

    @Get()
    async getAllStatusRecord(@Res() response: Response) {
        try {
            const StatusRecord = await this._statusRecord.getAllStatusRecord();
            return response.status(HttpStatus.OK).json({ ok: true, StatusRecord });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
        }
    }
      
    @Post()
    async createStatusRecord(@Res() response: Response, @Body() createStatusRecordDto: CreateStatusRecordDto,
    ) {
        try {
            const StatusRecord = await this._statusRecord.createStatusRecord(createStatusRecordDto);
              return response.status(HttpStatus.OK).json({ ok: true, StatusRecord });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
        }
    }
}
