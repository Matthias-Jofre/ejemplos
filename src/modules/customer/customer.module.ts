import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from '../address/address.module';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { Customer } from './entity/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer]), AddressModule],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CostumerModule {}
