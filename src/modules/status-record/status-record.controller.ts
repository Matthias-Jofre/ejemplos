import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Query, Res } from '@nestjs/common';
import { StatusRecord } from './entity/status-record.entity';
import { Response } from 'express';
import { StatusRecordService } from './status-record.service';
import { CreateStatusRecordDto,  UpdateStatusRecordDto } from './dto';
import { Method } from '../user/enum';

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

    @Put()
    async updateStatusRecord(@Res() response: Response, @Body() updateStatusRecordDto: UpdateStatusRecordDto,
    ) {
      try {
        const statusRecord = await this._statusRecord.updateStatusRecord(updateStatusRecordDto);
          return response.status(HttpStatus.OK).json({ok: true, statusRecord})
      } catch (error) {
        return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
      }
    }

    @Delete()
    async deleteStatusRecordById(@Res() response: Response, @Query() queries: { id: number; view?: string },
    ) {
      try {
        const statusRecord = await this._statusRecord.deleteStatusRecordById(queries.id);
          return response.status(HttpStatus.OK).json({ok: true, statusRecord})
      } catch (error) {
        return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
      }
    }

}
