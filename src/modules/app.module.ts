import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormConfig from 'src/config/orm.config';
import { AddressModule } from './address/address.module';
import { CostumerModule } from './customer/customer.module';


@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig),
  AddressModule,
  CostumerModule,
  ],
})
export class AppModule {}
