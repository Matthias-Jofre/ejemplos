import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateAddressDto } from '../address/dto';
import { CreateServiceOrderDto, UpdateOrderServiceDto } from './dto';
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

    async updateServiceOrder(updateServiceOrderDto: UpdateOrderServiceDto): Promise<ServiceOrder> {
      if (!updateServiceOrderDto.id)
        throw new HttpException(  
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'id attribute is required!',
          },
          HttpStatus.BAD_REQUEST,
        );
    
      const updated = await this.serviceOrderRepository.update(
          updateServiceOrderDto.id,
          updateServiceOrderDto,
        );
    
      if (updated.affected > 0)
        return await this.serviceOrderRepository.findOne(updateServiceOrderDto.id);
    
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'User not found!',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    async deleteServiceOrderById(id: number): Promise<ServiceOrder> {
      const serviceOrder = await this.serviceOrderRepository.findOne(id);
      if (serviceOrder !== undefined) {
        const deleted = await this.serviceOrderRepository.delete(id);
  
        if (deleted.affected > 0) return serviceOrder;
      }
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'ServiceOrder not found!',
        },
        HttpStatus.NOT_FOUND,
      );
    }

}
