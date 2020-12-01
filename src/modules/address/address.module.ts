import { Address } from './entity/address.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  controllers: [AddressController],
  providers: [AddressService],
  exports: [AddressService]
})
export class AddressModule {}
