import { Body, Controller, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { Method } from '../user/enum';
import { CreateServiceOrderDto } from './dto';
import { ServiceOrderService } from './service-order.service';
import { Response } from 'express';
import { UserService } from '../user/user.service';

@Controller('service-order')
export class ServiceOrderController {
  constructor(private readonly _serviceOrder: ServiceOrderService,
  ) { }

  @Get()
  async getAllServiceOrders(@Res() response: Response) {
    try {
      const serviceOrders = await this._serviceOrder.getAllServiceOrders();
      return response.status(HttpStatus.OK).json({ ok: true, serviceOrders });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
    }
  }

  @Post()
  async createServiceOrder(@Res() response: Response, @Body() createServiceOrderDto: CreateServiceOrderDto,
  ) {
    try {
      const serviceOrder = await this._serviceOrder.createServiceOrder(createServiceOrderDto);
        return response.status(HttpStatus.OK).json({ ok: true, serviceOrder });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ ok: false, error });
    }
  }
}

