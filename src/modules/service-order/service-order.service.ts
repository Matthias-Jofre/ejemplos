import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServiceOrderDto } from './dto';
import { ServiceOrder } from './entity/service-order.entity';

@Injectable()
export class ServiceOrderService {
    
    constructor(
        @InjectRepository(ServiceOrder) private readonly serviceOrderRepository: Repository<ServiceOrder>,
    )   {}

    async createServiceOrder(createServiceOrderDto: CreateServiceOrderDto): Promise<ServiceOrder> {
      console.log(await this.serviceOrderRepository.findOne(undefined))  
      //if ((await this.serviceOrderRepository.findOne(createServiceOrderDto.id)) === undefined) {
            const user = this.serviceOrderRepository.create(createServiceOrderDto);
            return this.serviceOrderRepository.save(user);
      //    }
      //    throw new HttpException(
      //      {
      //        status: HttpStatus.CONFLICT,
      //        error: 'User already exists!',
      //      },
      //      HttpStatus.CONFLICT,
      //    );
    }

    async getAllServiceOrders(): Promise<ServiceOrder[]> {
        return await this.serviceOrderRepository.find();
    }    
}
